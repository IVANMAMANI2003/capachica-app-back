import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, IsOptional } from 'class-validator';

export class DisponibilidadResponseDto {
  @ApiProperty({
    description: 'ID de la disponibilidad',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'ID del paquete turístico',
    example: 1,
  })
  paqueteTuristicoId: number;

  @ApiProperty({
    description: 'Fecha de inicio de la disponibilidad',
    example: '2024-03-20T00:00:00.000Z',
  })
  fechaInicio: Date;

  @ApiProperty({
    description: 'Fecha de fin de la disponibilidad',
    example: '2024-03-25T00:00:00.000Z',
  })
  fechaFin: Date;

  @ApiProperty({
    description: 'Número de cupos disponibles',
    example: 10,
  })
  cuposDisponibles: number;

  
  @ApiProperty({ description: 'Cupos máximos permitidos', required: false })
  @IsNumber()
  @Min(1)
  @IsOptional()
  cuposMaximos?: number;


  @ApiProperty({
    description: 'Precio especial para esta disponibilidad',
    example: 150.00,
    required: false,
  })
  precioEspecial?: number;

  @ApiProperty({
    description: 'Notas adicionales sobre la disponibilidad',
    example: 'Precio especial por temporada baja',
    required: false,
  })
  notas?: string;

  @ApiProperty({
    description: 'Estado de la disponibilidad',
    example: 'Disponible',
    required: false,
  })
  estado?: string;

  @ApiProperty({
    description: 'Días de la semana disponibles',
    example: ['Lunes', 'Miércoles', 'Viernes'],
    type: [String],
    required: false,
  })
  diasSemana?: string[];

  @ApiProperty({
    description: 'Fecha de creación del registro',
    example: '2024-03-15T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Fecha de última actualización del registro',
    example: '2024-03-15T00:00:00.000Z',
  })
  updatedAt: Date;
} 