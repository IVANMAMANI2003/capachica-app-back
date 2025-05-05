import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsUrl, IsEnum, IsArray, MaxLength, IsTimeZone, Matches, Min, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

class ImageDto {
  @ApiProperty({
    description: 'URL de la imagen',
    example: 'https://example.com/image.jpg',
    required: true,
  })
  @IsUrl()
  @IsNotEmpty()
  url: string;
}

export class CreateLugarTuristicoDto {
  @ApiProperty({
    description: 'Nombre del lugar turístico',
    example: 'Isla Taquile',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del lugar turístico',
    example: 'Isla ubicada en el lago Titicaca, conocida por sus tejidos tradicionales.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Dirección del lugar turístico',
    example: 'Isla Taquile, Lago Titicaca, Puno',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({
    description: 'Coordenadas geográficas del lugar',
    example: '-15.7667, -69.6833',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  coordenadas: string;

  @ApiProperty({
    description: 'Estado del lugar turístico',
    example: 'activo',
    default: 'activo',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo'])
  @MaxLength(20)
  estado?: string = 'activo';

  @ApiProperty({
    description: 'Indica si el lugar es destacado',
    example: true,
    default: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  esDestacado?: boolean = false;

  @ApiProperty({
    description: 'Horario de apertura',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  horarioApertura?: Date;

  @ApiProperty({
    description: 'Horario de cierre',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  horarioCierre?: Date;

  @ApiProperty({
    description: 'Costo de entrada',
    example: 20.00,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  costoEntrada?: number;

  @ApiProperty({
    description: 'Recomendaciones para visitar el lugar',
    example: 'Llevar protector solar y agua',
    required: false,
  })
  @IsString()
  @IsOptional()
  recomendaciones?: string;

  @ApiProperty({
    description: 'Restricciones del lugar',
    example: 'No se permite el ingreso con mascotas',
    required: false,
  })
  @IsString()
  @IsOptional()
  restricciones?: string;

  @ApiProperty({
    description: 'Lista de imágenes del lugar',
    type: [ImageDto],
    required: false,
  })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 