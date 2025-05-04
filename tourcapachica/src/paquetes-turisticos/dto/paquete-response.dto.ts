import { ApiProperty } from '@nestjs/swagger';
import { ServicioResponseDto } from './servicio-response.dto';

export class PaqueteResponseDto {
  @ApiProperty({ description: 'ID del paquete turístico' })
  id: number;

  @ApiProperty({ description: 'Nombre del paquete turístico' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del paquete turístico' })
  descripcion: string;

  @ApiProperty({ description: 'Precio base del paquete turístico' })
  precio: number;

  @ApiProperty({ description: 'Estado del paquete turístico' })
  estado: string;

  @ApiProperty({ description: 'ID del emprendimiento al que pertenece el paquete' })
  emprendimientoId: number;

  @ApiProperty({ description: 'URL de la imagen principal' })
  imagenUrl: string;

  @ApiProperty({ description: 'Indica si el paquete está activo' })
  activo: boolean;

  @ApiProperty({ description: 'Cupos máximos del paquete' })
  cuposMaximos: number;

  @ApiProperty({ description: 'Duración del paquete en días' })
  duracion: number;

  @ApiProperty({ description: 'URLs de imágenes adicionales', type: [String] })
  imagenes: string[];

  @ApiProperty({ description: 'Servicios incluidos en el paquete', type: [ServicioResponseDto] })
  servicios: ServicioResponseDto[];

  @ApiProperty({ description: 'Fecha de creación del paquete' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización del paquete' })
  updatedAt: Date;
} 