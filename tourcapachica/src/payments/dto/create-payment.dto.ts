import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export class PaymentDetailDto {
  @ApiProperty({ description: 'ID del tipo de pago' })
  @IsNumber()
  @IsNotEmpty()
  tipoPagoId: number;

  @ApiProperty({ description: 'Concepto del pago' })
  @IsString()
  @IsNotEmpty()
  concepto: string;

  @ApiProperty({ description: 'Monto del pago' })
  @IsNumber()
  @IsNotEmpty()
  monto: number;

  @ApiProperty({ description: 'Porcentaje de impuesto', required: false })
  @IsNumber()
  @IsOptional()
  porcentajeImpuesto?: number;

  @ApiProperty({ description: 'Cantidad', required: false })
  @IsNumber()
  @IsOptional()
  cantidad?: number;

  @ApiProperty({ description: 'Descripción adicional', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;
}

export class CreatePaymentDto {
  @ApiProperty({ description: 'ID de la reserva' })
  @IsNumber()
  @IsNotEmpty()
  reservaId: number;

  @ApiProperty({ description: 'Código de transacción' })
  @IsString()
  @IsNotEmpty()
  codigoTransaccion: string;

  @ApiProperty({ description: 'Monto total del pago' })
  @IsNumber()
  @IsNotEmpty()
  montoTotal: number;

  @ApiProperty({ description: 'Moneda del pago' })
  @IsString()
  @IsNotEmpty()
  moneda: string;

  @ApiProperty({ description: 'Estado del pago' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ description: 'Fecha del pago' })
  @IsString()
  @IsNotEmpty()
  fechaPago: string;

  @ApiProperty({ description: 'Datos del método de pago', required: false })
  @IsString()
  @IsOptional()
  datosMetodoPago?: string;

  @ApiProperty({ description: 'Metadatos adicionales', required: false })
  @IsString()
  @IsOptional()
  metadata?: string;

  @ApiProperty({ description: 'Detalles del pago', type: [PaymentDetailDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentDetailDto)
  detalles: PaymentDetailDto[];
} 