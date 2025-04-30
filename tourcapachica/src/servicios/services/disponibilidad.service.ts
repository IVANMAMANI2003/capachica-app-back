import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDisponibilidadDto } from '../dto/create-disponibilidad.dto';

@Injectable()
export class DisponibilidadService {
  constructor(private prisma: PrismaService) {}

  async create(createDisponibilidadDto: CreateDisponibilidadDto) {
    // Verificar si existe el servicio
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: createDisponibilidadDto.servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${createDisponibilidadDto.servicioId} no encontrado`);
    }

    // Verificar si ya existe disponibilidad para esa fecha
    const disponibilidadExistente = await this.prisma.servicioDisponibilidad.findUnique({
      where: {
        servicioId_fecha: {
          servicioId: createDisponibilidadDto.servicioId,
          fecha: createDisponibilidadDto.fecha,
        },
      },
    });

    if (disponibilidadExistente) {
      throw new BadRequestException('Ya existe disponibilidad registrada para esta fecha');
    }

    return this.prisma.servicioDisponibilidad.create({
      data: createDisponibilidadDto,
    });
  }

  async findAll() {
    return this.prisma.servicioDisponibilidad.findMany({
      include: {
        servicio: true,
      },
    });
  }

  async findByServicio(servicioId: number) {
    return this.prisma.servicioDisponibilidad.findMany({
      where: { servicioId },
      include: {
        servicio: true,
      },
    });
  }

  async findOne(id: number) {
    const disponibilidad = await this.prisma.servicioDisponibilidad.findUnique({
      where: { id },
      include: {
        servicio: true,
      },
    });

    if (!disponibilidad) {
      throw new NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
    }

    return disponibilidad;
  }

  async update(id: number, updateData: Partial<CreateDisponibilidadDto>) {
    try {
      return await this.prisma.servicioDisponibilidad.update({
        where: { id },
        data: updateData,
        include: {
          servicio: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.servicioDisponibilidad.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
    }
  }
} 