import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateItinerarioReservaDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  reservaId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  servicioId: number;

  @ApiProperty({ example: '2023-10-01' })
  @IsDate()
  @IsNotEmpty()
  fechaInicioActividad: Date;

  @ApiProperty({ example: '2023-10-02' })
  @IsDate()
  @IsNotEmpty()
  fechaFinActividad: Date;

  @ApiProperty({ example: '08:00:00' })
  @IsDate()
  @IsOptional()
  horaInicio: Date | null;

  @ApiProperty({ example: '17:00:00' })
  @IsDate()
  @IsOptional()
  horaFin: Date | null;

  @ApiProperty({ example: 'Plaza Mayor' })
  @IsString()
  @IsNotEmpty()
  lugarEncuentro: string;

  @ApiProperty({ example: 'Observaciones del itinerario' })
  @IsString()
  @IsOptional()
  observaciones: string | null;

  @ApiProperty({ example: 'Evento especial' })
  @IsString()
  @IsNotEmpty()
  tipoEvento: string;

  @ApiProperty({ example: 'Descripción del evento' })
  @IsString()
  @IsOptional()
  descripcion: string | null;
}