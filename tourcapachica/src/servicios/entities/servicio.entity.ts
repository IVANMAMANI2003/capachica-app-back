import { ApiProperty } from '@nestjs/swagger';

export class ServicioEntity {
  @ApiProperty({ description: 'ID único del servicio' })
  id: number;

  @ApiProperty({ description: 'ID del tipo de servicio' })
  tipoServicioId: number;

  @ApiProperty({ description: 'Nombre del servicio' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del servicio' })
  descripcion?: string;

  @ApiProperty({ description: 'Precio base del servicio' })
  precioBase: number;

  @ApiProperty({ description: 'Moneda del precio', enum: ['PEN', 'USD'] })
  moneda: string;

  @ApiProperty({ description: 'Estado del servicio', enum: ['activo', 'inactivo'] })
  estado: string;

  @ApiProperty({ description: 'URL de la imagen del servicio' })
  imagenUrl: string;

  @ApiProperty({ description: 'Detalles adicionales del servicio' })
  detallesServicio: Record<string, any>;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización' })
  updatedAt: Date;

  @ApiProperty({ description: 'Tipo de servicio relacionado' })
  tipoServicio?: any;

  @ApiProperty({ description: 'Disponibilidad del servicio' })
  disponibilidad?: any[];
} 