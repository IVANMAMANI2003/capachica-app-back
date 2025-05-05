import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLugarTuristicoDto } from './create-lugar-turistico.dto';
import { ImageDto } from './create-lugar-turistico.dto';

export class UpdateLugarTuristicoDto extends PartialType(CreateLugarTuristicoDto) {
  @ApiProperty({
    description: 'Nombre del lugar turístico',
    example: 'Isla Taquile',
    required: false,
    maxLength: 200,
    type: String
  })
  nombre?: string;

  @ApiProperty({
    description: 'Descripción del lugar turístico',
    example: 'Isla ubicada en el lago Titicaca, conocida por sus tejidos tradicionales.',
    required: false,
    type: String
  })
  descripcion?: string;

  @ApiProperty({
    description: 'Dirección del lugar turístico',
    example: 'Isla Taquile, Lago Titicaca, Puno',
    required: false,
    type: String
  })
  direccion?: string;

  @ApiProperty({
    description: 'Coordenadas geográficas del lugar',
    example: '-15.7667, -69.6833',
    required: false,
    type: String
  })
  coordenadas?: string;

  @ApiProperty({
    description: 'Estado del lugar turístico',
    example: 'activo',
    required: false,
    enum: ['activo', 'inactivo'],
    type: String
  })
  estado?: string;

  @ApiProperty({
    description: 'Indica si el lugar es destacado',
    example: true,
    required: false,
    type: Boolean
  })
  esDestacado?: boolean;

  @ApiProperty({
    description: 'Horario de apertura',
    example: '2024-03-20T08:00:00.000Z',
    required: false,
    type: Date
  })
  horarioApertura?: Date;

  @ApiProperty({
    description: 'Horario de cierre',
    example: '2024-03-20T17:00:00.000Z',
    required: false,
    type: Date
  })
  horarioCierre?: Date;

  @ApiProperty({
    description: 'Costo de entrada',
    example: 20.00,
    required: false,
    type: Number
  })
  costoEntrada?: number;

  @ApiProperty({
    description: 'Recomendaciones para visitar el lugar',
    example: 'Llevar protector solar y agua',
    required: false,
    type: String
  })
  recomendaciones?: string;

  @ApiProperty({
    description: 'Restricciones del lugar',
    example: 'No se permite el ingreso con mascotas',
    required: false,
    type: String
  })
  restricciones?: string;

  @ApiProperty({
    description: 'Lista de imágenes del lugar',
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