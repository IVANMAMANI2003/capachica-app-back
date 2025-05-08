import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstadoDto {
  @ApiProperty({ description: 'estado', example: 'aprobado' })
  estado: string;
}