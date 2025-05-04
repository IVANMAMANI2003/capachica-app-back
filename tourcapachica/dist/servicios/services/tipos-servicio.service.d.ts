import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
export declare class TiposServicioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTipoServicioDto: CreateTipoServicioDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        servicios: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
        createdAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        servicios: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
        createdAt: Date;
    }>;
}
