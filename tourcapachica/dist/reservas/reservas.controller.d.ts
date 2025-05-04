import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { EstadoReserva } from './dto/create-reserva.dto';
export declare class ReservasController {
    private readonly reservasService;
    constructor(reservasService: ReservasService);
    create(createReservaDto: CreateReservaDto): Promise<{
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
        }[];
        pagos: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
        })[];
        pagos: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
        }[];
        pagos: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    }>;
    remove(id: number): Promise<{
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
        }[];
        pagos: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
        }[];
        pagos: {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
    } & {
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
    }>;
}
