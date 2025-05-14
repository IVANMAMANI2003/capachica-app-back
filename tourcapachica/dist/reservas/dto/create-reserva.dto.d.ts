import { EstadoReserva } from '../enums/estado-reserva.enum';
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
    estado: EstadoReserva;
    notas: string | null;
    motivoCancelacion: string | null;
    fechaCancelacion?: string | null;
}
