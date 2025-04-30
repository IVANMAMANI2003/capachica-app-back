import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty({ description: 'ID del usuario' })
  id: number;

  @ApiProperty({ description: 'ID de la persona asociada' })
  personaId: number;

  @ApiProperty({ description: 'Email del usuario' })
  email: string;

  @ApiProperty({ description: 'Indica si el email está verificado' })
  emailVerified: boolean;

  @ApiProperty({ description: 'Indica si el usuario está activo' })
  estaActivo: boolean;

  @ApiProperty({ description: 'Fecha del último acceso' })
  ultimoAcceso?: Date;

  @ApiProperty({ description: 'Preferencias del usuario' })
  preferencias: Record<string, any>;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updatedAt: Date;

  @ApiProperty({ description: 'Persona asociada al usuario' })
  persona?: any;

  @ApiProperty({ description: 'Roles del usuario' })
  usuariosRoles?: any[];
}
