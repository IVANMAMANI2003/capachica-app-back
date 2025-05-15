export declare class Reserva {
    id: number;
    usuarioId: number;
    codigoReserva: string;
    tipoReserva: string;
    fechaReserva: Date;
    fechaInicio: Date;
    fechaFin: Date | null;
    cantidadPersonas: number;
    precioTotal: number;
    moneda: string;
    estado: string;
    notas: string | null;
    motivoCancelacion: string | null;
    fechaCancelacion: Date | null;
}
