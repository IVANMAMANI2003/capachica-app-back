import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateItinerarioReservaDto {
  @ApiProperty({
    description: 'ID de la reserva a la que pertenece el itinerario',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  reservaId: number;

  @ApiProperty({
    description: 'Fecha del itinerario',
    example: '2024-05-15T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @ApiProperty({
    description: 'Hora del itinerario',
    example: '2024-05-15T09:00:00.000Z',
    required: false,
  })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  hora?: Date;

  @ApiProperty({
    description: 'Tipo de evento del itinerario',
    example: 'Visita guiada',
  })
  @IsString()
  @IsNotEmpty()
  tipoEvento: string;

  @ApiProperty({
    description: 'Descripción del itinerario',
    example: 'Visita guiada a la Isla Taquile',
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Notas adicionales sobre el itinerario',
    example: 'Llevar protector solar',
    required: false,
  })
  @IsString()
  @IsOptional()
  notas?: string;

  @ApiProperty({
    description: 'Duración del itinerario en minutos',
    example: 120,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  duracion?: number;

  @ApiProperty({
    description: 'ID del servicio asociado al itinerario',
    example: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  servicioId?: number;

  @ApiProperty({
    description: 'IDs de los lugares turísticos incluidos en el itinerario',
    example: [1, 2, 3],
    required: false,
    type: [Number],
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  lugaresTuristicosIds?: number[];
} 