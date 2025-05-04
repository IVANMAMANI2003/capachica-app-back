import { ApiProperty } from '@nestjs/swagger';

export class UsuarioResponseDto {
  @ApiProperty({ description: 'ID del usuario' })
  id: number;

  @ApiProperty({ description: 'Nombre de usuario' })
  username: string;

  @ApiProperty({ description: 'Correo electrónico del usuario' })
  email: string;

  @ApiProperty({ description: 'Rol del usuario' })
  rol: string;

  @ApiProperty({ description: 'Indica si el usuario está activo' })
  activo: boolean;

  @ApiProperty({ description: 'Nombre completo del usuario' })
  nombreCompleto: string;

  @ApiProperty({ description: 'Número de teléfono del usuario' })
  telefono: string;

  @ApiProperty({ description: 'Fecha de creación del usuario' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización del usuario' })
  updatedAt: Date;
} 