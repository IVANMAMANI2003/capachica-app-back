import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUrl, IsEnum, IsObject } from 'class-validator';

export class CreateServicioDto {
  @ApiProperty({ description: 'ID del tipo de servicio', example: 1 })
  @IsNumber()
  tipoServicioId: number;

  @ApiProperty({ description: 'Nombre del servicio', example: 'Tour en bote' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Descripción del servicio', example: 'Tour en bote por el lago Titicaca' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Precio base del servicio', example: 50.00 })
  @IsNumber()
  precioBase: number;

  @ApiProperty({ description: 'Moneda del precio', example: 'PEN', enum: ['PEN', 'USD'] })
  @IsEnum(['PEN', 'USD'])
  @IsOptional()
  moneda?: string;

  @ApiProperty({ description: 'Estado del servicio', example: 'activo', enum: ['activo', 'inactivo'] })
  @IsEnum(['activo', 'inactivo'])
  @IsOptional()
  estado?: string;

  @ApiProperty({ description: 'URL de la imagen del servicio', example: 'https://example.com/image.jpg' })
  @IsUrl()
  imagenUrl: string;

  @ApiProperty({ description: 'Detalles adicionales del servicio', example: { duracion: '2 horas', incluye: ['Guía', 'Equipo'] } })
  @IsObject()
  @IsOptional()
  detallesServicio?: Record<string, any>;
} 