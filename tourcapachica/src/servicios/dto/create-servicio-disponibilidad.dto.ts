import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsOptional, IsDateString, Min } from 'class-validator';

export class CreateServicioDisponibilidadDto {
  @ApiProperty({
    description: 'ID del servicio',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  servicioId: number;

  @ApiProperty({
    description: 'Fecha Inicio de disponibilidad (YYYY-MM-DD)',
    example: '2024-03-15',
    required: true,
  })
  @IsDateString()
  @IsNotEmpty()
  fechaInicio: string;

  @ApiProperty({
    description: 'Fecha Fin de disponibilidad (YYYY-MM-DD)',
    example: '2024-03-17',
    required: true,
  })
  @IsDateString()
  @IsNotEmpty()
  fechaFin: string;

  @ApiProperty({
    description: 'Cupos disponibles para la fecha',
    example: 10,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  cuposDisponibles: number;

  @ApiProperty({
    description: 'Precio especial para la fecha (opcional)',
    example: 45.50,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  precioEspecial?: number;
} 