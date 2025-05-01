export declare enum EstadoReserva {
    PENDIENTE = "pendiente",
    CONFIRMADA = "confirmada",
    CANCELADA = "cancelada",
    COMPLETADA = "completada"
}
export declare class CreateReservaDto {
    turistaId: number;
    codigoReserva: string;
    tipoReserva: string;
    fechaReserva: Date;
    fechaInicio: Date;
    hora?: string;
    fechaFin?: Date;
    cantidadPersonas?: number;
    estado?: EstadoReserva;
    precioTotal: number;
    moneda?: string;
    metodoPago?: string;
    datosPago?: any;
    notas?: string;
    motivoCancelacion?: string;
    fechaCancelacion?: Date;
}
