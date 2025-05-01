import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUrl, IsEnum, IsObject, IsArray, MaxLength, IsJSON } from 'class-validator';

class ImageDto {
  @IsUrl()
  url: string;
}

export class CreateServicioDto {
  @ApiProperty({ description: 'ID del tipo de servicio', example: 1 })
  @IsNumber()
  tipoServicioId: number;

  @ApiProperty({ description: 'Nombre del servicio', example: 'Tour en bote' })
  @IsString()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({ description: 'Descripción del servicio', example: 'Tour en bote por el lago Titicaca' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Precio base del servicio', example: 50.00 })
  @IsNumber()
  precioBase: number;

  @ApiProperty({ description: 'Moneda del precio', example: 'PEN', enum: ['PEN', 'USD'] })
  @IsString()
  @IsOptional()
  @MaxLength(3)
  moneda?: string;

  @ApiProperty({ description: 'Estado del servicio', example: 'activo', enum: ['activo', 'inactivo'] })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo'])
  @MaxLength(20)
  estado?: string;

  @ApiProperty({ description: 'URL de la imagen del servicio', example: 'https://example.com/image.jpg' })
  @IsUrl()
  imagenUrl: string;

  @ApiProperty({ description: 'Detalles adicionales del servicio', example: { duracion: '2 horas', incluye: ['Guía', 'Equipo'] } })
  @IsJSON()
  @IsOptional()
  detallesServicio?: any;

  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 