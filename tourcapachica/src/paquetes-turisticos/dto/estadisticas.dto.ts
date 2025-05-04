import { ApiProperty } from '@nestjs/swagger';

export class EstadisticasPaqueteDto {
  @ApiProperty({ description: 'Total de reservas del paquete' })
  totalReservas: number;

  @ApiProperty({ description: 'Total de ingresos generados' })
  totalIngresos: number;

  @ApiProperty({ description: 'Promedio de calificación del paquete' })
  promedioCalificacion: number;

  @ApiProperty({ description: 'Total de reseñas' })
  totalResenas: number;

  @ApiProperty({ description: 'Tasa de ocupación promedio' })
  tasaOcupacion: number;

  @ApiProperty({ description: 'Servicios más populares', type: [Object] })
  serviciosPopulares: {
    servicioId: number;
    nombre: string;
    totalReservas: number;
  }[];

  @ApiProperty({ description: 'Estadísticas por mes', type: [Object] })
  estadisticasMensuales: {
    mes: string;
    totalReservas: number;
    totalIngresos: number;
  }[];
} 