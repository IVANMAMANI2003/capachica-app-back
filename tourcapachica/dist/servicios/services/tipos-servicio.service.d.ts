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
            moneda: string;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
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
            moneda: string;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
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
