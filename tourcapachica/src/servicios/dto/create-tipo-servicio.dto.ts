import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsUrl, IsOptional } from 'class-validator';

export class CreateTipoServicioDto {
  @ApiProperty({ description: 'Nombre del tipo de servicio', example: 'Tour' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Descripción del tipo de servicio', example: 'Tours guiados por la zona' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'URL de la imagen representativa', example: 'https://example.com/tour.jpg' })
  @IsUrl()
  imagenUrl: string;

  @ApiProperty({ description: 'Indica si el servicio requiere control de cupos', example: true })
  @IsBoolean()
  @IsOptional()
  requiereCupo?: boolean;
} 