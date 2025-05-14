export declare class CreateItinerarioReservaDto {
    reservaId: number;
    servicioId: number;
    fechaInicioActividad: string;
    fechaFinActividad: string;
    horaInicio?: Date;
    horaFin?: Date;
    lugarEncuentro: string;
    observaciones: string | null;
    tipoEvento: string;
    descripcion: string | null;
}
