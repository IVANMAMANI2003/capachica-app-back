import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsDecimal, IsInt, IsISO8601, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateComprobanteDto {
  @ApiProperty()
  @IsInt()
  pagoId: number;

  @ApiProperty({ maxLength: 20 })
  @IsString()
  @MaxLength(20)
  tipoComprobante: string;

  @ApiProperty({ maxLength: 4 })
  @IsString()
  @MaxLength(4)
  serie: string;

  @ApiProperty()
  @IsInt()
  numero: number;

  @ApiProperty()
  @IsISO8601()
  fechaEmision: Date;

  @ApiProperty({ required: false, maxLength: 11 })
  @IsOptional()
  @IsString()
  @MaxLength(11)
  rucCliente?: string;

  @ApiProperty({ required: false, maxLength: 100 })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  razonSocial?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  direccionCliente?: string;

  @ApiProperty({ type: Number })
  @IsDecimal({ decimal_digits: '2' })
  @Type(() => Number)
  subtotal: number;

  @ApiProperty({ type: Number, default: 0 })
  @IsDecimal({ decimal_digits: '2' })
  @Type(() => Number)
  igv: number;

  @ApiProperty({ type: Number })
  @IsDecimal({ decimal_digits: '2' })
  @Type(() => Number)
  total: number;

  @ApiProperty({ default: 'PEN', maxLength: 3 })
  @IsString()
  @MaxLength(3)
  moneda: string;

  @ApiProperty({ default: 'emitido', maxLength: 20 })
  @IsString()
  @MaxLength(20)
  estado: string;

  @ApiProperty({ required: false, maxLength: 100 })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  codigoSunat?: string;

  @ApiProperty({ required: false, maxLength: 100 })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  codigoHash?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  xmlUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pdfUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  qrCodeUrl?: string;

  @ApiProperty({ required: false, maxLength: 255 })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  tokenSunat?: string;
}