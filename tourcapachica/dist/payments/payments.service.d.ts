import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ReservasService } from '../reservas/reservas.service';
export declare class PaymentsService {
    private prisma;
    private reservasService;
    constructor(prisma: PrismaService, reservasService: ReservasService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        reserva: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
        detalles: {
            id: number;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        moneda: string;
        reservaId: number;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
    }>;
    findAll(): Promise<({
        reserva: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
        detalles: {
            id: number;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        moneda: string;
        reservaId: number;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
    })[]>;
    findOne(id: number): Promise<{
        reserva: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
        detalles: {
            id: number;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        moneda: string;
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
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
                activo: boolean;
                requiereVerificacion: boolean;
                comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
            };
        } & {
            id: number;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        })[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        moneda: string;
        reservaId: number;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
    })[]>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<{
        reserva: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
        detalles: ({
            tipoPago: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
                activo: boolean;
                requiereVerificacion: boolean;
                comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
            };
        } & {
            id: number;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        })[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        moneda: string;
        reservaId: number;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        moneda: string;
        reservaId: number;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        detalles: {
            id: number;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        moneda: string;
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
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
        }[];
        reserva: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
    }>;
}
