import { ApiProperty } from '@nestjs/swagger';

export class ServicioResponseDto {
  @ApiProperty({ description: 'ID del servicio' })
  id: number;

  @ApiProperty({ description: 'Nombre del servicio' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del servicio' })
  descripcion: string;

  @ApiProperty({ description: 'Precio del servicio' })
  precio: number;

  @ApiProperty({ description: 'Duración del servicio en horas' })
  duracion: number;

  @ApiProperty({ description: 'URL de la imagen del servicio' })
  imagenUrl: string;

  @ApiProperty({ description: 'Indica si el servicio está activo' })
  activo: boolean;

  @ApiProperty({ description: 'Orden del servicio en el paquete' })
  orden: number;

  @ApiProperty({ description: 'Fecha de creación del servicio' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización del servicio' })
  updatedAt: Date;
} 