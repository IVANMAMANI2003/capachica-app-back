import { ItinerariosReservaService } from './itinerarios-reserva.service';
import { CreateItinerarioReservaDto } from './dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from './dto/update-itinerario-reserva.dto';
export declare class ItinerariosReservaController {
    private readonly itinerariosReservaService;
    constructor(itinerariosReservaService: ItinerariosReservaService);
    create(createItinerarioReservaDto: CreateItinerarioReservaDto): Promise<{
        servicio: {
            id: number;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
        reserva: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            hora: string | null;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            notas: string | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
        reserva: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            hora: string | null;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            notas: string | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
        reserva: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            hora: string | null;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            notas: string | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    }>;
    update(id: number, updateItinerarioReservaDto: UpdateItinerarioReservaDto): Promise<{
        servicio: {
            id: number;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
        reserva: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            hora: string | null;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            notas: string | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    findByReserva(reservaId: number): Promise<({
        servicio: {
            id: number;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
        reserva: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            hora: string | null;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            notas: string | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        itinerarioLugares: ({
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
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            itinerarioReservaId: number;
            lugarTuristicoId: number;
        })[];
    } & {
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
    })[]>;
}
