export declare class DisponibilidadResponseDto {
    id: number;
    paqueteTuristicoId: number;
    fechaInicio: Date;
    fechaFin: Date;
    cuposDisponibles: number;
    cuposMaximos?: number;
    precioEspecial?: number;
    notas?: string;
    createdAt: Date;
    updatedAt: Date;
}
