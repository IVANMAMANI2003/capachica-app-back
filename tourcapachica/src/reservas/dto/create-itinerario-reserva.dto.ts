import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate, Matches, IsDateString } from 'class-validator';

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
  @IsDateString()
  @IsNotEmpty()
  fechaInicioActividad: string;

  @ApiProperty({ example: '2023-10-02' })
  @IsDateString()
  @IsNotEmpty()
  fechaFinActividad: string;


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