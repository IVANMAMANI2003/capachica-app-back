import { TipoPagoService } from './tipos-pago.service';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
export declare class TipoPagoController {
    private readonly tipoPagoService;
    constructor(tipoPagoService: TipoPagoService);
    create(createTipoPagoDto: CreateTipoPagoDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    findAll(): Promise<({
        pagoDetalles: {
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
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    })[]>;
    findOne(id: string): Promise<{
        pagoDetalles: {
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
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    update(id: string, updateTipoPagoDto: UpdateTipoPagoDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        requiereVerificacion: boolean;
        comisionPorcentaje: import(".prisma/client/runtime/library").Decimal;
    }>;
}
