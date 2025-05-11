import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class FavoriteLugarTuristicoDto {
  @ApiProperty({
    description: 'ID del usuario que marca como favorito',
    example: 1,
    required: true,
    type: Number
  })
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({
    description: 'ID del lugar turístico marcado como favorito',
    example: 1,
    required: true,
    type: Number
  })
  @IsNumber()
  @IsNotEmpty()
  lugarTuristicoId: number;
}