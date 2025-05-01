import { TiposServicioService } from '../services/tipos-servicio.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
export declare class TiposServicioController {
    private readonly tiposServicioService;
    constructor(tiposServicioService: TiposServicioService);
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
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
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
    findOne(id: string): Promise<{
        servicios: {
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
        }[];
    } & {
        id: number;
        createdAt: Date;
        nombre: string;
        descripcion: string | null;
        imagenUrl: string;
        requiereCupo: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        nombre: string;
        descripcion: string | null;
        imagenUrl: string;
        requiereCupo: boolean;
    }>;
}
