import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        reserva: {
            moneda: string;
            estado: string;
            id: number;
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
        detalles: {
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        }[];
    } & {
        moneda: string;
        estado: string;
        id: number;
        reservaId: number;
        paymentGateway: string;
        transactionId: string;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        reserva: {
            moneda: string;
            estado: string;
            id: number;
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
        detalles: {
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        }[];
    } & {
        moneda: string;
        estado: string;
        id: number;
        reservaId: number;
        paymentGateway: string;
        transactionId: string;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        reserva: {
            moneda: string;
            estado: string;
            id: number;
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
        detalles: {
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        }[];
    } & {
        moneda: string;
        estado: string;
        id: number;
        reservaId: number;
        paymentGateway: string;
        transactionId: string;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByReservaId(reservaId: string): Promise<({
        detalles: ({
            tipoPago: {
                nombre: string;
                descripcion: string | null;
                activo: boolean;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                requiereVerificacion: boolean;
                comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
            };
        } & {
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        })[];
    } & {
        moneda: string;
        estado: string;
        id: number;
        reservaId: number;
        paymentGateway: string;
        transactionId: string;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<{
        reserva: {
            moneda: string;
            estado: string;
            id: number;
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
        detalles: ({
            tipoPago: {
                nombre: string;
                descripcion: string | null;
                activo: boolean;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                requiereVerificacion: boolean;
                comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
            };
        } & {
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        })[];
    } & {
        moneda: string;
        estado: string;
        id: number;
        reservaId: number;
        paymentGateway: string;
        transactionId: string;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        moneda: string;
        estado: string;
        id: number;
        reservaId: number;
        paymentGateway: string;
        transactionId: string;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        detalles: {
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        }[];
    } & {
        moneda: string;
        estado: string;
        id: number;
        reservaId: number;
        paymentGateway: string;
        transactionId: string;
        montoTotal: import(".prisma/client/runtime/library").Decimal;
        fechaPago: Date | null;
        datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
        metadata: import(".prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
