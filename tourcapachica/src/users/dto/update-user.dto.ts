import { IsString, IsEmail, IsOptional, MinLength, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ description: 'Email del usuario', example: 'usuario@example.com' })
  @IsEmail({}, { message: 'El email debe ser válido' })
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ description: 'Contraseña del usuario', example: 'password123' })
  @IsString()
  @IsOptional()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password?: string;

  @ApiPropertyOptional({ description: 'Indica si el usuario está activo', example: true })
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  @IsOptional()
  esta_activo?: boolean;
}
