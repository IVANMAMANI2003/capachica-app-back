export declare class CreateReservaDto {
    usuarioId: number;
    codigoReserva: string;
    tipoReserva: string;
    fechaReserva: Date;
    fechaInicio: Date;
    fechaFin: Date | null;
    cantidadPersonas: number;
    precioTotal: number;
    moneda: string;
    metodoPago: string | null;
    datosPago: object | null;
    estado: string;
    notas: string | null;
    motivoCancelacion: string | null;
    fechaCancelacion: Date | null;
}
