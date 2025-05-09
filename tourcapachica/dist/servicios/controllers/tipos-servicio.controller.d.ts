import { TiposServicioService } from '../services/tipos-servicio.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
import { UpdateTipoServicioDto } from '../dto/update-tipo-servicio.dto';
export declare class TiposServicioController {
    private readonly tiposServicioService;
    constructor(tiposServicioService: TiposServicioService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTipoServicioDto: UpdateTipoServicioDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        requiereCupo: boolean;
    }>;
}
