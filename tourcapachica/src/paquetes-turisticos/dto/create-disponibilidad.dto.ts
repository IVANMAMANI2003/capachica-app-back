import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional, IsArray, Min, IsEnum, ArrayMinSize, ArrayMaxSize, Max } from 'class-validator';
import { Type } from 'class-transformer';

export enum EstadoDisponibilidad {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  COMPLETO = 'completo'
}

export class CreateDisponibilidadDto {
  @ApiProperty({
    description: 'Fecha de inicio de la disponibilidad',
    example: '2024-03-20T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  fechaInicio: Date;

  @ApiProperty({
    description: 'Fecha de fin de la disponibilidad',
    example: '2024-03-25T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  fechaFin: Date;

  @ApiProperty({
    description: 'Número de cupos disponibles',
    example: 10,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  cuposDisponibles: number;



  @ApiProperty({
    description: 'Precio especial para esta disponibilidad (opcional)',
    example: 150.00,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  precioEspecial?: number;

  @ApiProperty({
    description: 'Notas adicionales sobre la disponibilidad',
    example: 'Precio especial por temporada baja',
    required: false,
  })
  @IsOptional()
  @IsString()
  notas?: string;

  @ApiProperty({ description: 'Cupos máximos permitidos', required: false })
  @IsNumber()
  @Min(1)
  @IsOptional()
  cuposMaximos: number;

  @ApiProperty({ 
    description: 'Estado de la disponibilidad', 
    enum: EstadoDisponibilidad,
    default: EstadoDisponibilidad.ACTIVO 
  })
  @IsEnum(EstadoDisponibilidad)
  @IsOptional()
  estado?: EstadoDisponibilidad;

  @ApiProperty({ 
    description: 'Días de la semana disponibles (0 = domingo, 6 = sábado)',
    type: [Number],
    example: [1,2,3,4,5] // Lunes a Viernes
  })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(6, { each: true })
  diasSemana: number[];
} 