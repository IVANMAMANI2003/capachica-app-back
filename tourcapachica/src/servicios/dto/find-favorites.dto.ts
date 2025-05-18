import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class FindFavoritesDto {
  @ApiProperty({ description: 'ID del usuario para obtener los servicios favoritos' })
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}