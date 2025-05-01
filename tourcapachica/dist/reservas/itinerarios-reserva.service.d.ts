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
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            fechaInicio: Date;
            fechaFin: Date | null;
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            fechaInicio: Date;
            fechaFin: Date | null;
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            fechaInicio: Date;
            fechaFin: Date | null;
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    }>;
    update(id: number, updateItinerarioReservaDto: UpdateItinerarioReservaDto): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            fechaInicio: Date;
            fechaFin: Date | null;
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    findByReserva(reservaId: number): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            fechaInicio: Date;
            fechaFin: Date | null;
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    })[]>;
}
