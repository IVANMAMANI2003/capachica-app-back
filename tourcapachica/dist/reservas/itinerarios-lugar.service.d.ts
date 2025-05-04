import { PrismaService } from '../prisma/prisma.service';
export declare class ItinerariosLugarService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(itinerarioId: number, lugarTuristicoId: number): Promise<{
        itinerarioReserva: {
            id: number;
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            notas: string | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            notas: string | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            notas: string | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
            descripcion: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number | null;
            notas: string | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
        };
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
