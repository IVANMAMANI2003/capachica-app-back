import { ApiProperty } from '@nestjs/swagger';

export class PaymentDetails {
  @ApiProperty({ description: 'ID único del detalle de pago' })
  id: number;

  @ApiProperty({ description: 'ID del pago asociado' })
  pagoId: number;

  @ApiProperty({ description: 'ID del tipo de pago' })
  tipoPagoId: number;

  @ApiProperty({ description: 'Concepto del detalle', example: 'Pago por transporte turístico' })
  concepto: string;

  @ApiProperty({ description: 'Monto del concepto específico', example: 50.00 })
  monto: number;

  @ApiProperty({ description: 'Porcentaje de impuesto aplicado', example: 18.00 })
  porcentajeImpuesto: number;

  @ApiProperty({ description: 'Cantidad de ítems o unidades', example: 1 })
  cantidad: number;

  @ApiProperty({ description: 'Descripción adicional', required: false })
  descripcion?: string;

  @ApiProperty({ description: 'Fecha de creación del registro' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización del registro' })
  updatedAt: Date;

  @ApiProperty({ description: 'Referencia al pago principal' })
  pago: any;

  @ApiProperty({ description: 'Tipo de pago asociado' })
  tipoPago: any;
}
