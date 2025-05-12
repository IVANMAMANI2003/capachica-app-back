import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsArray,
  IsObject,
  ValidateNested,
  MaxLength
} from 'class-validator';
import { Type } from 'class-transformer';

export class ImageDto {
  @ApiPropertyOptional({
    description: 'URL de la imagen',
    example: 'https://example.com/image.jpg'
  })
  @IsString()
  @IsOptional()
  url?: string;
}

export class UpdateServicioDto {
  @ApiPropertyOptional({ description: 'ID del tipo de servicio', example: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  tipoServicioId?: number;

  @ApiPropertyOptional({ description: 'Nombre del servicio', example: 'Tour guiado por la isla' })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiPropertyOptional({ description: 'Descripción del servicio', example: 'Tour guiado por los principales atractivos de la isla' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiPropertyOptional({
    description: 'Latitud del servicio',
    example: -15.7667
  })
  @IsNumber()
  @IsOptional()
  latitud?: number;

  @ApiPropertyOptional({
    description: 'Longitud del servicio',
    example: -69.6833
  })
  @IsNumber()
  @IsOptional()
  longitud?: number;

  @ApiPropertyOptional({ description: 'Precio base del servicio', example: 50.00 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  precioBase?: number;

  @ApiPropertyOptional({
    description: 'Moneda del precio',
    example: 'PEN',
    enum: ['PEN','USD']
  })
  @IsString()
  @IsOptional()
  @IsEnum(['PEN','USD'])
  moneda?: string;

  @ApiPropertyOptional({
    description: 'Estado del servicio',
    example: 'activo',
    enum: ['activo','inactivo']
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo','inactivo'])
  estado?: string;

  @ApiPropertyOptional({
    description: 'Detalles adicionales del servicio',
    example: {
      duracion: '2 horas',
      capacidad: 10,
      incluye: ['Guía local','Transporte','Refrigerio'],
      requisitos: ['Ropa cómoda','Zapatillas']
    }
  })
  @IsObject()
  @IsOptional()
  detallesServicio?: Record<string, any>;

  @ApiPropertyOptional({
    description: 'Lista de imágenes nuevas para actualizar el servicio',
    type: [ImageDto],
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
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  imagenes?: ImageDto[];
}
export class UpdateServicioPayloadDto {
  @ApiProperty({
    description: 'Datos a actualizar del servicio',
    type: UpdateServicioDto
  })
  @ValidateNested()
  @Type(() => UpdateServicioDto)
  servicio: UpdateServicioDto;

  @ApiPropertyOptional({
    description: 'ID del emprendimiento (solo SuperAdmin puede enviarlo)',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  emprendimientoId?: number;
}