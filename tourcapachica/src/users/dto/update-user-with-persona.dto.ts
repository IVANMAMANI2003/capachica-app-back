import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsObject, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

class UpdatePersonaDto {
  @ApiPropertyOptional({ description: 'Nombre de la persona' })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiPropertyOptional({ description: 'Apellidos de la persona' })
  @IsOptional()
  @IsString()
  apellidos?: string;

  @ApiPropertyOptional({ description: 'Teléfono de la persona' })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiPropertyOptional({ description: 'Dirección de la persona' })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiPropertyOptional({ description: 'URL de la foto de perfil' })
  @IsOptional()
  @IsString()
  fotoPerfilUrl?: string;

  @ApiPropertyOptional({ description: 'Fecha de nacimiento (formato: YYYY-MM-DD)', example: '1990-01-15' })
  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @ApiPropertyOptional({ description: 'ID de la subdivisión' })
  @IsOptional()
  subdivisionId?: number;
}

export class UpdateUserWithPersonaDto {
  @ApiPropertyOptional({ description: 'Email del usuario', example: 'juan.garcia@example.com' })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({ type: UpdatePersonaDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => UpdatePersonaDto)
  persona?: UpdatePersonaDto;
}