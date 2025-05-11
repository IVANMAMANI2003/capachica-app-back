export declare class CreateItinerarioReservaDto {
    reservaId: number;
    fecha: Date;
    horarioCierre?: Date;
    tipoEvento: string;
    descripcion: string;
    notas?: string;
    duracion?: number;
    servicioId?: number;
    lugaresTuristicosIds?: number[];
}
