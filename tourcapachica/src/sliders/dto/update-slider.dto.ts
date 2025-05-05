import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, MaxLength, IsArray, IsNotEmpty } from 'class-validator';
import { CreateSliderDto } from './create-slider.dto';
import { ImageDto } from './create-slider.dto';

export class UpdateSliderDto extends PartialType(CreateSliderDto) {
  @ApiProperty({
    description: 'Nombre del slider',
    example: 'Banner Principal',
    required: false,
    maxLength: 100,
    type: String
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  nombre?: string;

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
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo', 'pendiente'])
  estado?: string;

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