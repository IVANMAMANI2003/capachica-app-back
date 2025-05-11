import { PrismaService } from '../prisma/prisma.service';
export declare class ItinerariosLugarService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(itinerarioId: number, lugarTuristicoId: number): Promise<{
        lugarTuristico: {
            id: number;
            nombre: string;
            descripcion: string;
            direccion: string;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            horarioCierre: Date | null;
            servicioId: number | null;
            notas: string | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
        itinerarioReservaId: number;
    }>;
    findAll(): Promise<({
        lugarTuristico: {
            id: number;
            nombre: string;
            descripcion: string;
            direccion: string;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            horarioCierre: Date | null;
            servicioId: number | null;
            notas: string | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
        itinerarioReservaId: number;
    })[]>;
    findByItinerario(itinerarioId: number): Promise<({
        lugarTuristico: {
            id: number;
            nombre: string;
            descripcion: string;
            direccion: string;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            horarioCierre: Date | null;
            servicioId: number | null;
            notas: string | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
        itinerarioReservaId: number;
    })[]>;
    findByLugarTuristico(lugarTuristicoId: number): Promise<({
        lugarTuristico: {
            id: number;
            nombre: string;
            descripcion: string;
            direccion: string;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            horarioCierre: Date | null;
            servicioId: number | null;
            notas: string | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
        itinerarioReservaId: number;
    })[]>;
    remove(itinerarioId: number, lugarTuristicoId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
        itinerarioReservaId: number;
    }>;
    removeByItinerario(itinerarioId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
