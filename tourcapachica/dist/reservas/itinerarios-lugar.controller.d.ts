import { ItinerariosLugarService } from './itinerarios-lugar.service';
export declare class ItinerariosLugarController {
    private readonly itinerariosLugarService;
    constructor(itinerariosLugarService: ItinerariosLugarService);
    create(itinerarioId: number, lugarTuristicoId: number): Promise<{
        itinerarioReserva: {
            id: number;
            servicioId: number | null;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            fecha: Date;
            notas: string | null;
            hora: Date | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            estado: string;
            direccion: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    }>;
    findAll(): Promise<({
        itinerarioReserva: {
            id: number;
            servicioId: number | null;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            fecha: Date;
            notas: string | null;
            hora: Date | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            estado: string;
            direccion: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    })[]>;
    findByItinerario(itinerarioId: number): Promise<({
        itinerarioReserva: {
            id: number;
            servicioId: number | null;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            fecha: Date;
            notas: string | null;
            hora: Date | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            estado: string;
            direccion: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    })[]>;
    findByLugarTuristico(lugarTuristicoId: number): Promise<({
        itinerarioReserva: {
            id: number;
            servicioId: number | null;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            fecha: Date;
            notas: string | null;
            hora: Date | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            estado: string;
            direccion: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    })[]>;
    remove(itinerarioId: number, lugarTuristicoId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    }>;
    removeByItinerario(itinerarioId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
