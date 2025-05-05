import { ItinerariosReservaService } from './itinerarios-reserva.service';
import { CreateItinerarioReservaDto } from './dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from './dto/update-itinerario-reserva.dto';
export declare class ItinerariosReservaController {
    private readonly itinerariosReservaService;
    constructor(itinerariosReservaService: ItinerariosReservaService);
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
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            moneda: string;
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
        notas: string | null;
        servicioId: number | null;
        hora: Date | null;
        fecha: Date;
        tipoEvento: string;
        duracion: number | null;
        reservaId: number;
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
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            moneda: string;
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
        notas: string | null;
        servicioId: number | null;
        hora: Date | null;
        fecha: Date;
        tipoEvento: string;
        duracion: number | null;
        reservaId: number;
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
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            moneda: string;
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
        notas: string | null;
        servicioId: number | null;
        hora: Date | null;
        fecha: Date;
        tipoEvento: string;
        duracion: number | null;
        reservaId: number;
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
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            moneda: string;
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
        notas: string | null;
        servicioId: number | null;
        hora: Date | null;
        fecha: Date;
        tipoEvento: string;
        duracion: number | null;
        reservaId: number;
    }>;
    remove(id: number): Promise<{
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
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            moneda: string;
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
        notas: string | null;
        servicioId: number | null;
        hora: Date | null;
        fecha: Date;
        tipoEvento: string;
        duracion: number | null;
        reservaId: number;
    })[]>;
}
