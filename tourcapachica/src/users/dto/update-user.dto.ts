import { IsString, IsEmail, IsOptional, IsDate, IsNumber, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @ApiProperty({ description: 'Nombre del usuario', required: false })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ description: 'Apellidos del usuario', required: false })
  @IsOptional()
  @IsString()
  apellidos?: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Teléfono del usuario', required: false })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({ description: 'Dirección del usuario', required: false })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({ description: 'Fecha de nacimiento del usuario', required: false })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  fechaNacimiento?: Date;

  @ApiProperty({ description: 'ID de la subdivisión', required: false })
  @IsOptional()
  @IsNumber()
  subdivisionId?: number;

  @ApiProperty({ description: 'URL de la foto de perfil', required: false })
  @IsOptional()
  @IsUrl()
  fotoPerfil?: string;
}
