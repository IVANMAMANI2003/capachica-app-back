import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { hash, compare } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { randomBytes } from 'crypto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.usuario.findMany({
      include: {
        usuariosRoles: {
          include: {
            rol: true
          }
        }
      }
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
      include: {
        usuariosRoles: {
          include: {
            rol: true
          }
        },
        persona: true
      }
    });
  }

  async findById(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: {
        usuariosRoles: {
          include: {
            rol: true
          }
        }
      }
    });
  }

  async register(data: RegisterUserDto) {
    try {
      // Verificar si la subdivisión existe
      const subdivision = await this.prisma.subdivision.findUnique({
        where: { id: data.subdivisionId },
      });

      if (!subdivision) {
        throw new NotFoundException(`Subdivisión con ID ${data.subdivisionId} no encontrada`);
      }

      // Verificar si ya existe un usuario con ese email
      const existingUser = await this.prisma.usuario.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        throw new BadRequestException(`Ya existe un usuario con el email ${data.email}`);
      }

      // Crear la persona
      const persona = await this.prisma.persona.create({
        data: {
          nombre: data.nombre,
          apellidos: data.apellidos,
          telefono: data.telefono,
          direccion: data.direccion,
          fotoPerfilUrl: data.fotoPerfilUrl,
          fechaNacimiento: data.fechaNacimiento,
          subdivisionId: data.subdivisionId,
        },
      });

      // Hashear la contraseña
      const hashedPassword = await hash(data.password, 10);
      
      // Crear el usuario
      const usuario = await this.prisma.usuario.create({
        data: {
          email: data.email,
          passwordHash: hashedPassword,
          personaId: persona.id,
        },
      });

      // Buscar el rol de usuario regular (asumiendo que tiene ID 3)
      const userRole = await this.prisma.role.findFirst({
        where: { nombre: 'User' },
      });

      if (!userRole) {
        throw new InternalServerErrorException('No se encontró el rol de usuario regular');
      }

      // Asignar el rol de usuario regular
      await this.prisma.usuariosRoles.create({
        data: {
          usuarioId: usuario.id,
          rolId: userRole.id,
        },
      });

      return usuario;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      
      console.error('Error al registrar usuario:', error);
      throw new InternalServerErrorException('Error al registrar el usuario. Por favor, intente nuevamente.');
    }
  }

  async create(data: CreateUserDto) {
    try {
      // Verificar si la persona existe
      const persona = await this.prisma.persona.findUnique({
        where: { id: data.persona_id },
      });

      if (!persona) {
        throw new NotFoundException(`Persona con ID ${data.persona_id} no encontrada`);
      }

      // Verificar si ya existe un usuario con ese email
      const existingUser = await this.prisma.usuario.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        throw new BadRequestException(`Ya existe un usuario con el email ${data.email}`);
      }

      const hashedPassword = await hash(data.password, 10);
      
      return this.prisma.usuario.create({
        data: {
          email: data.email,
          passwordHash: hashedPassword,
          personaId: data.persona_id,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      
      console.error('Error al crear usuario:', error);
      throw new InternalServerErrorException('Error al crear el usuario. Por favor, intente nuevamente.');
    }
  }

  async update(id: number, data: UpdateUserDto) {
    try {
      // Verificar si el usuario existe
      const user = await this.prisma.usuario.findUnique({
        where: { id },
      });

      if (!user) {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
      }

      // Si se está actualizando el email, verificar que no exista otro usuario con ese email
      if (data.email && data.email !== user.email) {
        const existingUser = await this.prisma.usuario.findUnique({
          where: { email: data.email },
        });

        if (existingUser) {
          throw new BadRequestException(`Ya existe un usuario con el email ${data.email}`);
        }
      }

      const updateData: any = {};
      
      if (data.email) {
        updateData.email = data.email;
      }
      
      if (data.password) {
        updateData.passwordHash = await hash(data.password, 10);
      }
      
      if (data.esta_activo !== undefined) {
        updateData.estaActivo = data.esta_activo;
      }

      return this.prisma.usuario.update({
        where: { id },
        data: updateData,
      });
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      
      console.error('Error al actualizar usuario:', error);
      throw new InternalServerErrorException('Error al actualizar el usuario. Por favor, intente nuevamente.');
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.usuario.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
  }

  async assignRole(userId: number, roleId: number) {
    try {
      // Verificar si el usuario existe
      const user = await this.prisma.usuario.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
      }

      // Verificar si el rol existe
      const role = await this.prisma.role.findUnique({
        where: { id: roleId },
      });

      if (!role) {
        throw new NotFoundException(`Rol con ID ${roleId} no encontrado`);
      }

      return this.prisma.usuariosRoles.create({
        data: {
          usuarioId: userId,
          rolId: roleId,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      
      if (error.code === 'P2002') {
        throw new BadRequestException('El usuario ya tiene asignado este rol');
      }
      
      console.error('Error al asignar rol:', error);
      throw new InternalServerErrorException('Error al asignar el rol. Por favor, intente nuevamente.');
    }
  }

  async removeRole(userId: number, roleId: number) {
    try {
      return await this.prisma.usuariosRoles.deleteMany({
        where: {
          usuarioId: userId,
          rolId: roleId,
        },
      });
    } catch (error) {
      console.error('Error al eliminar rol:', error);
      throw new InternalServerErrorException('Error al eliminar el rol. Por favor, intente nuevamente.');
    }
  }

  async requestPasswordReset(data: RequestPasswordResetDto) {
    try {
      // Buscar el usuario por email
      const user = await this.prisma.usuario.findUnique({
        where: { email: data.email },
      });

      if (!user) {
        // Por seguridad, no revelamos si el email existe o no
        return { message: 'Si el email existe, se enviará un enlace de restablecimiento' };
      }

      // Generar token de restablecimiento
      const resetToken = randomBytes(32).toString('hex');
      const resetTokenExpires = new Date();
      resetTokenExpires.setHours(resetTokenExpires.getHours() + 1); // Token válido por 1 hora

      // Guardar el token en la base de datos
      await this.prisma.usuario.update({
        where: { id: user.id },
        data: {
          recoveryToken: resetToken,
          recoveryTokenExpiresAt: resetTokenExpires,
        },
      });

      // TODO: Enviar email con el token
      // Por ahora, solo devolvemos el token para pruebas
      return {
        message: 'Si el email existe, se enviará un enlace de restablecimiento',
        token: resetToken, // En producción, esto no se debe devolver
      };
    } catch (error) {
      console.error('Error al solicitar restablecimiento de contraseña:', error);
      throw new InternalServerErrorException('Error al procesar la solicitud');
    }
  }

  async resetPassword(data: ResetPasswordDto) {
    try {
      // Buscar usuario con el token válido
      const user = await this.prisma.usuario.findFirst({
        where: {
          recoveryToken: data.token,
          recoveryTokenExpiresAt: {
            gt: new Date(), // Token no expirado
          },
        },
      });

      if (!user) {
        throw new BadRequestException('Token inválido o expirado');
      }

      // Hashear la nueva contraseña
      const hashedPassword = await hash(data.newPassword, 10);

      // Actualizar la contraseña y limpiar el token
      await this.prisma.usuario.update({
        where: { id: user.id },
        data: {
          passwordHash: hashedPassword,
          recoveryToken: null,
          recoveryTokenExpiresAt: null,
        },
      });

      return { message: 'Contraseña actualizada exitosamente' };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Error al restablecer contraseña:', error);
      throw new InternalServerErrorException('Error al restablecer la contraseña');
    }
  }

  async adminResetPassword(userId: number, newPassword: string) {
    try {
      // Verificar si el usuario existe
      const user = await this.prisma.usuario.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
      }

      // Hashear la nueva contraseña
      const hashedPassword = await hash(newPassword, 10);

      // Actualizar la contraseña
      await this.prisma.usuario.update({
        where: { id: userId },
        data: {
          passwordHash: hashedPassword,
        },
      });

      return { message: 'Contraseña actualizada exitosamente' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al restablecer contraseña:', error);
      throw new InternalServerErrorException('Error al restablecer la contraseña');
    }
  }
}
