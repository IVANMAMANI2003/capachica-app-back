import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';


@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPagoDto: CreatePaymentDto) {
    return this.prisma.$transaction(async (prisma) => {
      const pago = await prisma.pago.create({
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
      });
  
      const totalDetalles = createPagoDto.detalles.reduce((total, detalle) => total + detalle.monto, 0);
      if (totalDetalles !== createPagoDto.montoTotal) {
        throw new Error('La suma de los montos en los detalles no coincide con el montoTotal del pago principal.');
      }
  
      for (const detalle of createPagoDto.detalles) {
        await prisma.pagoDetalle.create({
          data: {
            pagoId: pago.id,
            tipoPagoId: detalle.tipoPagoId,
            concepto: detalle.concepto,
            monto: detalle.monto,
            porcentajeImpuesto: detalle.porcentajeImpuesto ?? 0,
            cantidad: detalle.cantidad ?? 1,
            descripcion: detalle.descripcion,
          },
        });
      }
  
      return pago;
    });
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

  async calculateTotalPaid(reservaId: number): Promise<number> {
    const pagos = await this.prisma.pago.findMany({
      where: { reservaId },
      select: { montoTotal: true }
    });
    return pagos.reduce((total, pago) => Number(total) + Number(pago.montoTotal), 0);
  }

  async registerPayment(createPagoDto: CreatePaymentDto) {
    const totalPagado = await this.calculateTotalPaid(createPagoDto.reservaId) + createPagoDto.montoTotal;
    const reserva = await this.prisma.reserva.findUnique({ where: { id: createPagoDto.reservaId } });
  
    if (!reserva) {
      throw new NotFoundException(`Reserva con ID ${createPagoDto.reservaId} no encontrada`);
    }
  
    const estadoPago = Number(totalPagado) >= Number(reserva.precioTotal) ? 'completado' : 'pendiente';
    const estadoReserva = Number(totalPagado) >= Number(reserva.precioTotal) ? 'confirmada' : 'pendiente';
  
    const pago = await this.prisma.pago.create({
      data: {
        reservaId: createPagoDto.reservaId,
        paymentGateway: createPagoDto.paymentGateway,
        transactionId: createPagoDto.transactionId,
        montoTotal: createPagoDto.montoTotal,
        moneda: createPagoDto.moneda ?? 'PEN',
        estado: estadoPago,
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
  
    await this.prisma.reserva.update({
      where: { id: createPagoDto.reservaId },
      data: { estado: estadoReserva }
    });
  
    return pago;
  }
}
