import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsUrl, IsEnum, IsArray, MaxLength, IsTimeZone } from 'class-validator';

class ImageDto {
  @IsUrl()
  @IsOptional()
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
    example: '08:00',
    required: false,
  })
  @IsString()
  @IsOptional()
  horarioApertura?: string;

  @ApiProperty({
    description: 'Horario de cierre',
    example: '17:00',
    required: false,
  })
  @IsString()
  @IsOptional()
  horarioCierre?: string;

  @ApiProperty({
    description: 'Costo de entrada',
    example: 20.00,
    required: false,
  })
  @IsNumber()
  @IsOptional()
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