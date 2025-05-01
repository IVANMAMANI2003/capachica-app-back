import { PrismaService } from '../prisma/prisma.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
export declare class ServiciosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServicioDto: CreateServicioDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    update(id: number, updateServicioDto: UpdateServicioDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
}
