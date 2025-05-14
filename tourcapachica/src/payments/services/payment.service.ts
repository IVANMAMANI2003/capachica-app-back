import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';


@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPagoDto: CreatePaymentDto) {
    const pago = await this.prisma.pago.create({
      data: {
        reservaId: createPagoDto.reservaId,
        paymentGateway: createPagoDto.paymentGateway,
        transactionId: createPagoDto.transactionId,
        montoTotal: createPagoDto.montoTotal,
        moneda: createPagoDto.moneda ?? 'PEN',
        estado: createPagoDto.estado ?? 'pendiente',
        fechaPago: createPagoDto.fechaPago,
        datosMetodoPago: createPagoDto.datosMetodoPago,
        metadata: createPagoDto.metadata,
      },
      include: {
        detalles: true,
        comprobante: true,
        reserva: true,
      },
    });
    return pago;
  }

  async findAll() {
    return this.prisma.pago.findMany({
      include: {
        detalles: true,
        comprobante: true,
        reserva: true,
      },
    });
  }

  async findOne(id: number) {
    const pago = await this.prisma.pago.findUnique({
      where: { id },
      include: {
        detalles: true,
        comprobante: true,
        reserva: true,
      },
    });

    if (!pago) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }

    return pago;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const existe = await this.prisma.pago.findUnique({ where: { id } });

    if (!existe) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }

    const pagoActualizado = await this.prisma.pago.update({
      where: { id },
      data: {
        reservaId: updatePaymentDto.reservaId,
        paymentGateway: updatePaymentDto.paymentGateway,
        transactionId: updatePaymentDto.transactionId,
        montoTotal: updatePaymentDto.montoTotal,
        moneda: updatePaymentDto.moneda,
        estado: updatePaymentDto.estado,
        fechaPago: updatePaymentDto.fechaPago,
        datosMetodoPago: updatePaymentDto.datosMetodoPago,
        metadata: updatePaymentDto.metadata,

      },
      include: {
        detalles: true,
        comprobante: true,
        reserva: true,
      },
    });

    return pagoActualizado;
  }

  async remove(id: number) {
    const existe = await this.prisma.pago.findUnique({ where: { id } });

    if (!existe) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }

    return this.prisma.pago.delete({
      where: { id },
    });
  }
}
