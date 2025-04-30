import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class CreatePagoDetalleDto {
  @ApiProperty({ description: 'ID del pago', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  pagoId: number;

  @ApiProperty({ description: 'ID del tipo de pago', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  tipoPagoId: number;

  @ApiProperty({ description: 'Concepto del pago', example: 'Pago de reserva' })
  @IsString()
  @IsNotEmpty()
  concepto: string;

  @ApiProperty({ description: 'Monto del pago', example: 100.00 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  monto: number;

  @ApiProperty({ description: 'Porcentaje de impuesto', default: 0, minimum: 0, maximum: 100 })
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  porcentajeImpuesto?: number;

  @ApiProperty({ description: 'Cantidad', default: 1, minimum: 1 })
  @IsNumber()
  @Min(1)
  @IsOptional()
  cantidad?: number;

  @ApiProperty({ description: 'Descripción adicional', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;
} 