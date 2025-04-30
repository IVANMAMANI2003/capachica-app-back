import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, Min, Max } from 'class-validator';

export class CreateTipoPagoDto {
  @ApiProperty({ description: 'Nombre del tipo de pago', example: 'Tarjeta de Crédito' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Descripción del tipo de pago', required: false, example: 'Pago con tarjeta de crédito' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Indica si el pago requiere verificación', default: false })
  @IsBoolean()
  @IsOptional()
  requiereVerificacion?: boolean;

  @ApiProperty({ description: 'Porcentaje de comisión', default: 0, minimum: 0, maximum: 100 })
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  comisionPorcentaje?: number;

  @ApiProperty({ description: 'Indica si el tipo de pago está activo', default: true })
  @IsBoolean()
  @IsOptional()
  activo?: boolean;
} 