import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ReservasService } from '../reservas/reservas.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PaymentsService {
  constructor(
    private prisma: PrismaService,
    private reservasService: ReservasService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    // Verificar que la reserva existe
    const reserva = await this.reservasService.findOne(createPaymentDto.reservaId);
    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }

    // Validar campos requeridos
    if (!createPaymentDto.paymentGateway) {
      throw new BadRequestException('Gateway de pago es requerido');
    }

    // Verificar que el monto total coincide con la suma de los detalles
    const totalDetalles = createPaymentDto.detalles.reduce(
      (sum, detalle) => sum.plus(new Prisma.Decimal(detalle.monto)),
      new Prisma.Decimal(0)
    );

    if (!totalDetalles.equals(new Prisma.Decimal(createPaymentDto.montoTotal))) {
      throw new BadRequestException('El monto total no coincide con la suma de los detalles');
    }

    // Crear el pago y sus detalles en una transacción
    return this.prisma.$transaction(async (prisma) => {
      const pago = await prisma.pago.create({
        data: {
          reservaId: createPaymentDto.reservaId,
          paymentGateway: createPaymentDto.paymentGateway,
          transactionId: createPaymentDto.transactionId,
          montoTotal: createPaymentDto.montoTotal,
          moneda: createPaymentDto.moneda,
          estado: createPaymentDto.estado,
          fechaPago: createPaymentDto.fechaPago ? new Date(createPaymentDto.fechaPago) : null,
          datosMetodoPago: createPaymentDto.datosMetodoPago,
          metadata: createPaymentDto.metadata,
          detalles: {
            create: createPaymentDto.detalles.map((detalle) => ({
              tipoPagoId: detalle.tipoPagoId,
              concepto: detalle.concepto,
              monto: detalle.monto,
              porcentajeImpuesto: detalle.porcentajeImpuesto,
              cantidad: detalle.cantidad,
              descripcion: detalle.descripcion,
            })),
          },
        },
        include: {
          detalles: true,
          reserva: true,
        },
      });

      // Actualizar el estado de la reserva si el pago está completo
      if (pago.estado === 'COMPLETADO') {
        await prisma.reserva.update({
          where: { id: pago.reservaId },
          data: { estado: 'PAGADO' },
        });
      }

      return pago;
    });
  }

  async findAll() {
    return this.prisma.pago.findMany({
      include: {
        detalles: true,
        reserva: true,
      },
    });
  }

  async findOne(id: number) {
    const pago = await this.prisma.pago.findUnique({
      where: { id },
      include: {
        detalles: true,
        reserva: true,
      },
    });

    if (!pago) {
      throw new NotFoundException('Pago no encontrado');
    }

    return pago;
  }

  async findByReservaId(reservaId: number) {
    return this.prisma.pago.findMany({
      where: { reservaId },
      include: {
        detalles: {
          include: {
            tipoPago: true,
          },
        },
      },
    });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    await this.findOne(id);

    // Validar estado antes de actualizar
    const estadosValidos = ['PENDIENTE', 'COMPLETADO', 'CANCELADO'];
    if (updatePaymentDto.estado && !estadosValidos.includes(updatePaymentDto.estado)) {
      throw new BadRequestException('Estado de pago no válido');
    }

    return this.prisma.pago.update({
      where: { id },
      data: {
        paymentGateway: updatePaymentDto.paymentGateway,
        transactionId: updatePaymentDto.transactionId,
        montoTotal: updatePaymentDto.montoTotal,
        moneda: updatePaymentDto.moneda,
        estado: updatePaymentDto.estado,
        fechaPago: updatePaymentDto.fechaPago ? new Date(updatePaymentDto.fechaPago) : undefined,
        datosMetodoPago: updatePaymentDto.datosMetodoPago,
        metadata: updatePaymentDto.metadata,
      },
      include: {
        reserva: true,
        detalles: {
          include: {
            tipoPago: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pago.delete({
      where: { id },
    });
  }

  async updateEstado(id: number, estado: string) {
    const pago = await this.findOne(id);

    return this.prisma.$transaction(async (prisma) => {
      const updatedPago = await prisma.pago.update({
        where: { id },
        data: { estado },
        include: {
          detalles: true,
        },
      });

      // Actualizar el estado de la reserva si el pago está completo
      if (estado === 'COMPLETADO') {
        await prisma.reserva.update({
          where: { id: pago.reservaId },
          data: { estado: 'PAGADO' },
        });
      }

      return updatedPago;
    });
  }

  async generateReceipt(id: number) {
    const pago = await this.findOne(id);
    
    // Aquí se implementaría la lógica para generar el recibo
    // Por ejemplo, usando una plantilla y una biblioteca de PDF
    return {
      numeroRecibo: `REC-${pago.id}`,
      fecha: pago.fechaPago,
      monto: pago.montoTotal,
      detalles: pago.detalles,
      reserva: pago.reserva,
    };
  }
}