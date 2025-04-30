import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsUrl, IsBoolean, IsArray, IsOptional, Min, ArrayMinSize } from 'class-validator';

export class UpdatePaqueteDto {
  @ApiProperty({ description: 'Nombre del paquete turístico' })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiProperty({ description: 'Descripción del paquete turístico' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Precio del paquete turístico' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  precio?: number;

  @ApiProperty({ description: 'Duración del paquete turístico en horas' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  duracion?: number;

  @ApiProperty({ description: 'URL de la imagen del paquete turístico' })
  @IsUrl()
  @IsOptional()
  imagenUrl?: string;

  @ApiProperty({ description: 'Estado del paquete turístico' })
  @IsBoolean()
  @IsOptional()
  activo?: boolean;

  @ApiProperty({ description: 'IDs de los servicios incluidos en el paquete', type: [Number] })
  @IsArray()
  @ArrayMinSize(1)
  @IsOptional()
  servicioIds?: number[];
} 