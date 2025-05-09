import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber, IsJSON, MaxLength, Min, IsArray, IsObject, ValidateNested } from 'class-validator';
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

export class CreateServicioDto {
  @ApiProperty({ description: 'ID del tipo de servicio', example: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  tipoServicioId: number;

  @ApiProperty({ description: 'ID del emprendimiento', example: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  emprendimientoId: number;

  @ApiProperty({ description: 'Nombre del servicio', example: 'Tour guiado por la isla' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Descripción del servicio', example: 'Tour guiado por los principales atractivos de la isla', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Precio base del servicio', example: 50.00 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  precioBase: number;

  @ApiProperty({ description: 'Moneda del precio', example: 'PEN', enum: ['PEN','USD'], required: false, default: 'PEN' })
  @IsString()
  @IsOptional()
  @IsEnum(['PEN','USD'])
  moneda?: string = 'PEN';

  @ApiProperty({ description: 'Estado del servicio', example: 'activo', enum: ['activo','inactivo'], required: false, default: 'activo' })
  @IsString()
  @IsOptional()
  @IsEnum(['activo','inactivo'])
  estado?: string = 'activo';

  @ApiProperty({
    description: 'Detalles adicionales del servicio',
    example: {
      duracion: '2 horas',
      capacidad: 10,
      incluye: ['Guía local','Transporte','Refrigerio'],
      requisitos: ['Ropa cómoda','Zapatillas']
    },
    required: false
  })
  @IsObject()
  @IsOptional()
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
  @IsOptional()
  @IsArray()
  @Type(() => ImageDto)
  imagenes?: ImageDto[];
}