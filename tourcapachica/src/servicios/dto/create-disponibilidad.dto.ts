import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDisponibilidadDto {
  @ApiProperty({ description: 'ID del servicio', example: 1 })
  @IsNumber()
  servicioId: number;

  @ApiProperty({ description: 'Fecha de disponibilidad', example: '2024-04-29' })
  @Type(() => Date)
  @IsDate()
  fecha: Date;

  @ApiProperty({ description: 'Número de cupos disponibles', example: 10 })
  @IsNumber()
  cuposDisponibles: number;

  @ApiProperty({ description: 'Precio especial para esta fecha', example: 150.00, required: false })
  @IsNumber()
  @IsOptional()
  precioEspecial?: number;
} 