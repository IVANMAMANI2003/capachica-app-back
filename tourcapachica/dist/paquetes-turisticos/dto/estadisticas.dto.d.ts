export declare class EstadisticasPaqueteDto {
    totalReservas: number;
    totalIngresos: number;
    promedioCalificacion: number;
    totalResenas: number;
    tasaOcupacion: number;
    serviciosPopulares: {
        servicioId: number;
        nombre: string;
        totalReservas: number;
    }[];
    estadisticasMensuales: {
        mes: string;
        totalReservas: number;
        totalIngresos: number;
    }[];
}
