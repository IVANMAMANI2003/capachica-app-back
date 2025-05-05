import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServicioDto } from './create-servicio.dto';
import { ImageDto } from './create-servicio.dto';

export class UpdateServicioDto extends PartialType(CreateServicioDto) {
  @ApiProperty({
    description: 'ID del tipo de servicio',
    example: 1,
    required: false,
    type: Number
  })
  tipoServicioId?: number;

  @ApiProperty({
    description: 'Nombre del servicio',
    example: 'Tour guiado por la isla',
    required: false,
    type: String
  })
  nombre?: string;

  @ApiProperty({
    description: 'Descripción del servicio',
    example: 'Tour guiado por los principales atractivos de la isla',
    required: false,
    type: String
  })
  descripcion?: string;

  @ApiProperty({
    description: 'Precio base del servicio',
    example: 50.00,
    required: false,
    type: Number
  })
  precioBase?: number;

  @ApiProperty({
    description: 'Moneda del precio',
    example: 'PEN',
    required: false,
    enum: ['PEN', 'USD'],
    type: String
  })
  moneda?: string;

  @ApiProperty({
    description: 'Estado del servicio',
    example: 'activo',
    required: false,
    enum: ['activo', 'inactivo'],
    type: String
  })
  estado?: string;

  @ApiProperty({
    description: 'Detalles adicionales del servicio',
    example: {
      duracion: '2 horas',
      capacidad: 10,
      incluye: ['Guía local', 'Transporte', 'Refrigerio'],
      requisitos: ['Ropa cómoda', 'Zapatillas']
    },
    required: false,
    type: Object
  })
  detallesServicio?: Record<string, any>;

  @ApiProperty({
    description: 'Lista de imágenes del servicio',
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