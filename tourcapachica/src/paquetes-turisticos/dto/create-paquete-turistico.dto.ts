import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum, IsArray, Min } from 'class-validator';
import { Type } from 'class-transformer';

class ImageDto {
  @ApiProperty({
    description: 'URL de la imagen',
    example: 'https://example.com/image.jpg',
    required: true,
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
  })
  @IsNumber()
  @IsNotEmpty()
  emprendimientoId: number;

  @ApiProperty({
    description: 'Nombre del paquete turístico',
    example: 'Tour por la isla de Capachica',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Descripción del paquete turístico',
    example: 'Recorrido completo por los principales atractivos de la isla',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Precio del paquete turístico',
    example: 150.00,
    required: true,
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
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo'])
  estado?: string = 'activo';

  @ApiProperty({
    description: 'IDs de los servicios incluidos en el paquete',
    type: [Number],
    required: false,
  })
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  servicios?: number[];

  @ApiProperty({
    description: 'Lista de imágenes del paquete turístico',
    type: [ImageDto],
    required: false,
  })
  @IsOptional()
  imagenes?: ImageDto[];
} 