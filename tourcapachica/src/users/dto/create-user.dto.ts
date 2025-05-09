import { IsString, IsEmail, IsNotEmpty, MinLength, IsInt, IsOptional, IsNumber, IsDate, IsUrl, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({ description: 'Email del usuario', example: 'usuario@example.com' })
  @IsEmail({}, { message: 'El email debe ser válido' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email: string;

  @ApiProperty({ description: 'Contraseña del usuario', example: 'password123' })
  @IsString()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @ApiProperty({ description: 'ID de la persona asociada al usuario', example: 1 })
  @IsInt({ message: 'El ID de la persona debe ser un número entero' })
  @IsNotEmpty({ message: 'El ID de la persona es requerido' })
  persona_id: number;

  @ApiProperty({
    description: 'Nombre de la persona',
    example: 'Juan',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Apellidos de la persona',
    example: 'Pérez García',
  })
  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @ApiProperty({
    description: 'Teléfono de contacto',
    example: '+51 987654321',
    required: false,
  })
  @IsString()
  @IsOptional()
  telefono?: string;

  @ApiProperty({
    description: 'Dirección',
    example: 'Av. Principal 123',
    required: false,
  })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({ description: 'Fecha de nacimiento (formato: YYYY-MM-DD', example: '1990-01-15' })
  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;



  @ApiProperty({
    description: 'ID de la subdivisión',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  subdivisionId: number;

  @ApiProperty({
    description: 'URL de la foto de perfil',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  fotoPerfil?: string;
}
