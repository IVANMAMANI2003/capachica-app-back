import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { EstadoDisponibilidad } from '../enums/estado-disponibilidad.enum';

export class UpdateDisponibilidadDto {
  @ApiProperty({ description: 'Fecha de inicio de la disponibilidad', example: '2025-05-08', required: false })
  @IsDateString()
  @IsOptional()
  fechaInicio?: string;

  @ApiProperty({ description: 'Fecha de fin de la disponibilidad', example: '2025-05-11', required: false })
  @IsDateString()
  @IsOptional()
  fechaFin?: string;

  @ApiProperty({ description: 'Cupos disponibles para el período', required: false })
  @IsNumber()
  @IsOptional()
  cuposDisponibles?: number;

  @ApiProperty({ description: 'Cupos máximos para el período', required: false })
  @IsNumber()
  @IsOptional()
  cuposMaximos?: number;

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