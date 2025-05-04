import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsArray, IsEnum } from 'class-validator';
import { EstadoPaquete } from '../enums/estado-paquete.enum';

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

  @ApiProperty({ description: 'URL de la imagen principal', required: false })
  @IsString()
  @IsOptional()
  imagenUrl?: string;

  @ApiProperty({ description: 'Cupos máximos del paquete', required: false })
  @IsNumber()
  @IsOptional()
  cuposMaximos?: number;

  @ApiProperty({ description: 'Duración del paquete en días', required: false })
  @IsNumber()
  @IsOptional()
  duracion?: number;

  @ApiProperty({ description: 'URLs de imágenes adicionales', required: false, type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  imagenes?: string[];
} 