import { ApiProperty } from '@nestjs/swagger';
import { PaqueteResponseDto } from './paquete-response.dto';
import { DisponibilidadResponseDto } from './disponibilidad-response.dto';
import { ReservaResponseDto } from './reserva-response.dto';
import { ResenaResponseDto } from './resena-response.dto';

export class ExportacionResponseDto {
  @ApiProperty({ description: 'Información del paquete turístico', type: PaqueteResponseDto })
  paquete: PaqueteResponseDto;

  @ApiProperty({ description: 'Lista de disponibilidades del paquete', type: [DisponibilidadResponseDto] })
  disponibilidades: DisponibilidadResponseDto[];

  @ApiProperty({ description: 'Lista de reservas del paquete', type: [ReservaResponseDto] })
  reservas: ReservaResponseDto[];

  @ApiProperty({ description: 'Lista de reseñas del paquete', type: [ResenaResponseDto] })
  resenas: ResenaResponseDto[];

  @ApiProperty({ description: 'Fecha de generación del reporte' })
  fechaGeneracion: Date;
} 