import { PagoDetalleService } from './pago-detalle.service';
import { CreatePagoDetalleDto } from './dto/create-pago-detalle.dto';
import { UpdatePagoDetalleDto } from './dto/update-pago-detalle.dto';
export declare class PagoDetalleController {
    private readonly pagoDetalleService;
    constructor(pagoDetalleService: PagoDetalleService);
    create(createPagoDetalleDto: CreatePagoDetalleDto): Promise<{
        pago: {
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
        };
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
    }>;
    findAll(): Promise<({
        pago: {
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
        };
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
    })[]>;
    findOne(id: string): Promise<{
        pago: {
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
        };
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
    }>;
    findByPagoId(pagoId: string): Promise<({
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
    })[]>;
    update(id: string, updatePagoDetalleDto: UpdatePagoDetalleDto): Promise<{
        pago: {
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
        };
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
