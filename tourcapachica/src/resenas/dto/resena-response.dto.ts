import { ApiProperty } from '@nestjs/swagger';

export class ResenaResponseDto {
  @ApiProperty({ description: 'ID de la reseña' })
  id: number;

  @ApiProperty({ description: 'ID del servicio' })
  servicioId: number;

  @ApiProperty({ description: 'ID del usuario' })
  usuarioId: number;

  @ApiProperty({ description: 'Calificación de la reseña' })
  calificacion: number;

  @ApiProperty({ description: 'Comentario de la reseña', required: false })
  comentario?: string;

  @ApiProperty({ description: 'Estado de la reseña' })
  estado: string;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updatedAt: Date;
}