import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional, IsDateString,
  IsObject, MaxLength, IsInt, Min,
  IsDate
} from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({ description: 'ID de la reserva asociada', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  reservaId: number;

  @ApiProperty({ description: 'Pasarela de pago utilizada', example: 'Yape' })
  @IsString()
  @IsNotEmpty()
  paymentGateway: string;

  @ApiProperty({ description: 'ID único de la transacción', example: 'txn_1234567890' })
  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @ApiProperty({ description: 'Monto total pagado', example: 150.00 })
  @IsNumber()
  @IsNotEmpty()
  montoTotal: number;

  @ApiProperty({ description: 'Moneda utilizada', example: 'PEN', default: 'PEN' })
  @IsString()
  @IsOptional()
  moneda?: string;

  @ApiProperty({ description: 'Estado del pago', example: 'pendiente', default: 'pendiente' })
  @IsString()
  @IsOptional()
  estado?: string;

  @ApiProperty({ description: 'Fecha de pago (si aplica)', example: '2024-05-15T10:30:00.000Z', required: false })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  fechaPago?: Date;

  @ApiProperty({ description: 'Datos del método de pago', example: { numero: '123456789' }, required: false })
  @IsOptional()
  datosMetodoPago?: any;

  @ApiProperty({ description: 'Metadatos adicionales', example: { ip: '127.0.0.1' }, required: false })
  @IsOptional()
  metadata?: any;
}