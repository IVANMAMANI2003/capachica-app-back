import { ItinerariosLugarService } from './itinerarios-lugar.service';
export declare class ItinerariosLugarController {
    private readonly itinerariosLugarService;
    constructor(itinerariosLugarService: ItinerariosLugarService);
    create(itinerarioId: number, lugarTuristicoId: number): Promise<{
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
