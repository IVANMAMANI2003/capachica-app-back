import { ApiProperty } from '@nestjs/swagger';

export class ServicioPopularDto {
  @ApiProperty({ description: 'ID del servicio' })
  servicioId: number;

  @ApiProperty({ description: 'Nombre del servicio' })
  nombre: string;

  @ApiProperty({ description: 'Cantidad de reservas para este servicio' })
  cantidadReservas: number;
}

export class EstadisticaMensualDto {
  @ApiProperty({ description: 'Mes de la estadística' })
  mes: Date;

  @ApiProperty({ description: 'Total de reservas en el mes' })
  totalReservas: number;

  @ApiProperty({ description: 'Total de ingresos en el mes' })
  totalIngresos: number;
}

export class EstadisticasPaqueteDto {
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
} 