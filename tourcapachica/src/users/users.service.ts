import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { randomBytes } from 'crypto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class UsersService {
  private readonly IMAGEABLE_TYPE = 'Usuario';

  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService
  ) {}

  async findAll() {
    const users = await this.prisma.usuario.findMany({
      include: {
        persona: true,
        usuariosRoles: {
          include: {
            rol: true
          }
        }
      }
    });

    const usersWithImages = await Promise.all(
      users.map(async (user) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: user.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...user, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return usersWithImages;
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

  async create(createUserDto: CreateUserDto, file?: Express.Multer.File) {
    const { fotoPerfil, password, ...userData } = createUserDto;
    const hashedPassword = await hash(password, 10);

    // Crear el usuario
    const user = await this.prisma.usuario.create({
      data: {
        ...userData,
        passwordHash: hashedPassword,
        persona: {
          create: {
            nombre: userData.nombre,
            apellidos: userData.apellidos,
            telefono: userData.telefono,
            direccion: userData.direccion,
            fechaNacimiento: userData.fechaNacimiento,
            subdivisionId: userData.subdivisionId,
          }
        }
      },
      include: {
        persona: true
      }
    });

    // Si hay una imagen de perfil, subirla
    if (file) {
      const imageUrl = await this.supabaseService.uploadFile(
        file,
        this.IMAGEABLE_TYPE,
        user.id
      );

      // Crear la imagen en la base de datos
      const imagen = await this.prisma.image.create({
        data: {
          url: imageUrl
        }
      });

      // Crear la relación imageable
      await this.prisma.imageable.create({
        data: {
          image_id: imagen.id,
          imageable_id: user.id,
          imageable_type: this.IMAGEABLE_TYPE
        }
      });

      // Actualizar la URL de la foto de perfil en la persona
      await this.prisma.persona.update({
        where: { id: user.personaId },
        data: { fotoPerfilUrl: imageUrl }
      });
    }

    return this.findOne(user.id);
  }

  async findOne(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
      include: {
        persona: true,
        usuariosRoles: {
          include: {
            rol: true
          }
        }
      }
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: user.id,
      },
      include: {
        image: true
      }
    });

    return { 
      ...user, 
      imagenes: imageables.map(imageable => ({
        id: imageable.image.id,
        url: imageable.image.url
      }))
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto, file?: Express.Multer.File) {
    const { fotoPerfil, ...userData } = updateUserDto;

    // Actualizar datos del usuario
    const user = await this.prisma.usuario.update({
      where: { id },
      data: {
        ...userData,
        persona: {
          update: {
            nombre: userData.nombre,
            apellidos: userData.apellidos,
            telefono: userData.telefono,
            direccion: userData.direccion,
            fechaNacimiento: userData.fechaNacimiento,
            subdivisionId: userData.subdivisionId,
          }
        }
      },
      include: {
        persona: true
      }
    });

    // Si hay una nueva imagen de perfil
    if (file) {
      // Obtener las relaciones imageables existentes
      const imageables = await this.prisma.imageable.findMany({
        where: {
          imageable_type: this.IMAGEABLE_TYPE,
          imageable_id: id,
        },
        include: {
          image: true
        }
      });

      // Eliminar las relaciones y las imágenes existentes
      for (const imageable of imageables) {
        const fileName = imageable.image.url.split('/').pop();
        await this.supabaseService.deleteFile(
          this.IMAGEABLE_TYPE,
          id,
          fileName
        );

        await this.prisma.imageable.delete({
          where: { id: imageable.id }
        });
        await this.prisma.image.delete({
          where: { id: imageable.image.id }
        });
      }

      // Subir la nueva imagen
      const imageUrl = await this.supabaseService.uploadFile(
        file,
        this.IMAGEABLE_TYPE,
        id
      );

      // Crear la nueva imagen y relación
      const imagen = await this.prisma.image.create({
        data: {
          url: imageUrl
        }
      });

      await this.prisma.imageable.create({
        data: {
          image_id: imagen.id,
          imageable_id: id,
          imageable_type: this.IMAGEABLE_TYPE
        }
      });

      // Actualizar la URL de la foto de perfil en la persona
      await this.prisma.persona.update({
        where: { id: user.personaId },
        data: { fotoPerfilUrl: imageUrl }
      });
    }

    return this.findOne(id);
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
