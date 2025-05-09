import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { EstadoReserva } from './dto/create-reserva.dto';
export declare class ReservasController {
    private readonly reservasService;
    constructor(reservasService: ReservasService);
    create(createReservaDto: CreateReservaDto): Promise<{
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
    } & {
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
    }>;
    findAll(): Promise<({
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        itinerarios: ({
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
        })[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
    } & {
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
    }>;
    update(id: number, updateReservaDto: UpdateReservaDto): Promise<{
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    findByTurista(turistaId: number): Promise<({
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
    } & {
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
    })[]>;
    updateEstado(id: number, estado: EstadoReserva): Promise<{
        itinerarios: {
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
        }[];
        pagos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            reservaId: number;
            montoTotal: import(".prisma/client/runtime/library").Decimal;
            fechaPago: Date | null;
            datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
            metadata: import(".prisma/client/runtime/library").JsonValue | null;
        }[];
        turista: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
        };
    } & {
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
    }>;
}
