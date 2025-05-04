import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional, IsEnum } from 'class-validator';
import { EstadoDisponibilidad } from '../enums/estado-disponibilidad.enum';

export class UpdateDisponibilidadDto {
  @ApiProperty({ description: 'Fecha de inicio de la disponibilidad', required: false })
  @IsDate()
  @IsOptional()
  fechaInicio?: Date;

  @ApiProperty({ description: 'Fecha de fin de la disponibilidad', required: false })
  @IsDate()
  @IsOptional()
  fechaFin?: Date;

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

  @ApiProperty({ description: 'Días de la semana disponibles', required: false, type: [String] })
  @IsString({ each: true })
  @IsOptional()
  diasSemana?: string[];
} 