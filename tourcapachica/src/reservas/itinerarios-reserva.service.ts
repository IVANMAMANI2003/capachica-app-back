import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItinerarioReservaDto } from './dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from './dto/update-itinerario-reserva.dto';

@Injectable()
export class ItinerariosReservaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createItinerarioReservaDto: CreateItinerarioReservaDto) {
    // Verificar que la reserva existe
    const reserva = await this.prisma.reserva.findUnique({
      where: { id: createItinerarioReservaDto.reservaId },
    });

    if (!reserva) {
      throw new NotFoundException(`Reserva con ID ${createItinerarioReservaDto.reservaId} no encontrada`);
    }

    // Verificar que el servicio existe si se proporciona
    if (createItinerarioReservaDto.servicioId) {
      const servicio = await this.prisma.servicio.findUnique({
        where: { id: createItinerarioReservaDto.servicioId },
      });

      if (!servicio) {
        throw new NotFoundException(`Servicio con ID ${createItinerarioReservaDto.servicioId} no encontrado`);
      }
    }

  

    // Crear el itinerario
    const itinerario = await this.prisma.itinerarioReserva.create({
      data: {
        reservaId: createItinerarioReservaDto.reservaId,
        fecha: createItinerarioReservaDto.fecha,
        horarioCierre: createItinerarioReservaDto.horarioCierre,
        tipoEvento: createItinerarioReservaDto.tipoEvento,
        descripcion: createItinerarioReservaDto.descripcion,
        notas: createItinerarioReservaDto.notas,
        duracion: createItinerarioReservaDto.duracion,
        servicioId: createItinerarioReservaDto.servicioId,
      },
      include: {
        reserva: true,
        servicio: true,
        
      },
    });


    return this.findOne(itinerario.id);
  }

  async findAll() {
    return this.prisma.itinerarioReserva.findMany({
      include: {
        reserva: true,
        servicio: true,
        
      },
    });
  }

  async findOne(id: number) {
    const itinerario = await this.prisma.itinerarioReserva.findUnique({
      where: { id },
      include: {
        reserva: true,
        servicio: true,
        
      },
    });

    if (!itinerario) {
      throw new NotFoundException(`Itinerario con ID ${id} no encontrado`);
    }

    return itinerario;
  }

  async update(id: number, updateItinerarioReservaDto: UpdateItinerarioReservaDto) {
    // Verificar que el itinerario existe
    await this.findOne(id);

    // Verificar que la reserva existe si se actualiza
    if (updateItinerarioReservaDto.reservaId) {
      const reserva = await this.prisma.reserva.findUnique({
        where: { id: updateItinerarioReservaDto.reservaId },
      });

      if (!reserva) {
        throw new NotFoundException(`Reserva con ID ${updateItinerarioReservaDto.reservaId} no encontrada`);
      }
    }

    // Verificar que el servicio existe si se actualiza
    if (updateItinerarioReservaDto.servicioId) {
      const servicio = await this.prisma.servicio.findUnique({
        where: { id: updateItinerarioReservaDto.servicioId },
      });

      if (!servicio) {
        throw new NotFoundException(`Servicio con ID ${updateItinerarioReservaDto.servicioId} no encontrado`);
      }
    }

    // Actualizar el itinerario
    const itinerario = await this.prisma.itinerarioReserva.update({
      where: { id },
      data: {
        reservaId: updateItinerarioReservaDto.reservaId,
        fecha: updateItinerarioReservaDto.fecha,
        horarioCierre: updateItinerarioReservaDto.horarioCierre,
        tipoEvento: updateItinerarioReservaDto.tipoEvento,
        descripcion: updateItinerarioReservaDto.descripcion,
        notas: updateItinerarioReservaDto.notas,
        duracion: updateItinerarioReservaDto.duracion,
        servicioId: updateItinerarioReservaDto.servicioId,
      },
      include: {
        reserva: true,
        servicio: true,
        
      },
    });


    return this.findOne(id);
  }

  async remove(id: number) {
    // Verificar que el itinerario existe
    await this.findOne(id);


    // Eliminar el itinerario
    return this.prisma.itinerarioReserva.delete({
      where: { id },
    });
  }

  async findByReserva(reservaId: number) {
    // Verificar que la reserva existe
    const reserva = await this.prisma.reserva.findUnique({
      where: { id: reservaId },
    });

    if (!reserva) {
      throw new NotFoundException(`Reserva con ID ${reservaId} no encontrada`);
    }

    return this.prisma.itinerarioReserva.findMany({
      where: { reservaId },
      include: {
        reserva: true,
        servicio: true,
        
      },
    });
  }
} 