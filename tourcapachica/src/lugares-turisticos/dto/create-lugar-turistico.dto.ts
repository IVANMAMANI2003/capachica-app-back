import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsUrl, IsEnum, IsArray, MaxLength, IsTimeZone } from 'class-validator';

class ImageDto {
  @IsUrl()
  url: string;
}

export class CreateLugarTuristicoDto {
  @ApiProperty({
    description: 'Nombre del lugar turístico',
    example: 'Isla Taquile',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del lugar turístico',
    example: 'Isla ubicada en el lago Titicaca, conocida por sus tejidos tradicionales.',
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Dirección del lugar turístico',
    example: 'Isla Taquile, Lago Titicaca, Puno',
  })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({
    description: 'Coordenadas geográficas del lugar',
    example: '-15.7667, -69.6833',
  })
  @IsString()
  @IsNotEmpty()
  coordenadas: string;

  @ApiProperty({
    description: 'URL de la imagen del lugar turístico',
    example: 'https://example.com/images/taquile.jpg',
    required: false,
  })
  @IsUrl()
  @IsOptional()
  imagenUrl?: string;

  @ApiProperty({
    description: 'Indica si el lugar es destacado',
    example: true,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  esDestacado?: boolean;

  @ApiProperty({
    description: 'Estado del lugar turístico',
    example: 'activo',
    default: 'activo',
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo'])
  @MaxLength(20)
  estado?: string;

  @IsTimeZone()
  @IsOptional()
  horarioApertura?: Date;

  @IsTimeZone()
  @IsOptional()
  horarioCierre?: Date;

  @IsNumber()
  @IsOptional()
  costoEntrada?: number;

  @IsString()
  @IsOptional()
  recomendaciones?: string;

  @IsString()
  @IsOptional()
  restricciones?: string;

  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 