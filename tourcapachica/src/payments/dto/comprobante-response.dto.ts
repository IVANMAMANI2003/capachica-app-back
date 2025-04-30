import { ApiProperty } from '@nestjs/swagger';

export class ComprobanteResponseDto {
  @ApiProperty({ description: 'ID del comprobante' })
  id: number;

  @ApiProperty({ description: 'ID del pago asociado' })
  pagoId: number;

  @ApiProperty({ description: 'Serie del comprobante' })
  serie: string;

  @ApiProperty({ description: 'Número del comprobante' })
  numero: string;

  @ApiProperty({ description: 'Tipo de comprobante' })
  tipo: string;

  @ApiProperty({ description: 'Estado del comprobante' })
  estado: string;

  @ApiProperty({ description: 'Notas adicionales', required: false })
  notas?: string;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updatedAt: Date;
} 