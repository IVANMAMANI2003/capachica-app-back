import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
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
        detalles: {
            id: number;
            descripcion: string | null;
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
    }>;
    findAll(): Promise<({
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
        detalles: {
            id: number;
            descripcion: string | null;
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
    })[]>;
    findOne(id: string): Promise<{
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
        detalles: {
            id: number;
            descripcion: string | null;
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
    }>;
    findByReservaId(reservaId: string): Promise<({
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
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        })[];
    } & {
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
    })[]>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<{
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
            concepto: string;
            monto: import(".prisma/client/runtime/library").Decimal;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
            tipoPagoId: number;
            pagoId: number;
        })[];
    } & {
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    updateEstado(id: string, estado: string): Promise<{
        detalles: {
            id: number;
            descripcion: string | null;
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
    }>;
}
