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

  @ApiProperty({ example: '08:00:00' })
  @IsOptional()
  @Matches(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'La hora debe estar en formato HH:mm:ss',
  })
  @Transform(({ value }) => value ? new Date(`1970-01-01T${value}`) : null)
  horaInicio?: Date;

  @ApiProperty({ example: '17:00:00' })
  @IsOptional()
  @Matches(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'La hora debe estar en formato HH:mm:ss',
  })
  @Transform(({ value }) => value ? new Date(`1970-01-01T${value}`) : null)
  horaFin?: Date;

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