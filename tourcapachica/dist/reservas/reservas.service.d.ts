import { PrismaService } from '../prisma/prisma.service';
import { CreateReservaDto, EstadoReserva } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
export declare class ReservasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createReservaDto: CreateReservaDto): Promise<{
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    }>;
    findAll(): Promise<({
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
        itinerarios: ({
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
        })[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    }>;
    update(id: number, updateReservaDto: UpdateReservaDto): Promise<{
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    findByTurista(turistaId: number): Promise<({
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    })[]>;
    updateEstado(id: number, estado: EstadoReserva): Promise<{
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            moneda: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    }>;
}
