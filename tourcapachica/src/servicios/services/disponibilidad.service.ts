import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';

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
        fechaInicio: new Date(createDisponibilidadDto.fechaInicio),
        fechaFin: new Date(createDisponibilidadDto.fechaFin),

        cuposDisponibles: createDisponibilidadDto.cuposDisponibles,
        precioEspecial: createDisponibilidadDto.precioEspecial,
      },
    });
  }

  async createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]) {
    // Verificar que todos los servicios existan
    const servicioIds = [...new Set(disponibilidades.map(d => d.servicioId))];
    const servicios = await this.prisma.servicio.findMany({
      where: { id: { in: servicioIds } },
    });

    if (servicios.length !== servicioIds.length) {
      const serviciosNoEncontrados = servicioIds.filter(
        id => !servicios.some(s => s.id === id)
      );
      throw new NotFoundException(
        `Los siguientes servicios no fueron encontrados: ${serviciosNoEncontrados.join(', ')}`
      );
    }

    // Crear todas las disponibilidades en una transacción
    return this.prisma.$transaction(
      disponibilidades.map(disponibilidad =>
        this.prisma.servicioDisponibilidad.create({
          data: {
            servicioId: disponibilidad.servicioId,
            fechaInicio: new Date(disponibilidad.fechaInicio),
            fechaFin: new Date(disponibilidad.fechaFin),
            cuposDisponibles: disponibilidad.cuposDisponibles,
            precioEspecial: disponibilidad.precioEspecial,
          },
        })
      )
    );
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
      orderBy: { fechaInicio: 'asc' },
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
        fechaInicio: new Date(fecha),
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

  async update(id: number, updateData: UpdateServicioDisponibilidadDto) {
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