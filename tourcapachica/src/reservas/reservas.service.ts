import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservaDto, EstadoReserva } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReservaDto: CreateReservaDto) {
    // Verificar que el turista existe
    const turista = await this.prisma.turista.findUnique({
      where: { id: createReservaDto.turistaId },
    });

    if (!turista) {
      throw new NotFoundException(`Turista con ID ${createReservaDto.turistaId} no encontrado`);
    }

    // Crear la reserva
    return this.prisma.reserva.create({
      data: {
        turistaId: createReservaDto.turistaId,
        codigoReserva: createReservaDto.codigoReserva,
        tipoReserva: createReservaDto.tipoReserva,
        fechaReserva: createReservaDto.fechaReserva,
        fechaInicio: createReservaDto.fechaInicio,
        hora: createReservaDto.hora,
        fechaFin: createReservaDto.fechaFin,
        cantidadPersonas: createReservaDto.cantidadPersonas,
        estado: createReservaDto.estado || EstadoReserva.PENDIENTE,
        precioTotal: createReservaDto.precioTotal,
        moneda: createReservaDto.moneda,
        metodoPago: createReservaDto.metodoPago,
        datosPago: createReservaDto.datosPago,
        notas: createReservaDto.notas,
        motivoCancelacion: createReservaDto.motivoCancelacion,
        fechaCancelacion: createReservaDto.fechaCancelacion,
      },
      include: {
        turista: true,
        itinerarios: true,
        pagos: true,
      },
    });
  }

  async findAll() {
    return this.prisma.reserva.findMany({
      include: {
        turista: true,
        itinerarios: true,
        pagos: true,
      },
    });
  }

  async findOne(id: number) {
    const reserva = await this.prisma.reserva.findUnique({
      where: { id },
      include: {
        turista: true,
        itinerarios: {
          include: {
            itinerarioLugares: {
              include: {
                lugarTuristico: true,
              },
            },
            servicio: true,
          },
        },
        pagos: true,
      },
    });

    if (!reserva) {
      throw new NotFoundException(`Reserva con ID ${id} no encontrada`);
    }

    return reserva;
  }

  async update(id: number, updateReservaDto: UpdateReservaDto) {
    // Verificar que la reserva existe
    await this.findOne(id);

    // Si se actualiza el turista, verificar que existe
    if (updateReservaDto.turistaId) {
      const turista = await this.prisma.turista.findUnique({
        where: { id: updateReservaDto.turistaId },
      });

      if (!turista) {
        throw new NotFoundException(`Turista con ID ${updateReservaDto.turistaId} no encontrado`);
      }
    }

    return this.prisma.reserva.update({
      where: { id },
      data: updateReservaDto,
      include: {
        turista: true,
        itinerarios: true,
        pagos: true,
      },
    });
  }

  async remove(id: number) {
    // Verificar que la reserva existe
    await this.findOne(id);

    return this.prisma.reserva.delete({
      where: { id },
    });
  }

  async findByTurista(turistaId: number) {
    // Verificar que el turista existe
    const turista = await this.prisma.turista.findUnique({
      where: { id: turistaId },
    });

    if (!turista) {
      throw new NotFoundException(`Turista con ID ${turistaId} no encontrado`);
    }

    return this.prisma.reserva.findMany({
      where: { turistaId },
      include: {
        turista: true,
        itinerarios: true,
        pagos: true,
      },
    });
  }

  async updateEstado(id: number, estado: EstadoReserva) {
    // Verificar que la reserva existe
    await this.findOne(id);

    return this.prisma.reserva.update({
      where: { id },
      data: { estado },
      include: {
        turista: true,
        itinerarios: true,
        pagos: true,
      },
    });
  }
} 