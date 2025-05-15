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
    estado: EstadoReserva;
    notas: string | null;
}
