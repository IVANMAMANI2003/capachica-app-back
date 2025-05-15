import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateComprobanteDto {
  @ApiProperty({ description: 'ID del pago asociado', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  pagoId: number;

  @ApiProperty({ description: 'Tipo de comprobante', example: 'Factura' })
  @IsString()
  @IsNotEmpty()
  tipoComprobante: string;


  @ApiProperty({ description: 'RUC del cliente', example: '12345678901', required: false })
  @IsString()
  @IsOptional()
  rucCliente?: string;

  @ApiProperty({ description: 'Razón social del cliente', example: 'Empresa SAC', required: false })
  @IsString()
  @IsOptional()
  razonSocial?: string;

  @ApiProperty({ description: 'Subtotal del comprobante', example: 100.00 })
  @IsNumber()
  @IsNotEmpty()
  subtotal: number;

  @ApiProperty({ description: 'IGV del comprobante', example: 18.00 })
  @IsNumber()
  @IsNotEmpty()
  igv: number;

  @ApiProperty({ description: 'Total del comprobante', example: 118.00 })
  @IsNumber()
  @IsNotEmpty()
  total: number;

  @ApiProperty({ description: 'Estado del comprobante', example: 'emitido' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ description: 'Fecha de emisión del comprobante', example: '2023-01-01T00:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  fechaEmision: Date;
}