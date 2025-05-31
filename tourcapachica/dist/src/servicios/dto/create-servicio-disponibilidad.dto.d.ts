export declare class CreateServicioDisponibilidadDto {
    servicioId: number;
    fechaInicio: string;
    fechaFin: string;
    cuposMaximos?: number;
    cuposDisponibles: number;
    precioEspecial?: number;
    estado?: string;
    notas?: string;
}
