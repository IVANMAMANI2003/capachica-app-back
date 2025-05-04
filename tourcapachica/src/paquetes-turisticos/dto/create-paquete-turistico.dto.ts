import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum, IsArray, MaxLength } from 'class-validator';
import { EstadoPaquete } from '../enums/estado-paquete.enum';

class ImageDto {
  @ApiProperty({
    description: 'URL de la imagen',
    example: 'https://example.com/imagen.jpg',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  url: string;
}

export class CreatePaqueteTuristicoDto {
  @ApiProperty({
    description: 'Nombre del paquete turístico',
    example: 'Turismo vivencial',
    required: true,
    maxLength: 200,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del paquete turístico',
    example: 'Tour completo por los principales atractivos de Capachica',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Precio del paquete turístico',
    example: 150.00,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @ApiProperty({
    description: 'Estado del paquete turístico',
    example: 'ACTIVO',
    enum: EstadoPaquete,
    default: EstadoPaquete.ACTIVO,
    required: true,
  })
  @IsEnum(EstadoPaquete)
  @IsNotEmpty()
  estado: EstadoPaquete;

  @ApiProperty({
    description: 'ID del emprendimiento al que pertenece el paquete',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  emprendimientoId: number;

  @ApiProperty({ 
    description: 'Imágenes del paquete turístico', 
    required: false,
    type: [ImageDto]
  })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 