import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateComprobanteDto {
  @ApiProperty({ description: 'ID del pago asociado al comprobante' })
  @IsNotEmpty()
  @IsNumber()
  pagoId: number;

  @ApiProperty({ description: 'Serie del comprobante' })
  @IsNotEmpty()
  @IsString()
  serie: string;

  @ApiProperty({ description: 'Número del comprobante' })
  @IsNotEmpty()
  @IsNumber()
  numero: number;

  @ApiProperty({ description: 'Tipo de comprobante' })
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @ApiProperty({ description: 'RUC del cliente', required: false })
  @IsOptional()
  @IsString()
  rucCliente?: string;

  @ApiProperty({ description: 'Razón social del cliente', required: false })
  @IsOptional()
  @IsString()
  razonSocial?: string;

  @ApiProperty({ description: 'Dirección del cliente', required: false })
  @IsOptional()
  @IsString()
  direccionCliente?: string;

  @ApiProperty({ description: 'Subtotal del comprobante' })
  @IsNotEmpty()
  @IsNumber()
  subtotal: number;

  @ApiProperty({ description: 'IGV del comprobante', required: false })
  @IsOptional()
  @IsNumber()
  igv?: number;

  @ApiProperty({ description: 'Total del comprobante' })
  @IsNotEmpty()
  @IsNumber()
  total: number;

  @ApiProperty({ description: 'Moneda del comprobante', default: 'PEN' })
  @IsOptional()
  @IsString()
  moneda?: string;

  @ApiProperty({ description: 'Estado del comprobante', default: 'emitido' })
  @IsOptional()
  @IsString()
  estado?: string;

  @ApiProperty({ description: 'Código SUNAT', required: false })
  @IsOptional()
  @IsString()
  codigoSunat?: string;

  @ApiProperty({ description: 'Código hash del comprobante', required: false })
  @IsOptional()
  @IsString()
  codigoHash?: string;

  @ApiProperty({ description: 'URL del XML del comprobante', required: false })
  @IsOptional()
  @IsUrl()
  xmlUrl?: string;

  @ApiProperty({ description: 'URL del PDF del comprobante', required: false })
  @IsOptional()
  @IsUrl()
  pdfUrl?: string;

  @ApiProperty({ description: 'Notas adicionales', required: false })
  @IsOptional()
  @IsString()
  notas?: string;
} 