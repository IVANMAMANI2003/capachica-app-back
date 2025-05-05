import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum, IsArray, Min, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePaqueteTuristicoDto {
  @ApiProperty({
    description: 'ID del emprendimiento',
    example: 1,
    required: true,
    type: Number
  })
  @IsNumber()
  @IsNotEmpty()
  emprendimientoId: number;

  @ApiProperty({
    description: 'Nombre del paquete turístico',
    example: 'Tour por la isla de Capachica',
    required: true,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Descripción detallada del paquete turístico',
    example: 'Recorrido completo por los principales atractivos de la isla, incluyendo playas, miradores y sitios históricos',
    required: true,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Precio del paquete turístico en la moneda especificada',
    example: 150.00,
    required: true,
    type: Number,
    minimum: 0
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  precio: number;

  @ApiProperty({
    description: 'Estado actual del paquete turístico',
    example: 'activo',
    default: 'activo',
    required: false,
    enum: ['activo', 'inactivo'],
    type: String
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo'])
  estado?: string = 'activo';

  @ApiProperty({
    description: 'IDs de los servicios incluidos en el paquete turístico',
    type: [Number],
    required: false,
    example: [1, 2, 3],
    isArray: true
  })
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  servicios?: number[];

  @ApiProperty({
    description: 'Lista de URLs de imágenes del paquete turístico',
    type: [String],
    required: false,
    example: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg'
    ],
    isArray: true
  })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  imagenes?: string[];
} 