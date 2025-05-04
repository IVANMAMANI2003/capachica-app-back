import { ApiProperty } from '@nestjs/swagger';
import { UsuarioResponseDto } from './usuario-response.dto';

export class ResenaResponseDto {
  @ApiProperty({ description: 'ID de la reseña' })
  id: number;

  @ApiProperty({ description: 'ID del usuario que realizó la reseña' })
  usuarioId: number;

  @ApiProperty({ description: 'Tipo de objeto reseñado' })
  tipoObjeto: string;

  @ApiProperty({ description: 'ID del objeto reseñado' })
  objetoId: number;

  @ApiProperty({ description: 'Calificación de la reseña' })
  calificacion: number;

  @ApiProperty({ description: 'Comentario de la reseña' })
  comentario: string;

  @ApiProperty({ description: 'Información del usuario que realizó la reseña', type: UsuarioResponseDto })
  usuario: UsuarioResponseDto;

  @ApiProperty({ description: 'Fecha de creación de la reseña' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización de la reseña' })
  updatedAt: Date;
} 