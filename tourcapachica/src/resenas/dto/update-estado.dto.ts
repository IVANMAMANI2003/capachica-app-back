import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstadoDto {
  @ApiProperty({ description: 'Estado de la reseña', example: 'aprobado' })
  estado: string;
}