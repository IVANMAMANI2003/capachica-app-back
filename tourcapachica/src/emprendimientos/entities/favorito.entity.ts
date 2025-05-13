import { ApiProperty } from '@nestjs/swagger';

export class FavoritoEntity {
  @ApiProperty({ description: 'ID único del favorito' })
  id: number;

  @ApiProperty({ description: 'ID del usuario que marcó como favorito el emprendimiento' })
  usuarioId: number;

  @ApiProperty({ description: 'ID del emprendimiento favorito' })
  emprendimientoId: number;

}