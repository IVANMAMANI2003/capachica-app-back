import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsArray, IsEnum, IsNotEmpty } from 'class-validator';
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
  @ApiProperty({ description: 'Nombre del paquete turístico' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Descripción del paquete turístico' })
  @IsString()
  descripcion: string;

  @ApiProperty({ description: 'Precio base del paquete turístico' })
  @IsNumber()
  precio: number;

  @ApiProperty({ description: 'Estado del paquete turístico', enum: EstadoPaquete })
  @IsEnum(EstadoPaquete)
  estado: EstadoPaquete;

  @ApiProperty({ description: 'ID del emprendimiento al que pertenece el paquete' })
  @IsNumber()
  emprendimientoId: number;

  @ApiProperty({ description: 'Cupos máximos del paquete', required: false })
  @IsNumber()
  @IsOptional()
  cuposMaximos?: number;

  @ApiProperty({ description: 'Duración del paquete en días', required: false })
  @IsNumber()
  @IsOptional()
  duracion?: number;

  @ApiProperty({ description: 'Imágenes del paquete', type: [ImageDto], required: false })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 