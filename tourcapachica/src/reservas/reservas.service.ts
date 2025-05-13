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

  async validateDisponibilidad(carrito: any[]) {
    for (const item of carrito) {
      if (item.tipo === 'servicio') {
        const disponibilidad = await this.prisma.servicioDisponibilidad.findMany({
          where: {
            servicioId: item.id,
            fechaInicio: item.fechaInicio,
            fechaFin: item.fechaFin,
            cuposDisponibles: {
              gte: item.cantidadPersonas,
            },
          },
        });
        if (disponibilidad.length === 0) {
          throw new BadRequestException(`No hay disponibilidad para el servicio con ID ${item.id}`);
        }
      } else if (item.tipo === 'paquete') {
        const disponibilidad = await this.prisma.disponibilidadPaquete.findMany({
          where: {
            paqueteId: item.id,
            fechaInicio: item.fechaInicio,
            fechaFin: item.fechaFin,
            cuposDisponibles: {
              gte: item.cantidadPersonas,
            },
          },
        });
        if (disponibilidad.length === 0) {
          throw new BadRequestException(`No hay disponibilidad para el paquete con ID ${item.id}`);
        }
      }
    }
  }

  async recalculatePrices(carrito: any[]) {
    let precioTotal = 0;
    for (const item of carrito) {
      if (item.tipo === 'servicio') {
        const servicio = await this.prisma.servicio.findUnique({
          where: { id: item.id },
        });
        if (!servicio) {
          throw new NotFoundException(`Servicio con ID ${item.id} no encontrado`);
        }
        precioTotal = Number(precioTotal) + (Number(servicio.precioBase) * Number(item.cantidadPersonas));
      } else if (item.tipo === 'paquete') {
        const paquete = await this.prisma.paqueteTuristico.findUnique({
          where: { id: item.id },
        });
        if (!paquete) {
          throw new NotFoundException(`Paquete con ID ${item.id} no encontrado`);
        }
        precioTotal = Number(precioTotal) + (Number(paquete.precio) * Number(item.cantidadPersonas));
      }
    }
    const impuestos = precioTotal * 0.18; // Ejemplo de cálculo de impuestos
    const comisiones = precioTotal * 0.05; // Ejemplo de cálculo de comisiones
    return precioTotal + impuestos + comisiones;
  }

  async createItinerarioVinculado(reservaId: number, itinerarios: any[]) {
    for (const itinerario of itinerarios) {
      await this.prisma.itinerarioReserva.create({
        data: {
          reservaId,
          fecha: itinerario.fecha,
          horarioCierre: itinerario.horarioCierre,
          tipoEvento: itinerario.tipoEvento,
          descripcion: itinerario.descripcion,
          notas: itinerario.notas,
          duracion: itinerario.duracion,
          servicioId: itinerario.servicioId,
        },
      });
    }
  }
}