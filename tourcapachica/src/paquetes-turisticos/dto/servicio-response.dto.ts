import { ApiProperty } from '@nestjs/swagger';

export class ServicioResponseDto {
  @ApiProperty({ description: 'ID del servicio turístico' })
  id: number;

  @ApiProperty({ description: 'Nombre del servicio turístico' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del servicio turístico' })
  descripcion: string;

  @ApiProperty({ description: 'Precio del servicio turístico' })
  precio: number;

  @ApiProperty({ description: 'Duración del servicio turístico en horas' })
  duracion: number;

  @ApiProperty({ description: 'URL de la imagen del servicio turístico' })
  imagenUrl: string;

  @ApiProperty({ description: 'Estado del servicio turístico' })
  activo: boolean;

  @ApiProperty({ description: 'Fecha de creación del servicio turístico' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización del servicio turístico' })
  updatedAt: Date;
} 