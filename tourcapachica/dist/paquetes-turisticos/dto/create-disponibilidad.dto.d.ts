export declare enum EstadoDisponibilidad {
    ACTIVO = "activo",
    INACTIVO = "inactivo",
    COMPLETO = "completo"
}
export declare class CreateDisponibilidadDto {
    fechaInicio: Date;
    fechaFin: Date;
    cuposDisponibles: number;
    precioEspecial?: number;
    notas?: string;
    cuposMaximos: number;
    estado?: EstadoDisponibilidad;
    diasSemana: number[];
}
