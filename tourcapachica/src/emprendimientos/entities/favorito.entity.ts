import { ApiProperty } from '@nestjs/swagger';

export class FavoritoEntity {
  @ApiProperty({ description: 'ID único del favorito' })
  id: number;

  @ApiProperty({ description: 'ID del emprendimiento favorito' })
  emprendimientoId: number;

  @ApiProperty({ description: 'Estado del favorito' })
  estado: string;

  @ApiProperty({ description: 'Fecha de creación del favorito' })
  createdAt: Date;

  @ApiProperty({ description: 'Emprendimiento favorito' })
  emprendimiento?: any;
} 