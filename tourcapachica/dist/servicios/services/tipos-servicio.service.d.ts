import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
export declare class TiposServicioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTipoServicioDto: CreateTipoServicioDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
    }>;
    findAll(): Promise<({
        servicios: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
    })[]>;
    findOne(id: number): Promise<{
        servicios: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
    }>;
    update(id: number, updateTipoServicioDto: CreateTipoServicioDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
    }>;
}
