import { ApiProperty } from '@nestjs/swagger';
import { EstadoPaquete } from '../enums/estado-paquete.enum';

class ImageEntity {
  @ApiProperty({ description: 'ID de la imagen' })
  id: number;

  @ApiProperty({ description: 'URL de la imagen' })
  url: string;

  @ApiProperty({ description: 'ID del elemento al que pertenece la imagen' })
  imageableId: number;

  @ApiProperty({ description: 'Tipo de elemento al que pertenece la imagen' })
  imageableType: string;

  @ApiProperty({ description: 'Fecha de creación de la imagen' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización de la imagen' })
  updatedAt: Date;
}

export class PaqueteTuristicoEntity {
  @ApiProperty({ description: 'ID del paquete turístico' })
  id: number;

  @ApiProperty({ description: 'Nombre del paquete turístico' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del paquete turístico' })
  descripcion: string;

  @ApiProperty({ description: 'Precio del paquete turístico' })
  precio: number;

  @ApiProperty({ description: 'Estado del paquete turístico', enum: EstadoPaquete })
  estado: EstadoPaquete;

  @ApiProperty({ description: 'ID del emprendimiento al que pertenece el paquete' })
  emprendimientoId: number;

  @ApiProperty({ description: 'Fecha de creación del paquete' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización del paquete' })
  updatedAt: Date;

  @ApiProperty({ description: 'Imágenes del paquete', type: [ImageEntity] })
  images?: ImageEntity[];
} 