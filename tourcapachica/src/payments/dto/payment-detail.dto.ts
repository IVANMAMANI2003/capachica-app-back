import {
  IsInt, Min, IsString, MaxLength, IsNumber, IsPositive,
  IsOptional
} from 'class-validator';

export class CreatePaymentDetailDto {
  @IsInt()
  @Min(1)
  pagoId: number;

  @IsInt()
  @Min(1)
  tipoPagoId: number;

  @IsString()
  @MaxLength(100)
  concepto: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  monto: number;

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
