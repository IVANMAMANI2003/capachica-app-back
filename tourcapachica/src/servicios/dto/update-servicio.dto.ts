import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServicioDto } from './create-servicio.dto';
import { ImageDto } from './create-servicio.dto';
import { IsNumber, IsOptional } from 'class-validator';

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
    description: 'Latitud del servicio',
    example: -15.7667,
    required: false,
    type: Number
  })
  @IsNumber()
  @IsOptional()
  latitud?: number;

  @ApiProperty({
    description: 'Longitud del servicio',
    example: -69.6833,
    required: false,
    type: Number
  })
  @IsNumber()
  @IsOptional()
  longitud?: number;

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