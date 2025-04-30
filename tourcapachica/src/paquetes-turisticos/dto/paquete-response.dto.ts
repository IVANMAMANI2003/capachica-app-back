import { ApiProperty } from '@nestjs/swagger';
import { ServicioResponseDto } from './servicio-response.dto';

export class PaqueteResponseDto {
  @ApiProperty({ description: 'ID del paquete turístico' })
  id: number;

  @ApiProperty({ description: 'Nombre del paquete turístico' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del paquete turístico' })
  descripcion: string;

  @ApiProperty({ description: 'Precio del paquete turístico' })
  precio: number;

  @ApiProperty({ description: 'Duración del paquete turístico en horas' })
  duracion: number;

  @ApiProperty({ description: 'URL de la imagen del paquete turístico' })
  imagenUrl: string;

  @ApiProperty({ description: 'Estado del paquete turístico' })
  activo: boolean;

  @ApiProperty({ description: 'Fecha de creación del paquete turístico' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización del paquete turístico' })
  updatedAt: Date;

  @ApiProperty({ description: 'Lista de servicios incluidos en el paquete', type: [ServicioResponseDto] })
  servicios: ServicioResponseDto[];
} 