import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito.dto';

@Injectable()
export class EmprendimientosService {
  constructor(private prisma: PrismaService) {}

  async create(usuarioId: number, createEmprendimientoDto: CreateEmprendimientoDto) {
    return this.prisma.emprendimiento.create({
      data: {
        ...createEmprendimientoDto,
        usuarioId,
      },
    });
  }

  async findAll() {
    return this.prisma.emprendimiento.findMany({
      include: {
        usuario: {
          include: {
            persona: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const emprendimiento = await this.prisma.emprendimiento.findUnique({
      where: { id },
      include: {
        usuario: {
          include: {
            persona: true,
          },
        },
      },
    });

    if (!emprendimiento) {
      throw new NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
    }

    return emprendimiento;
  }

  async findByUsuario(usuarioId: number) {
    return this.prisma.emprendimiento.findMany({
      where: { usuarioId },
      include: {
        usuario: {
          include: {
            persona: true,
          },
        },
      },
    });
  }

  async update(id: number, updateEmprendimientoDto: UpdateEmprendimientoDto) {
    try {
      return await this.prisma.emprendimiento.update({
        where: { id },
        data: updateEmprendimientoDto,
      });
    } catch (error) {
      throw new NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.emprendimiento.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
    }
  }

  async updateEstado(id: number, estado: string) {
    try {
      return await this.prisma.emprendimiento.update({
        where: { id },
        data: {
          estado,
          fechaAprobacion: estado === 'aprobado' ? new Date() : null,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
    }
  }

  // Métodos para favoritos
  async addFavorito(usuarioId: number, createFavoritoDto: CreateFavoritoDto) {
    // Verificar si el emprendimiento existe
    const emprendimiento = await this.prisma.emprendimiento.findUnique({
      where: { id: createFavoritoDto.emprendimientoId },
    });

    if (!emprendimiento) {
      throw new NotFoundException(`Emprendimiento con ID ${createFavoritoDto.emprendimientoId} no encontrado`);
    }

    // Verificar si ya existe un favorito para este emprendimiento
    const favoritoExistente = await this.prisma.favorito.findFirst({
      where: {
        emprendimientoId: createFavoritoDto.emprendimientoId,
        usuarioId: usuarioId,
      },
    });

    if (favoritoExistente) {
      throw new BadRequestException('Este emprendimiento ya está marcado como favorito');
    }

    // Crear el favorito
    return this.prisma.favorito.create({
      data: {
        emprendimientoId: createFavoritoDto.emprendimientoId,
        usuarioId: usuarioId,
        estado: 'activo',
      },
      include: {
        emprendimiento: true,
      },
    });
  }

  async removeFavorito(usuarioId: number, emprendimientoId: number) {
    // Verificar si el favorito existe
    const favorito = await this.prisma.favorito.findFirst({
      where: {
        emprendimientoId,
        usuarioId: usuarioId,
      },
    });

    if (!favorito) {
      throw new NotFoundException(`No se encontró un favorito para el emprendimiento con ID ${emprendimientoId}`);
    }

    // Eliminar el favorito
    return this.prisma.favorito.delete({
      where: {
        id: favorito.id,
      },
    });
  }

  async getFavoritos(usuarioId: number) {
    return this.prisma.favorito.findMany({
      where: {
        usuarioId: usuarioId,
      },
      include: {
        emprendimiento: {
          include: {
            usuario: {
              include: {
                persona: true,
              },
            },
          },
        },
      },
    });
  }

  async isFavorito(usuarioId: number, emprendimientoId: number) {
    const favorito = await this.prisma.favorito.findFirst({
      where: {
        emprendimientoId,
        usuarioId: usuarioId,
      },
    });

    return !!favorito;
  }
} 