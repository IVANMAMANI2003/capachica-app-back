import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional, IsDateString,
  IsObject, MaxLength, IsInt, Min,
  IsDate,
  IsEnum,
  IsArray,
  ValidateNested
} from 'class-validator';
import { EstadoPago } from '../enums/estado-pago.enum';
import { CreatePaymentDetailDto } from './create-payment-detail.dto';

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

  @ApiProperty({ description: 'Moneda utilizada', example: 'PEN', default: 'PEN' })
  @IsString()
  @IsOptional()
  moneda?: string;

  @ApiProperty({ enum: EstadoPago, example: EstadoPago.PENDIENTE })
  @IsEnum(EstadoPago, { message: 'El estado debe ser uno válido del enum EstadoPago' })
  estado: EstadoPago;



  @ApiProperty({ description: 'Datos del método de pago', example: { numero: '123456789' }, required: false })
  @IsOptional()
  datosMetodoPago?: any;

  @ApiProperty({ description: 'Metadatos adicionales', example: { ip: '127.0.0.1' }, required: false })
  @IsOptional()
  metadata?: any;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePaymentDetailDto)
  detalles?: CreatePaymentDetailDto[];
}