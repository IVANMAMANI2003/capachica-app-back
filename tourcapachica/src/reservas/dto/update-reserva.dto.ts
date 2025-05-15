import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';

export class UpdateReservaDto {

  @ApiProperty({ example: 'pendiente' })
  @IsEnum(['pendiente', 'confirmada', 'cancelada', 'en_proceso', 'rechazada',  'expirada'])
  estado?: string;

  // Agrega más campos según sea necesario
}