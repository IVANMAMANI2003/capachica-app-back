import { Type } from 'class-transformer';
import {
  IsInt, Min, IsString, MaxLength, IsNumber, IsPositive,
  IsOptional,
  IsArray,
  ValidateNested
} from 'class-validator';

export class CreatePaymentDetailDto {
  @IsInt()
  @Min(1)
  @IsOptional()
  pagoId?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  tipoPagoId?: number;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  concepto?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @IsOptional()
  monto?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  porcentajeImpuesto?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  cantidad?: number;

  @IsString()
  @IsOptional()
  descripcion?: string;


}
