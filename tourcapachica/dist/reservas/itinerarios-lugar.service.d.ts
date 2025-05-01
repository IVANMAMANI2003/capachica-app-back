import { PrismaService } from '../prisma/prisma.service';
export declare class ItinerariosLugarService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(itinerarioId: number, lugarTuristicoId: number): Promise<{
        lugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            direccion: string;
            estado: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            servicioId: number | null;
            fecha: Date;
            notas: string | null;
            reservaId: number;
            hora: Date | null;
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
            descripcion: string;
            direccion: string;
            estado: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            servicioId: number | null;
            fecha: Date;
            notas: string | null;
            reservaId: number;
            hora: Date | null;
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
            descripcion: string;
            direccion: string;
            estado: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            servicioId: number | null;
            fecha: Date;
            notas: string | null;
            reservaId: number;
            hora: Date | null;
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
            descripcion: string;
            direccion: string;
            estado: string;
            coordenadas: string;
            esDestacado: boolean;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
        };
        itinerarioReserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            servicioId: number | null;
            fecha: Date;
            notas: string | null;
            reservaId: number;
            hora: Date | null;
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
