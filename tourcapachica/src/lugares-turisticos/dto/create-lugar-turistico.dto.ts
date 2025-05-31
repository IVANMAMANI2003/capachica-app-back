import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsUrl, IsEnum, IsArray, MaxLength, IsTimeZone, Matches, Min, IsDate, IsNumberString } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';

export class ImageDto {
  @ApiProperty({
    description: 'URL de la imagen',
    example: 'https://example.com/image.jpg',
    required: true,
    type: String
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
    maxLength: 200,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del lugar turístico',
    example: 'Isla ubicada en el lago Titicaca, conocida por sus tejidos tradicionales.',
    required: true,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Dirección del lugar turístico',
    example: 'Isla Taquile, Lago Titicaca, Puno',
    required: true,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({
    description: 'Latitud del lugar turístico',
    example: -15.7667,
    required: true,
    type: Number
  })
  @IsNumber()
  @IsNotEmpty()
  latitud: number;

  @ApiProperty({
    description: 'Longitud del lugar turístico',
    example: -69.6833,
    required: true,
    type: Number
  })
  @IsNumber()
  @IsNotEmpty()
  longitud: number;

  @ApiProperty({
    description: 'Estado del lugar turístico',
    example: 'activo',
    default: 'activo',
    required: false,
    enum: ['activo', 'inactivo'],
    type: String
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
    type: Boolean
  })
  @IsBoolean()
  @IsOptional()
  esDestacado?: boolean = false;

  @ApiProperty({
    description: 'Horario de apertura',
    example: '2024-03-20T08:00:00.000Z',
    required: false,
    type: Date
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  horarioApertura?: Date;

  @ApiProperty({
    description: 'Horario de cierre',
    example: '2024-03-20T17:00:00.000Z',
    required: false,
    type: Date
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  horarioCierre?: Date;



  @ApiProperty({
    description: 'Costo de entrada',
    example: '20.00',
    required: false,
    type: String,
  })
  @IsOptional()
  @Matches(/^\d+(\.\d{1,2})?$/, { message: 'El costo debe ser un número decimal con hasta 2 decimales.' })
  costoEntrada: Prisma.Decimal;


  @ApiProperty({
    description: 'Recomendaciones para visitar el lugar',
    example: 'Llevar protector solar y agua',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  recomendaciones?: string;

  @ApiProperty({
    description: 'Restricciones del lugar',
    example: 'No se permite el ingreso con mascotas',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  restricciones?: string;

  @ApiProperty({
    description: 'Lista de imágenes del lugar',
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
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
}