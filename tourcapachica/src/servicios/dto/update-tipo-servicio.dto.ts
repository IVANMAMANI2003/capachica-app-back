import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTipoServicioDto {
  @ApiProperty({ description: 'Nombre del tipo de servicio', example: 'Tour' })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiProperty({ description: 'Descripción del tipo de servicio', example: 'Tours guiados por la zona' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Indica si el servicio requiere control de cupos', example: true })
  @IsBoolean()
  @IsOptional()
  requiereCupo?: boolean;
} 