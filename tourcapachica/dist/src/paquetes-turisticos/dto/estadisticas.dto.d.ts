export declare class ServicioPopularDto {
    servicioId: number;
    nombre: string;
    cantidadReservas: number;
}
export declare class EstadisticaMensualDto {
    mes: Date;
    totalReservas: number;
    totalIngresos: number;
}
export declare class EstadisticasPaqueteDto {
    totalReservas: number;
    totalIngresos: number;
    promedioCalificacion: number;
    totalResenas: number;
    tasaOcupacion: number;
    serviciosPopulares: ServicioPopularDto[];
    estadisticasMensuales: EstadisticaMensualDto[];
}
