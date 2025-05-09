import { PrismaService } from '../prisma/prisma.service';
import { CreateItinerarioReservaDto } from './dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from './dto/update-itinerario-reserva.dto';
export declare class ItinerariosReservaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createItinerarioReservaDto: CreateItinerarioReservaDto): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date | null;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            hora: string | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date | null;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            hora: string | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date | null;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            hora: string | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    }>;
    update(id: number, updateItinerarioReservaDto: UpdateItinerarioReservaDto): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date | null;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            hora: string | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    findByReserva(reservaId: number): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date | null;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            hora: string | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    })[]>;
}
