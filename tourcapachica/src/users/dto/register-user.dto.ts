import { IsString, IsEmail, IsNotEmpty, MinLength, IsInt, IsOptional, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class RegisterUserDto {
  // Datos de la persona
  @ApiProperty({ 
    description: 'Nombre de la persona',
    example: 'Juan Carlos',
    minLength: 2
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ 
    description: 'Apellidos de la persona',
    example: 'García Pérez',
    minLength: 2
  })
  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @ApiPropertyOptional({ 
    description: 'Teléfono de la persona',
    example: '987654321',
    pattern: '^[0-9]{9}$'
  })
  @IsString()
  @IsOptional()
  telefono?: string;

  @ApiPropertyOptional({ 
    description: 'Dirección de la persona',
    example: 'Av. Los Incas 123, Puno'
  })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiPropertyOptional({ 
    description: 'URL de la foto de perfil',
    example: 'https://tourcapachica.com/images/profiles/user123.jpg'
  })
  @IsString()
  @IsOptional()
  fotoPerfilUrl?: string;

  @ApiPropertyOptional({ 
    description: 'Fecha de nacimiento',
    example: '1990-01-15T00:00:00.000Z',
    type: Date
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  fechaNacimiento?: Date;

  @ApiProperty({ 
    description: 'ID de la subdivisión (departamento)',
    example: 1,
    minimum: 1
  })
  @IsInt()
  @IsNotEmpty()
  subdivisionId: number;

  // Datos del usuario
  @ApiProperty({ 
    description: 'Email del usuario',
    example: 'juan.garcia@example.com',
    format: 'email'
  })
  @IsEmail({}, { message: 'El email debe ser válido' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email: string;

  @ApiProperty({ 
    description: 'Contraseña del usuario',
    example: 'SecurePass123!',
    minLength: 6,
    format: 'password'
  })
  @IsString()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
} 