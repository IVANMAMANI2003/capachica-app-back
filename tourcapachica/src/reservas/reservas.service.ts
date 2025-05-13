import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { EstadoReserva } from './enums/estado-reserva.enum';

@Injectable()
export class ReservasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReservaDto: CreateReservaDto) {
    // Verificar que el usuario existe
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: createReservaDto.usuarioId },
    });

    if (!usuario) {
      throw new NotFoundException(`usuario con ID ${createReservaDto.usuarioId} no encontrado`);
    }

    // Crear la reserva
    return this.prisma.reserva.create({
      data: {
        usuarioId: createReservaDto.usuarioId,
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
        usuario: true,
        
        pagos: true,
      },
    });
  }

  async findAll() {
    return this.prisma.reserva.findMany({
      include: {
        usuario: true,
        
        pagos: true,
      },
    });
  }

  async findOne(id: number) {
    const reserva = await this.prisma.reserva.findUnique({
      where: { id },
      include: {
        
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

    // Si se actualiza el usuario, verificar que existe
    if (updateReservaDto.usuarioId) {
      const usuario = await this.prisma.usuario.findUnique({
        where: { id: updateReservaDto.usuarioId },
      });

      if (!usuario) {
        throw new NotFoundException(`Usuario con ID ${updateReservaDto.usuarioId} no encontrado`);
      }
    }

    return this.prisma.reserva.update({
      where: { id },
      data: updateReservaDto,
      include: {
        usuario: true,
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

  async findByUsuario(usuarioId: number) {
    // Verificar que el usuario existe
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${usuarioId} no encontrado`);
    }

    return this.prisma.reserva.findMany({
      where: { usuarioId },
      include: {
        usuario: true,
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
        usuario: true,
        pagos: true,
      },
    });
  }
} 