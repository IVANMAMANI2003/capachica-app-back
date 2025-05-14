import { ApiProperty } from '@nestjs/swagger';
import { PaymentDetails } from './payment-detail.entity';

export class Payment {
  @ApiProperty({ description: 'ID único del pago' })
  id: number;

  @ApiProperty({ description: 'ID de la reserva asociada' })
  reservaId: number;

  @ApiProperty({ description: 'Pasarela de pago utilizada', example: 'Yape, Plin, PayPal, Stripe' })
  paymentGateway: string;

  @ApiProperty({ description: 'ID de la transacción del proveedor de pago' })
  transactionId: string;

  @ApiProperty({ description: 'Monto total pagado', example: 150.00 })
  montoTotal: number;

  @ApiProperty({ description: 'Moneda utilizada en el pago', enum: ['PEN', 'USD'], default: 'PEN' })
  moneda: string;

  @ApiProperty({ description: 'Estado actual del pago', enum: ['pendiente', 'completado', 'fallido'], default: 'pendiente' })
  estado: string;

  @ApiProperty({ description: 'Fecha en que se realizó el pago', required: false, type: String, format: 'date-time' })
  fechaPago?: Date;

  @ApiProperty({ description: 'Datos del método de pago', type: Object, required: false })
  datosMetodoPago?: Record<string, any>;

  @ApiProperty({ description: 'Información adicional del pago', type: Object, required: false })
  metadata?: Record<string, any>;

  @ApiProperty({ description: 'Fecha de creación del registro' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización del registro' })
  updatedAt: Date;

  @ApiProperty({ description: 'Detalles del comprobante asociado', required: false })
  comprobante?: any;

  @ApiProperty({ description: 'Detalles del pago (desglose)', type: () => [PaymentDetails] })
  detalles: PaymentDetails[];

  @ApiProperty({ description: 'Reserva asociada al pago' })
  reserva: any;
}
