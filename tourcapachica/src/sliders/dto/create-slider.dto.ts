import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, MaxLength, IsArray } from 'class-validator';

export class ImageDto {
  @ApiProperty({
    description: 'URL de la imagen',
    example: 'https://example.com/image.jpg',
    type: String
  })
  @IsString()
  @IsNotEmpty()
  url: string;
}

export class CreateSliderDto {
  @ApiProperty({
    description: 'Nombre del slider',
    example: 'Banner Principal',
    required: true,
    maxLength: 100,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del slider',
    example: 'Banner promocional para la temporada de verano',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({
    description: 'Estado del slider',
    example: 'activo',
    enum: ['activo', 'inactivo', 'pendiente'],
    default: 'activo',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo', 'pendiente'])
  estado?: string = 'activo';

  @ApiProperty({
    description: 'Imágenes del slider',
    required: false,
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
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 