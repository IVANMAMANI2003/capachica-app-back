import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEmail, IsUrl, IsObject } from 'class-validator';

export class CreateEmprendimientoDto {
  @ApiProperty({ description: 'Nombre del emprendimiento', example: 'Restaurante La Casona' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada del emprendimiento', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Tipo de emprendimiento', example: 'restaurante' })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({ description: 'Dirección física del emprendimiento', required: false })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({ description: 'Coordenadas geográficas del emprendimiento', required: false })
  @IsString()
  @IsOptional()
  coordenadas?: string;

  @ApiProperty({ description: 'Teléfono de contacto', required: false })
  @IsString()
  @IsOptional()
  contactoTelefono?: string;

  @ApiProperty({ description: 'Email de contacto', required: false })
  @IsEmail()
  @IsOptional()
  contactoEmail?: string;

  @ApiProperty({ description: 'URL del sitio web', required: false })
  @IsUrl()
  @IsOptional()
  sitioWeb?: string;

  @ApiProperty({ description: 'Redes sociales del emprendimiento', required: false })
  @IsObject()
  @IsOptional()
  redesSociales?: Record<string, string>;
} 