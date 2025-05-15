import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservaDto } from '../dto/create-reserva.dto';
import { UpdateReservaDto } from '../dto/update-reserva.dto';
import { ItinerarioReservaService } from './itinerario-reserva.service';

@Injectable()
export class ReservaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly itinerarioReservaService: ItinerarioReservaService,
  ) {}

  private generarCodigoReserva(): string {
    const prefix = 'RES';
    const date = new Date();
    const yyyyMMdd = date.toISOString().slice(0, 10).replace(/-/g, '');
    const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
                    String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const numbers = Math.floor(1000 + Math.random() * 9000).toString();
    return `${prefix}-${yyyyMMdd}-${letters}${numbers}`;
  }

  async create(createReservaDto: CreateReservaDto) {
    const codigoReserva = this.generarCodigoReserva();
    const reserva = await this.prisma.reserva.create({
      data:{
        ...createReservaDto,
        codigoReserva,
        fechaReserva: new Date(createReservaDto.fechaReserva),
        fechaInicio: new Date(createReservaDto.fechaInicio),
        fechaFin: new Date(createReservaDto.fechaFin),
      } ,
    });
    return reserva;
  }

  async getEstadoPagoReserva(reservaId: number) {
    const reserva = await this.prisma.reserva.findUnique({
      where: { id: reservaId },
      include: { pagos: true },
    });
  
    if (!reserva) {
      return null;
    }
  
    const totalPagado = reserva.pagos.reduce(
      (acc, pago) => acc + Number(pago.montoTotal),
      0
    );
    const precioTotal = Number(reserva.precioTotal);
    const restante = precioTotal - totalPagado;
  
    const estado = totalPagado >= precioTotal ? 'completado' : 'pendiente';
  
    return {
      reservaId: reserva.id,
      precioTotal,
      totalPagado,
      restante,
      estado,
      pagos: reserva.pagos.map(pago => ({
        id: pago.id,
        montoTotal: Number(pago.montoTotal),
        fechaPago: pago.fechaPago,
      })),
    };
  }

  async cancelarReserva(reservaId: number, motivo: string) {
    const reserva = await this.prisma.reserva.findUnique({
      where: { id: reservaId },
    });
  
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
  
    if (reserva.estado === 'cancelada') {
      throw new BadRequestException('La reserva ya está cancelada.');
    }
  
    return this.prisma.reserva.update({
      where: { id: reservaId },
      data: {
        estado: 'cancelada',
        fechaCancelacion: new Date(),
        motivoCancelacion: motivo,
      },
    });
  }
  

  findAll() {
    return this.prisma.reserva.findMany();
  }

  findOne(id: number) {
    return this.prisma.reserva.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReservaDto: UpdateReservaDto) {
    return this.prisma.reserva.update({
      where: { id },
      data: updateReservaDto,
    });
  }

  remove(id: number) {
    return this.prisma.reserva.delete({
      where: { id },
    });
  }

  
}