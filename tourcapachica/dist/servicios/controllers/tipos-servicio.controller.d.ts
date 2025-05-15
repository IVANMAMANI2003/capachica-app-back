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
    findOne(id: string): Promise<{
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
