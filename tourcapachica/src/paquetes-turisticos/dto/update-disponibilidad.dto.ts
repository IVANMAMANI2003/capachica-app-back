import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional, IsArray, Min, IsEnum, ArrayMinSize, ArrayMaxSize, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { EstadoDisponibilidad } from './create-disponibilidad.dto';

export class UpdateDisponibilidadDto {
  @ApiProperty({ description: 'Fecha de inicio de la disponibilidad', required: false })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  fechaInicio?: Date;

  @ApiProperty({ description: 'Fecha de fin de la disponibilidad', required: false })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  fechaFin?: Date;

  @ApiProperty({ description: 'Cupos disponibles', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  cuposDisponibles?: number;

  @ApiProperty({ description: 'Cupos máximos permitidos', required: false })
  @IsNumber()
  @Min(1)
  @IsOptional()
  cuposMaximos?: number;

  @ApiProperty({ description: 'Precio especial para esta disponibilidad', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  precioEspecial?: number;

  @ApiProperty({ 
    description: 'Estado de la disponibilidad', 
    enum: EstadoDisponibilidad,
    required: false 
  })
  @IsEnum(EstadoDisponibilidad)
  @IsOptional()
  estado?: EstadoDisponibilidad;

  @ApiProperty({ 
    description: 'Días de la semana disponibles (0 = domingo, 6 = sábado)',
    type: [Number],
    required: false,
    example: [1,2,3,4,5] // Lunes a Viernes
  })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(6, { each: true })
  @IsOptional()
  diasSemana?: number[];

  @ApiProperty({ description: 'Notas adicionales sobre la disponibilidad', required: false })
  @IsString()
  @IsOptional()
  notas?: string;
} 