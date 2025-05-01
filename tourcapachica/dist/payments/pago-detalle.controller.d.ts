import { PagoDetalleService } from './pago-detalle.service';
import { CreatePagoDetalleDto } from './dto/create-pago-detalle.dto';
import { UpdatePagoDetalleDto } from './dto/update-pago-detalle.dto';
export declare class PagoDetalleController {
    private readonly pagoDetalleService;
    constructor(pagoDetalleService: PagoDetalleService);
    create(createPagoDetalleDto: CreatePagoDetalleDto): Promise<{
        pago: {
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
        };
        tipoPago: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            activo: boolean;
            requiereVerificacion: boolean;
            comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
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
    }>;
    findAll(): Promise<({
        pago: {
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
        };
        tipoPago: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            activo: boolean;
            requiereVerificacion: boolean;
            comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
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
    })[]>;
    findOne(id: string): Promise<{
        pago: {
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
        };
        tipoPago: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            activo: boolean;
            requiereVerificacion: boolean;
            comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
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
    }>;
    findByPagoId(pagoId: string): Promise<({
        tipoPago: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            activo: boolean;
            requiereVerificacion: boolean;
            comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
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
    })[]>;
    update(id: string, updatePagoDetalleDto: UpdatePagoDetalleDto): Promise<{
        pago: {
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
        };
        tipoPago: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            activo: boolean;
            requiereVerificacion: boolean;
            comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
