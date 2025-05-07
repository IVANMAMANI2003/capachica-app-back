import { ApiProperty } from '@nestjs/swagger';

export class PromedioResponseDto {
  @ApiProperty({ description: 'Promedio de calificación del servicio' })
  promedioCalificacion: number;

  @ApiProperty({ description: 'Total de reseñas del servicio' })
  totalResenas: number;
}