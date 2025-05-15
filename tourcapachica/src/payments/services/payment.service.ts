import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { EstadoPago } from '../enums/estado-pago.enum';
import { ComprobantesService } from '@/comprobantes/services/comprobantes.service';


@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService, private readonly comprobantesService: ComprobantesService) {}

  async create(createPagoDto: CreatePaymentDto) {
    return this.prisma.$transaction(async (prisma) => {
      const totalDetalles = createPagoDto.detalles.reduce((total, detalle) => total + detalle.monto, 0);
      const reserva = await this.prisma.reserva.findUnique({
        where: { id: createPagoDto.reservaId },
      });

      if (reserva.estado !== 'pendiente' && reserva.estado !== 'en_proceso') {
        throw new BadRequestException(
          `No se puede realizar el pago, la rserva debe estar cancelada o expirada. El estado actual de la reserva es "${reserva.estado}". Solo se permite pagar si está en "pendiente" o "en_proceso".`
        );
      }

      let estado: EstadoPago = EstadoPago.PENDIENTE;
      if (Number(totalDetalles) >= Number(reserva.precioTotal)) {
        estado = EstadoPago.COMPLETADO;
      }

      // Generar transactionId único
      const transactionId = `TXN-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;

      const pago = await prisma.pago.create({
        data: {
          reservaId: createPagoDto.reservaId,
          paymentGateway: createPagoDto.paymentGateway,
          transactionId: transactionId,
          montoTotal: totalDetalles,
          moneda: createPagoDto.moneda ?? 'PEN',
          estado: estado,
          fechaPago: new Date(),
          datosMetodoPago: createPagoDto.datosMetodoPago,
          metadata: createPagoDto.metadata,
        },
      });

      if (totalDetalles !== totalDetalles) {
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

      const totalPagado = await prisma.pago.aggregate({
        where: { reservaId: createPagoDto.reservaId },
        _sum: { montoTotal: true },
      });

    const montoAcumulado = Number(totalPagado._sum.montoTotal ?? 0);

    if (montoAcumulado >= Number(reserva.precioTotal)) {
      // Actualizar todos los pagos de esa reserva a COMPLETADO
      await prisma.pago.updateMany({
        where: { reservaId: createPagoDto.reservaId },
        data: { estado: EstadoPago.COMPLETADO },
      });

      // Actualizar estado de la reserva
      await prisma.reserva.update({
        where: { id: createPagoDto.reservaId },
        data: { estado: 'confirmada' },
      });
    }

      // Convertimos Decimal a number (profundamente si es necesario)

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
    const totalDetalles = updatePaymentDto.detalles.reduce((total, detalle) => total + detalle.monto, 0);
    if (!existe) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }
          // Obtener la reserva y su monto total
          const reserva = await this.prisma.reserva.findUnique({
            where: { id: updatePaymentDto.reservaId },
          });
      
          // Comparar el total pagado con el monto de la reserva
          let estado: EstadoPago = EstadoPago.PENDIENTE;
          if (Number(totalDetalles) >= Number(reserva.precioTotal)) {
            estado = EstadoPago.COMPLETADO;
          }

    const pagoActualizado = await this.prisma.pago.update({
      where: { id },
      data: {
        reservaId: updatePaymentDto.reservaId,
        paymentGateway: updatePaymentDto.paymentGateway,
        montoTotal: totalDetalles,
        moneda: updatePaymentDto.moneda,
        estado: estado,
        fechaPago: new Date(),
        datosMetodoPago: updatePaymentDto.datosMetodoPago,
        metadata: updatePaymentDto.metadata,

      },
      include: {
        detalles: true,
        comprobante: true,
        reserva: true,
      },
    });

    await this.prisma.reserva.update({
      where: { id: updatePaymentDto.reservaId },
      data: { estado: Number(totalDetalles) >= Number(reserva.precioTotal) ? 'confirmada' : 'pendiente' }
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

  async getPaymentDetails(paymentId: number) {
    const payment = await this.prisma.pago.findUnique({
      where: { id: paymentId },
      include: {
        detalles: true,
        reserva: true,
        // datosMetodoPago is stored directly in the Pago model, not as a relation
      },
    });

    if (!payment) {
      throw new NotFoundException(`Pago con ID ${paymentId} no encontrado`);
    }
  }

  async captureCompletedPayment(paymentId: number) {
    const pago = await this.prisma.pago.findUnique({
      where: { id: paymentId },
      include: {
        detalles: true,
        reserva: true,
        // datosMetodoPago is stored directly in the Pago model, not as a relation
      },
    });
  
    if (!pago || pago.estado !== EstadoPago.COMPLETADO) {
      throw new NotFoundException(`Pago con ID ${paymentId} no encontrado o no está completado`);
    }
  
    // Log para depurar el estado del pago y sus datos
    console.log('Pago encontrado y completado:', pago);
  
    // Convertimos Decimal a number (profundamente si es necesario)
    const pagoConvertido = {
      id: pago.id,
      montoTotal: Number(pago.montoTotal),
      datosMetodoPago: pago.datosMetodoPago
        ? {
            rucCliente: typeof pago.datosMetodoPago === 'object' ? (pago.datosMetodoPago as any).rucCliente ?? null : null,
            razonSocial: typeof pago.datosMetodoPago === 'object' ? (pago.datosMetodoPago as any).razonSocial ?? null : null,
            direccion: typeof pago.datosMetodoPago === 'object' ? (pago.datosMetodoPago as any).direccion ?? null : null,
          }
        : null,
    };
  
    // Verificar que el estado del pago sea COMPLETADO antes de generar el comprobante
    if (pago.estado === EstadoPago.COMPLETADO) {
      // Asegúrate de que el pago esté marcado como completado antes de intentar generar el comprobante
      const comprobante = await this.comprobantesService.generateAutomaticComprobante(pagoConvertido);
      console.log('Comprobante generado después de pago completado:', comprobante);
      return comprobante;
    }
  
    throw new Error('El pago no está en estado completado, no se puede generar el comprobante.');
  }
  
  
  
}
