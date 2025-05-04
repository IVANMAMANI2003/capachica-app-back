import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, MaxLength, IsArray, IsNotEmpty } from 'class-validator';

class ImageDto {
  @IsString()
  @IsNotEmpty()
  url: string;
}
 
export class UpdateSliderDto {
  @ApiProperty({
    description: 'Nombre del slider',
    example: 'Banner Principal',
    required: false,
    maxLength: 100,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  nombre?: string;

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
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo', 'pendiente'])
  estado?: string;

  @ApiProperty({
    description: 'Imágenes del slider',
    required: false,
    type: [ImageDto]
  })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 