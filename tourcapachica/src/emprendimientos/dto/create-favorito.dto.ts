import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateFavoritoDto {
  @ApiProperty({ description: 'ID del emprendimiento a marcar como favorito', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  emprendimientoId: number;
} 