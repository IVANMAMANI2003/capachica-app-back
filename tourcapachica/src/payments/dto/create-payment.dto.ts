import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsDecimal, IsISO4217CurrencyCode, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { CreatePagoDetalleDto } from './create-pago-detalle.dto';


export class CreatePaymentDto {
  @ApiProperty({ description: 'ID de la reserva relacionada' })
  @IsNumber()
  reservaId: number;

  @ApiProperty({ description: 'Pasarela de pago utilizada', example: 'Visa', maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  paymentGateway: string;

  @ApiProperty({ description: 'ID único de transacción', example: 'txn_123456789', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @ApiProperty({ type: String, description: 'Monto total del pago' })
  @IsDecimal()
  montoTotal: string;

  @ApiProperty({ default: 'PEN', maxLength: 3 })
  @IsISO4217CurrencyCode()
  moneda: string;

  @ApiProperty({ default: 'pendiente', maxLength: 20 })
  @IsString()
  estado: string;

  @ApiProperty({ type: String, format: 'date-time', required: false })
  @IsDateString()
  @IsOptional()
  fechaPago?: Date;

  @ApiProperty({ type: Object, required: false })
  @IsOptional()
  datosMetodoPago?: Record<string, any>;

  @ApiProperty({ type: Object, required: false })
  @IsOptional()
  metadata?: Record<string, any>;

  @ApiProperty({ type: [CreatePagoDetalleDto] })
  @ValidateNested({ each: true })
  @Type(() => CreatePagoDetalleDto)
  detalles: CreatePagoDetalleDto[];
}