import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
export declare class TiposServicioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTipoServicioDto: CreateTipoServicioDto): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
    findAll(): Promise<({
        servicios: {
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            id: number;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    })[]>;
    findOne(id: number): Promise<{
        servicios: {
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            id: number;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
    update(id: number, updateTipoServicioDto: CreateTipoServicioDto): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
}
