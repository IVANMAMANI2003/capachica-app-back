import { ApiProperty } from '@nestjs/swagger';

export class EmprendimientoEntity {
  @ApiProperty({ description: 'ID único del emprendimiento' })
  id: number;

  @ApiProperty({ description: 'ID del usuario propietario del emprendimiento' })
  usuarioId: number;

  @ApiProperty({ description: 'Nombre del emprendimiento' })
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada del emprendimiento', required: false })
  descripcion?: string;

  @ApiProperty({ description: 'Tipo de emprendimiento' })
  tipo: string;

  @ApiProperty({ description: 'Dirección física del emprendimiento', required: false })
  direccion?: string;

  @ApiProperty({ description: 'Coordenadas geográficas del emprendimiento', required: false })
  coordenadas?: string;

  @ApiProperty({ description: 'Teléfono de contacto', required: false })
  contactoTelefono?: string;

  @ApiProperty({ description: 'Email de contacto', required: false })
  contactoEmail?: string;

  @ApiProperty({ description: 'URL del sitio web', required: false })
  sitioWeb?: string;

  @ApiProperty({ description: 'Redes sociales del emprendimiento', required: false })
  redesSociales?: any;

  @ApiProperty({ description: 'Estado actual del emprendimiento' })
  estado: string;

  @ApiProperty({ description: 'Fecha de aprobación del emprendimiento', required: false })
  fechaAprobacion?: Date;

  @ApiProperty({ description: 'Fecha de creación del registro' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización' })
  updatedAt: Date;
} 