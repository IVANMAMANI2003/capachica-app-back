import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePaqueteTuristicoDto } from './create-paquete-turistico.dto';
import { ImageDto } from './create-paquete-turistico.dto';

export class UpdatePaqueteTuristicoDto extends PartialType(CreatePaqueteTuristicoDto) {
  @ApiProperty({
    description: 'ID del emprendimiento',
    example: 1,
    required: false,
    type: Number
  })
  emprendimientoId?: number;

  @ApiProperty({
    description: 'Nombre del paquete turístico',
    example: 'Tour por la isla de Capachica',
    required: false,
    type: String
  })
  nombre?: string;

  @ApiProperty({
    description: 'Descripción del paquete turístico',
    example: 'Recorrido completo por los principales atractivos de la isla',
    required: false,
    type: String
  })
  descripcion?: string;

  @ApiProperty({
    description: 'Precio del paquete turístico',
    example: 150.00,
    required: false,
    type: Number
  })
  precio?: number;

  @ApiProperty({
    description: 'Estado del paquete turístico',
    example: 'activo',
    required: false,
    enum: ['activo', 'inactivo'],
    type: String
  })
  estado?: string;

  @ApiProperty({
    description: 'IDs de los servicios incluidos en el paquete',
    type: [Number],
    required: false,
    example: [1, 2, 3]
  })
  servicios?: number[];

  @ApiProperty({
    description: 'Lista de imágenes del paquete turístico',
    type: [ImageDto],
    required: false,
    example: [
      {
        url: 'https://example.com/image1.jpg'
      },
      {
        url: 'https://example.com/image2.jpg'
      }
    ]
  })
  imagenes?: ImageDto[];
} 