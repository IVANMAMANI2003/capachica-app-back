import { ServicioPopularDto } from './estadisticas.dto';
import { EstadisticaMensualDto } from './estadisticas.dto';
export declare class EstadisticasResponseDto {
    totalReservas: number;
    totalIngresos: number;
    promedioCalificacion: number;
    totalResenas: number;
    tasaOcupacion: number;
    serviciosPopulares: ServicioPopularDto[];
    estadisticasMensuales: EstadisticaMensualDto[];
    fechaGeneracion: Date;
}
