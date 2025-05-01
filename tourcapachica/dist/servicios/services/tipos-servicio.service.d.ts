import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
export declare class TiposServicioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTipoServicioDto: CreateTipoServicioDto): Promise<{
        id: number;
        createdAt: Date;
        nombre: string;
        descripcion: string | null;
        imagenUrl: string;
        requiereCupo: boolean;
    }>;
    findAll(): Promise<({
        servicios: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            moneda: string;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        }[];
    } & {
        id: number;
        createdAt: Date;
        nombre: string;
        descripcion: string | null;
        imagenUrl: string;
        requiereCupo: boolean;
    })[]>;
    findOne(id: number): Promise<{
        servicios: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            moneda: string;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        }[];
    } & {
        id: number;
        createdAt: Date;
        nombre: string;
        descripcion: string | null;
        imagenUrl: string;
        requiereCupo: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        nombre: string;
        descripcion: string | null;
        imagenUrl: string;
        requiereCupo: boolean;
    }>;
}
