import { ApiProperty } from '@nestjs/swagger';

export class CreateFavoritoDtoxx {
  @ApiProperty({ description: 'ID del usuario' })
  usuarioId: number;

  @ApiProperty({ description: 'ID del paquete turístico' })
  paqueteTuristicoId: number;
}