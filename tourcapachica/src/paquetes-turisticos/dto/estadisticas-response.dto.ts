import { ApiProperty } from '@nestjs/swagger';
import { ServicioPopularDto } from './estadisticas.dto';
import { EstadisticaMensualDto } from './estadisticas.dto';

export class EstadisticasResponseDto {
  @ApiProperty({ description: 'Total de reservas del paquete' })
  totalReservas: number;

  @ApiProperty({ description: 'Total de ingresos generados' })
  totalIngresos: number;

  @ApiProperty({ description: 'Promedio de calificación del paquete' })
  promedioCalificacion: number;

  @ApiProperty({ description: 'Total de reseñas recibidas' })
  totalResenas: number;

  @ApiProperty({ description: 'Tasa de ocupación del paquete (porcentaje)' })
  tasaOcupacion: number;

  @ApiProperty({ description: 'Servicios más populares del paquete', type: [ServicioPopularDto] })
  serviciosPopulares: ServicioPopularDto[];

  @ApiProperty({ description: 'Estadísticas mensuales', type: [EstadisticaMensualDto] })
  estadisticasMensuales: EstadisticaMensualDto[];

  @ApiProperty({ description: 'Fecha de generación del reporte' })
  fechaGeneracion: Date;
} 