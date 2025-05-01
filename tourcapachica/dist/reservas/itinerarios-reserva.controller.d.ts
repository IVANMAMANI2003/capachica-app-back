import { ItinerariosReservaService } from './itinerarios-reserva.service';
import { CreateItinerarioReservaDto } from './dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from './dto/update-itinerario-reserva.dto';
export declare class ItinerariosReservaController {
    private readonly itinerariosReservaService;
    constructor(itinerariosReservaService: ItinerariosReservaService);
    create(createItinerarioReservaDto: CreateItinerarioReservaDto): Promise<{
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
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
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            moneda: string;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    }>;
    findAll(): Promise<({
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
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
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            moneda: string;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
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
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            moneda: string;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    }>;
    update(id: number, updateItinerarioReservaDto: UpdateItinerarioReservaDto): Promise<{
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
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
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            moneda: string;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    findByReserva(reservaId: number): Promise<({
        reserva: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
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
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        };
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            moneda: string;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
        itinerarioLugares: ({
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
        })[];
    } & {
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
    })[]>;
}
