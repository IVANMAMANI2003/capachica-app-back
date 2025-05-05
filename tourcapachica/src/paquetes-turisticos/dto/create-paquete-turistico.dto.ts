import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum, IsArray, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ImageDto {
  @ApiProperty({
    description: 'URL de la imagen',
    example: 'https://example.com/image.jpg',
    required: true,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  url: string;
}

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
    description: 'Descripción del paquete turístico',
    example: 'Recorrido completo por los principales atractivos de la isla',
    required: true,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Precio del paquete turístico',
    example: 150.00,
    required: true,
    type: Number
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  precio: number;

  @ApiProperty({
    description: 'Estado del paquete turístico',
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
    description: 'IDs de los servicios incluidos en el paquete',
    type: [Number],
    required: false,
    example: [1, 2, 3]
  })
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
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
  @IsOptional()
  imagenes?: ImageDto[];
} 