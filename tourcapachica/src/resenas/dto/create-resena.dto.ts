import { ApiProperty } from '@nestjs/swagger';

export class CreateResenaDto {
  @ApiProperty({ description: 'ID del servicio', example: 1 })
  servicioId: number;

  @ApiProperty({ description: 'ID del usuario', example: 1 })
  usuarioId: number;

  @ApiProperty({ description: 'Calificación', example: 5 })
  calificacion: number;

  @ApiProperty({ description: 'Comentario', example: 'Excelente servicio', required: false })
  comentario?: string;
}