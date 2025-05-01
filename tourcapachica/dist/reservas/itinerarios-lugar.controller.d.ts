import { ItinerariosLugarService } from './itinerarios-lugar.service';
export declare class ItinerariosLugarController {
    private readonly itinerariosLugarService;
    constructor(itinerariosLugarService: ItinerariosLugarService);
    create(itinerarioId: number, lugarTuristicoId: number): Promise<{
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            direccion: string;
            descripcion: string;
            estado: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            reservaId: number;
            notas: string | null;
            hora: Date | null;
            servicioId: number | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    }>;
    findAll(): Promise<({
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            direccion: string;
            descripcion: string;
            estado: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            reservaId: number;
            notas: string | null;
            hora: Date | null;
            servicioId: number | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    })[]>;
    findByItinerario(itinerarioId: number): Promise<({
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            direccion: string;
            descripcion: string;
            estado: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            reservaId: number;
            notas: string | null;
            hora: Date | null;
            servicioId: number | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        itinerarioReservaId: number;
        lugarTuristicoId: number;
    })[]>;
    findByLugarTuristico(lugarTuristicoId: number): Promise<({
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            direccion: string;
            descripcion: string;
            estado: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            reservaId: number;
            notas: string | null;
            hora: Date | null;
            servicioId: number | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
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
