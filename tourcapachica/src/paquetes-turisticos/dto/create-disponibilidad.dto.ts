import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { EstadoDisponibilidad } from '../enums/estado-disponibilidad.enum';
import { Type } from 'class-transformer';

export class CreateDisponibilidadDto {
  @ApiProperty({ description: 'Fecha de inicio de la disponibilidad', example: '2025-05-08' })
  @IsOptional()
  @IsDateString()
  fechaInicio?: string;
  
  @ApiProperty({ description: 'Fecha de fin de la disponibilidad', example: '2025-06-08' })
  @IsOptional()
  @IsDateString()
  fechaFin?: string;

  @ApiProperty({ description: 'Cupos disponibles para el período' })
  @IsNumber()
  cuposDisponibles: number;

  @ApiProperty({ description: 'Cupos máximos para el período' })
  @IsNumber()
  cuposMaximos: number;

  @ApiProperty({ description: 'Precio especial para el período', required: false })
  @IsNumber()
  @IsOptional()
  precioEspecial?: number;

  @ApiProperty({ description: 'Notas adicionales', required: false })
  @IsString()
  @IsOptional()
  notas?: string;

  @ApiProperty({ description: 'Estado de la disponibilidad', enum: EstadoDisponibilidad, required: false })
  @IsEnum(EstadoDisponibilidad)
  @IsOptional()
  estado?: EstadoDisponibilidad;

}