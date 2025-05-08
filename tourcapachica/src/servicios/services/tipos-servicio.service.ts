import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';

@Injectable()
export class TiposServicioService {
  constructor(private prisma: PrismaService) {}

  async create(createTipoServicioDto: CreateTipoServicioDto) {
    return this.prisma.tipoServicio.create({
      data: {
        nombre: createTipoServicioDto.nombre,
        descripcion: createTipoServicioDto.descripcion,
        requiereCupo: createTipoServicioDto.requiereCupo,
      },
    });
  }

  async findAll() {
    return this.prisma.tipoServicio.findMany({
      include: {
        servicios: true,
      },
    });
  }

  async findOne(id: number) {
    const tipoServicio = await this.prisma.tipoServicio.findUnique({
      where: { id },
      include: {
        servicios: true,
      },
    });

    if (!tipoServicio) {
      throw new NotFoundException(`Tipo de servicio con ID ${id} no encontrado`);
    }

    return tipoServicio;
  }
  async update(id: number, updateTipoServicioDto: CreateTipoServicioDto) {
    try {
      return await this.prisma.tipoServicio.update({
        where: { id },
        data: {
          nombre: updateTipoServicioDto.nombre,
          descripcion: updateTipoServicioDto.descripcion,
          requiereCupo: updateTipoServicioDto.requiereCupo, 
        }
      })

    } catch (error) {
      throw new NotFoundException(`Tipo de servicio con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.tipoServicio.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Tipo de servicio con ID ${id} no encontrado`);
    }
  }
} 