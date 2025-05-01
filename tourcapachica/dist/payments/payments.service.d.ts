import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ReservasService } from '../reservas/reservas.service';
export declare class PaymentsService {
    private prisma;
    private reservasService;
    constructor(prisma: PrismaService, reservasService: ReservasService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        detalles: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
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
    } & {
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
    }>;
    findAll(): Promise<({
        detalles: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
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
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        detalles: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
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
    } & {
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
    }>;
    findByReservaId(reservaId: number): Promise<({
        detalles: ({
            tipoPago: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                requiereVerificacion: boolean;
                comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
                activo: boolean;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        })[];
    } & {
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
    })[]>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<{
        detalles: ({
            tipoPago: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                requiereVerificacion: boolean;
                comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
                activo: boolean;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        })[];
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
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    updateEstado(id: number, estado: string): Promise<{
        detalles: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
    } & {
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
    }>;
    generateReceipt(id: number): Promise<{
        numeroRecibo: string;
        fecha: Date;
        monto: import(".prisma/client/runtime/library").Decimal;
        detalles: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
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
    }>;
}
