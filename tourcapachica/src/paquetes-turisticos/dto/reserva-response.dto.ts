import { ApiProperty } from '@nestjs/swagger';
import { UsuarioResponseDto } from './usuario-response.dto';
import { ItinerarioResponseDto } from './itinerario-response.dto';

export class ReservaResponseDto {
  @ApiProperty({ description: 'ID de la reserva' })
  id: number;

  @ApiProperty({ description: 'Código único de la reserva' })
  codigoReserva: string;

  @ApiProperty({ description: 'Estado de la reserva' })
  estado: string;

  @ApiProperty({ description: 'Moneda de la reserva' })
  moneda: string;

  @ApiProperty({ description: 'Monto total de la reserva' })
  monto: number;

  @ApiProperty({ description: 'Tipo de reserva' })
  tipoReserva: string;

  @ApiProperty({ description: 'Fecha de la reserva' })
  fechaReserva: Date;

  @ApiProperty({ description: 'Fecha de inicio de la reserva' })
  fechaInicio: Date;

  @ApiProperty({ description: 'Fecha de fin de la reserva' })
  fechaFin: Date;

  @ApiProperty({ description: 'Cantidad de personas' })
  cantidadPersonas: number;

  @ApiProperty({ description: 'Notas adicionales' })
  notas: string;

  @ApiProperty({ description: 'Información del usuario que realizó la reserva', type: UsuarioResponseDto })
  usuario: UsuarioResponseDto;

  @ApiProperty({ description: 'Itinerario de la reserva', type: [ItinerarioResponseDto] })
  itinerario: ItinerarioResponseDto[];

  @ApiProperty({ description: 'Fecha de creación de la reserva' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización de la reserva' })
  updatedAt: Date;
} 