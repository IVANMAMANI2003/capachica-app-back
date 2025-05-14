import { ApiProperty } from '@nestjs/swagger';
import { Reserva } from './reserva.entity';

export class ItinerarioReserva {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  reservaId: number;

  @ApiProperty({ example: 1 })
  servicioId: number;

  @ApiProperty({ example: '2023-10-01T00:00:00Z' })
  fechaInicioActividad: Date;

  @ApiProperty({ example: '2023-10-02T00:00:00Z' })
  fechaFinActividad: Date;

  @ApiProperty({ example: '08:00:00' })
  horaInicio: Date | null;

  @ApiProperty({ example: '17:00:00' })
  horaFin: Date | null;

  @ApiProperty({ example: 'Plaza Mayor' })
  lugarEncuentro: string;

  @ApiProperty({ example: 'Observaciones del itinerario' })
  observaciones: string | null;

  @ApiProperty({ example: 'Evento especial' })
  tipoEvento: string;

  @ApiProperty({ example: 'Descripción del evento' })
  descripcion: string | null;

}