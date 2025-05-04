import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class UpdatePaqueteTuristicoDto {
  @ApiProperty({ description: 'Nombre del paquete turístico', required: false })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiProperty({ description: 'Descripción del paquete turístico', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Precio base del paquete turístico', required: false })
  @IsNumber()
  @IsOptional()
  precio?: number;

  @ApiProperty({ description: 'Estado del paquete turístico', required: false })
  @IsString()
  @IsOptional()
  estado?: string;

  @ApiProperty({ description: 'URL de la imagen principal', required: false })
  @IsString()
  @IsOptional()
  imagenUrl?: string;

  @ApiProperty({ description: 'Indica si el paquete está activo', required: false })
  @IsBoolean()
  @IsOptional()
  activo?: boolean;

  @ApiProperty({ description: 'URLs de imágenes adicionales', required: false, type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  imagenes?: string[];
} 