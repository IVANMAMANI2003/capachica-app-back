import { ApiProperty } from '@nestjs/swagger';
import { ServicioResponseDto } from './servicio-response.dto';

export class ItinerarioResponseDto {
  @ApiProperty({ description: 'ID del itinerario' })
  id: number;

  @ApiProperty({ description: 'ID de la reserva' })
  reservaId: number;

  @ApiProperty({ description: 'ID del servicio' })
  servicioId: number;

  @ApiProperty({ description: 'Fecha del servicio' })
  fecha: Date;

  @ApiProperty({ description: 'Hora de inicio del servicio' })
  horaInicio: string;

  @ApiProperty({ description: 'Hora de fin del servicio' })
  horaFin: string;

  @ApiProperty({ description: 'Cantidad de personas' })
  cantidadPersonas: number;

  @ApiProperty({ description: 'Precio unitario del servicio' })
  precioUnitario: number;

  @ApiProperty({ description: 'Precio total del servicio' })
  precioTotal: number;

  @ApiProperty({ description: 'Notas adicionales' })
  notas: string;

  @ApiProperty({ description: 'Información del servicio', type: ServicioResponseDto })
  servicio: ServicioResponseDto;

  @ApiProperty({ description: 'Fecha de creación del itinerario' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización del itinerario' })
  updatedAt: Date;
} 