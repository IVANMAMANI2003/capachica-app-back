import { ApiProperty } from '@nestjs/swagger';

export class FilterResenasDto {
  @ApiProperty({ description: 'ID del servicio para filtrar reseñas', required: false })
  servicioId?: number;

  @ApiProperty({ description: 'ID del usuario para filtrar reseñas', required: false })
  usuarioId?: number;
}