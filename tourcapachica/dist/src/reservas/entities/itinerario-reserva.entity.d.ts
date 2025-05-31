export declare class ItinerarioReserva {
    id: number;
    reservaId: number;
    servicioId: number;
    fechaInicioActividad: Date;
    fechaFinActividad: Date;
    horaInicio: Date | null;
    horaFin: Date | null;
    lugarEncuentro: string;
    observaciones: string | null;
    tipoEvento: string;
    descripcion: string | null;
}
