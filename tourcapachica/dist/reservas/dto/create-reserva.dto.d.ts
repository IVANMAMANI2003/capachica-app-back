export declare class CreateReservaDto {
    usuarioId: number;
    tipoReserva: string;
    fechaReserva: string;
    fechaInicio: string;
    fechaFin: string | null;
    cantidadPersonas: number;
    precioTotal: number;
    moneda: string;
    metodoPago: string | null;
    datosPago: object | null;
    estado: string;
    notas: string | null;
    motivoCancelacion: string | null;
    fechaCancelacion?: string | null;
}
