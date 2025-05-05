import { PrismaService } from '../prisma/prisma.service';
import { CreatePagoDetalleDto } from './dto/create-pago-detalle.dto';
import { UpdatePagoDetalleDto } from './dto/update-pago-detalle.dto';
export declare class PagoDetalleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        concepto: string;
        monto: import(".prisma/client/runtime/library").Decimal;
        porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
        cantidad: number;
        tipoPagoId: number;
        pagoId: number;
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
        concepto: string;
        monto: import(".prisma/client/runtime/library").Decimal;
        porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
        cantidad: number;
        tipoPagoId: number;
        pagoId: number;
    })[]>;
    findOne(id: number): Promise<{
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
        concepto: string;
        monto: import(".prisma/client/runtime/library").Decimal;
        porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
        cantidad: number;
        tipoPagoId: number;
        pagoId: number;
    }>;
    findByPagoId(pagoId: number): Promise<({
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
        concepto: string;
        monto: import(".prisma/client/runtime/library").Decimal;
        porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
        cantidad: number;
        tipoPagoId: number;
        pagoId: number;
    })[]>;
    update(id: number, updatePagoDetalleDto: UpdatePagoDetalleDto): Promise<{
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
        concepto: string;
        monto: import(".prisma/client/runtime/library").Decimal;
        porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
        cantidad: number;
        tipoPagoId: number;
        pagoId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        concepto: string;
        monto: import(".prisma/client/runtime/library").Decimal;
        porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
        cantidad: number;
        tipoPagoId: number;
        pagoId: number;
    }>;
}
