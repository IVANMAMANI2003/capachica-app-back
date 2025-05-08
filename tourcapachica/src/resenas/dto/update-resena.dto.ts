import { ApiProperty } from '@nestjs/swagger';

export class UpdateResenaDto {
  @ApiProperty({ description: 'Calificación', example: 5, required: false })
  calificacion?: number;

  @ApiProperty({ description: 'Comentario', example: 'Muy buen servicio', required: false })
  comentario?: string;

}