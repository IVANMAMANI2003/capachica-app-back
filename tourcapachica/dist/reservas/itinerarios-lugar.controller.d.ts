import { ItinerariosLugarService } from './itinerarios-lugar.service';
export declare class ItinerariosLugarController {
    private readonly itinerariosLugarService;
    constructor(itinerariosLugarService: ItinerariosLugarService);
    create(itinerarioId: number, lugarTuristicoId: number): Promise<{
        lugarTuristico: {
            id: number;
            nombre: string;
            descripcion: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            direccion: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            esDestacado: boolean;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            fecha: Date;
            hora: Date | null;
            notas: string | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
            nombre: string;
            descripcion: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            direccion: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            esDestacado: boolean;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            fecha: Date;
            hora: Date | null;
            notas: string | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
            nombre: string;
            descripcion: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            direccion: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            esDestacado: boolean;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            fecha: Date;
            hora: Date | null;
            notas: string | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
            nombre: string;
            descripcion: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            direccion: string;
            coordenadas: string;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            esDestacado: boolean;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            fecha: Date;
            hora: Date | null;
            notas: string | null;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
