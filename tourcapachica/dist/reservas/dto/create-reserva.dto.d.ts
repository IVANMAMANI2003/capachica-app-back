import { EstadoReserva } from '../enums/estado-reserva.enum';
export declare class CreateReservaDto {
    usuarioId: number;
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
