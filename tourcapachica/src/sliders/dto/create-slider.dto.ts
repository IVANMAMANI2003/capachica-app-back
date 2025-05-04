import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, MaxLength, IsArray } from 'class-validator';

class ImageDto {
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
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del slider',
    example: 'Banner promocional para la temporada de verano',
    required: false,
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
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo', 'pendiente'])
  estado?: string = 'activo';

  @ApiProperty({
    description: 'Imágenes del slider',
    required: false,
    type: [ImageDto]
  })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 