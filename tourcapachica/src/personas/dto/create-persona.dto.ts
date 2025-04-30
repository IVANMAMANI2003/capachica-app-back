import { IsString, IsNotEmpty, IsOptional, IsDate, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePersonaDto {
  @ApiProperty({ description: 'Nombre de la persona' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Apellidos de la persona' })
  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @ApiPropertyOptional({ description: 'Teléfono de la persona' })
  @IsString()
  @IsOptional()
  telefono?: string;

  @ApiPropertyOptional({ description: 'Dirección de la persona' })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiPropertyOptional({ description: 'URL de la foto de perfil' })
  @IsString()
  @IsOptional()
  fotoPerfilUrl?: string;

  @ApiPropertyOptional({ description: 'Fecha de nacimiento' })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  fechaNacimiento?: Date;

  @ApiProperty({ description: 'ID de la subdivisión' })
  @IsInt()
  @IsNotEmpty()
  subdivisionId: number;
}