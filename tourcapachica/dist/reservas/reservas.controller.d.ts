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
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
    }>;
    remove(id: number): Promise<{
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
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
            notas: string | null;
            servicioId: number | null;
            hora: Date | null;
            fecha: Date;
            tipoEvento: string;
            duracion: number | null;
            reservaId: number;
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
    }>;
}
