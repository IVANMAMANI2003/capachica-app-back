import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateServicioDisponibilidadDto {
  @ApiProperty({ description: 'Fecha de inicio del servicio', required: false })
  @IsDateString()
  @IsOptional()
  fechaInicio?: string;

  @ApiProperty({ description: 'Fecha de fin del servicio', required: false })
  @IsDateString()
  @IsOptional()
  fechaFin?: string;
  
  @ApiProperty({ description: 'Cupos máximos', required: false })
  @IsNumber()
  @IsOptional()
  cuposMaximos?: number;

  @ApiProperty({ description: 'Cupos disponibles', required: false })
  @IsNumber()
  @IsOptional()
  cuposDisponibles?: number;

  @ApiProperty({ description: 'Precio especial', required: false })
  @IsNumber()
  @IsOptional()
  precioEspecial?: number;

  
  @ApiProperty({ description: 'Estado de la disponibilidad', required: false })
  @IsString()
  @IsOptional()
  estado?: string;

  @ApiProperty({ description: 'Notas adicionales', required: false })
  @IsString()
  @IsOptional()
  notas?: string;

  
}