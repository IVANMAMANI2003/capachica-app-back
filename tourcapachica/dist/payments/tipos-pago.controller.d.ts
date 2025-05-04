import { TipoPagoService } from './tipos-pago.service';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
export declare class TipoPagoController {
    private readonly tipoPagoService;
    constructor(tipoPagoService: TipoPagoService);
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
            monto: import(".prisma/client/runtime/library").Decimal;
            pagoId: number;
            tipoPagoId: number;
            concepto: string;
            porcentajeImpuesto: import(".prisma/client/runtime/library").Decimal;
            cantidad: number;
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
    findOne(id: string): Promise<{
        pagoDetalles: {
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    update(id: string, updateTipoPagoDto: UpdateTipoPagoDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    remove(id: string): Promise<{
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
