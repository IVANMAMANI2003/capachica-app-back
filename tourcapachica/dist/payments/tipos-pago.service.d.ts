import { PrismaService } from '../prisma/prisma.service';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
export declare class TipoPagoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createTipoPagoDto: CreateTipoPagoDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    findAll(): Promise<({
        pagoDetalles: {
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    })[]>;
    findOne(id: number): Promise<{
        pagoDetalles: {
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    update(id: number, updateTipoPagoDto: UpdateTipoPagoDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
}
