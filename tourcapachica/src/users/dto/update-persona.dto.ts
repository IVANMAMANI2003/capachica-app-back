import { IsOptional, IsString, IsDate, IsInt, IsUrl } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class UpdatePersonaDto {
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
  @IsUrl()
  fotoPerfilUrl?: string;

  @ApiPropertyOptional({
    description: 'Fecha de nacimiento (formato: YYYY-MM-DD)',
    example: '1990-01-15',
    type: String
  })
  @IsOptional()
  @Transform(({ value }) => value ? new Date(value + 'T00:00:00') : undefined)
  @IsDate({ message: 'La fecha de nacimiento debe tener el formato YYYY-MM-DD' })
  fechaNacimiento?: Date;

  @ApiPropertyOptional({ description: 'ID de la subdivisión' })
  @IsOptional()
  @IsInt()
  subdivisionId?: number;
}
