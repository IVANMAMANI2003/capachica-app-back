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

  @ApiProperty({ description: 'Moneda utilizada', example: 'PEN', default: 'PEN' })
  @IsString()
  @IsOptional()
  moneda?: string;

  @ApiProperty({ description: 'Datos del método de pago', example: { numero: '123456789' }, required: false })
  @IsOptional()
  datosMetodoPago?: any;

  @ApiProperty({ description: 'Metadatos adicionales', example: { ip: '127.0.0.1' }, required: false })
  @IsOptional()
  metadata?: any;

  @ApiProperty({
    description: 'Lista de detalles del pago',
    type: [CreatePaymentDetailDto],
    example: [
      {
        tipoPagoId: 1,
        concepto: 'Pago inicial',
        monto: 50.0,
        porcentajeImpuesto: 0,
        cantidad: 1,
        descripcion: 'Pago realizado con Yape',
      },
      {
        tipoPagoId: 2,
        concepto: 'Pago final',
        monto: 50.0,
        porcentajeImpuesto: 0,
        cantidad: 1,
        descripcion: 'Pago realizado en efectivo',
      },
    ],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePaymentDetailDto)
  detalles?: CreatePaymentDetailDto[];
}
