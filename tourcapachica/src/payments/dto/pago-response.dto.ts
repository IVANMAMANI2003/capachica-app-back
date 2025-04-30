import { ApiProperty } from '@nestjs/swagger';
import { ComprobanteResponseDto } from './comprobante-response.dto';

export class PagoResponseDto {
  @ApiProperty({ description: 'ID del pago' })
  id: number;

  @ApiProperty({ description: 'ID de la reserva asociada' })
  reservaId: number;

  @ApiProperty({ description: 'Monto del pago' })
  monto: number;

  @ApiProperty({ description: 'Método de pago' })
  metodoPago: string;

  @ApiProperty({ description: 'Estado del pago' })
  estado: string;

  @ApiProperty({ description: 'Fecha del pago' })
  fechaPago: Date;

  @ApiProperty({ description: 'Notas adicionales', required: false })
  notas?: string;

  @ApiProperty({ description: 'Comprobante asociado', type: ComprobanteResponseDto, required: false })
  comprobante?: ComprobanteResponseDto;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updatedAt: Date;
} 