import { TiposServicioService } from '../services/tipos-servicio.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
import { UpdateTipoServicioDto } from '../dto/update-tipo-servicio.dto';
export declare class TiposServicioController {
    private readonly tiposServicioService;
    constructor(tiposServicioService: TiposServicioService);
    create(createTipoServicioDto: CreateTipoServicioDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
    findAll(): Promise<({
        servicios: {
            id: number;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        }[];
    } & {
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    })[]>;
    findOne(id: string): Promise<{
        servicios: {
            id: number;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        }[];
    } & {
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
    update(id: string, updateTipoServicioDto: UpdateTipoServicioDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
}
