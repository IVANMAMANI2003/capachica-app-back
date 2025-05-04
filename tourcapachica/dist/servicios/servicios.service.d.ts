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
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        tipoServicioId: number;
        nombre: string;
        descripcion: string | null;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
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
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        tipoServicioId: number;
        nombre: string;
        descripcion: string | null;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
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
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        tipoServicioId: number;
        nombre: string;
        descripcion: string | null;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
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
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        id: number;
        tipoServicioId: number;
        nombre: string;
        descripcion: string | null;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipoServicioId: number;
        nombre: string;
        descripcion: string | null;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
