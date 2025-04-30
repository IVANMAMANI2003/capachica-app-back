import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItinerariosLugarService {
  constructor(private readonly prisma: PrismaService) {}

  async create(itinerarioId: number, lugarTuristicoId: number) {
    // Verificar que el itinerario existe
    const itinerario = await this.prisma.itinerarioReserva.findUnique({
      where: { id: itinerarioId },
    });

    if (!itinerario) {
      throw new NotFoundException(`Itinerario con ID ${itinerarioId} no encontrado`);
    }

    // Verificar que el lugar turístico existe
    const lugarTuristico = await this.prisma.lugarTuristico.findUnique({
      where: { id: lugarTuristicoId },
    });

    if (!lugarTuristico) {
      throw new NotFoundException(`Lugar turístico con ID ${lugarTuristicoId} no encontrado`);
    }

    // Crear la relación
    return this.prisma.itinerarioLugar.create({
      data: {
        itinerarioReservaId: itinerarioId,
        lugarTuristicoId: lugarTuristicoId,
      },
      include: {
        itinerarioReserva: true,
        lugarTuristico: true,
      },
    });
  }

  async findAll() {
    return this.prisma.itinerarioLugar.findMany({
      include: {
        itinerarioReserva: true,
        lugarTuristico: true,
      },
    });
  }

  async findByItinerario(itinerarioId: number) {
    // Verificar que el itinerario existe
    const itinerario = await this.prisma.itinerarioReserva.findUnique({
      where: { id: itinerarioId },
    });

    if (!itinerario) {
      throw new NotFoundException(`Itinerario con ID ${itinerarioId} no encontrado`);
    }

    return this.prisma.itinerarioLugar.findMany({
      where: { itinerarioReservaId: itinerarioId },
      include: {
        itinerarioReserva: true,
        lugarTuristico: true,
      },
    });
  }

  async findByLugarTuristico(lugarTuristicoId: number) {
    // Verificar que el lugar turístico existe
    const lugarTuristico = await this.prisma.lugarTuristico.findUnique({
      where: { id: lugarTuristicoId },
    });

    if (!lugarTuristico) {
      throw new NotFoundException(`Lugar turístico con ID ${lugarTuristicoId} no encontrado`);
    }

    return this.prisma.itinerarioLugar.findMany({
      where: { lugarTuristicoId },
      include: {
        itinerarioReserva: true,
        lugarTuristico: true,
      },
    });
  }

  async remove(itinerarioId: number, lugarTuristicoId: number) {
    // Verificar que la relación existe
    const itinerarioLugar = await this.prisma.itinerarioLugar.findFirst({
      where: {
        itinerarioReservaId: itinerarioId,
        lugarTuristicoId: lugarTuristicoId,
      },
    });

    if (!itinerarioLugar) {
      throw new NotFoundException(
        `Relación entre itinerario ${itinerarioId} y lugar turístico ${lugarTuristicoId} no encontrada`,
      );
    }

    return this.prisma.itinerarioLugar.delete({
      where: {
        id: itinerarioLugar.id,
      },
    });
  }

  async removeByItinerario(itinerarioId: number) {
    // Verificar que el itinerario existe
    const itinerario = await this.prisma.itinerarioReserva.findUnique({
      where: { id: itinerarioId },
    });

    if (!itinerario) {
      throw new NotFoundException(`Itinerario con ID ${itinerarioId} no encontrado`);
    }

    return this.prisma.itinerarioLugar.deleteMany({
      where: { itinerarioReservaId: itinerarioId },
    });
  }
} 