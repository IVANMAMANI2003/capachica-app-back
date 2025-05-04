import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';

@Injectable()
export class DisponibilidadService {
  constructor(private prisma: PrismaService) {}

  async createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: createDisponibilidadDto.servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${createDisponibilidadDto.servicioId} no encontrado`);
    }

    return this.prisma.servicioDisponibilidad.create({
      data: {
        servicioId: createDisponibilidadDto.servicioId,
        fecha: new Date(createDisponibilidadDto.fecha),
        cuposDisponibles: createDisponibilidadDto.cuposDisponibles,
        precioEspecial: createDisponibilidadDto.precioEspecial,
      },
    });
  }

  async getDisponibilidad(servicioId: number) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
    }

    return this.prisma.servicioDisponibilidad.findMany({
      where: { servicioId },
      orderBy: { fecha: 'asc' },
    });
  }

  async getDisponibilidadByFecha(servicioId: number, fecha: string) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
    }

    const disponibilidad = await this.prisma.servicioDisponibilidad.findFirst({
      where: {
        servicioId,
        fecha: new Date(fecha),
      },
    });

    if (!disponibilidad) {
      throw new NotFoundException(`No hay disponibilidad para el servicio ${servicioId} en la fecha ${fecha}`);
    }

    return disponibilidad;
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

  async update(id: number, updateData: Partial<CreateServicioDisponibilidadDto>) {
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