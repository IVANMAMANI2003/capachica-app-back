import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class FavoriteServicioDto {
  @ApiProperty({ description: 'ID del favorito', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  id: number;


  @ApiProperty({ description: 'ID del usuario que marcó como favorito', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ description: 'ID del servicio marcado como favorito', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  servicioId: number;

}