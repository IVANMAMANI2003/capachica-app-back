import { TiposServicioService } from '../services/tipos-servicio.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
import { UpdateTipoServicioDto } from '../dto/update-tipo-servicio.dto';
export declare class TiposServicioController {
    private readonly tiposServicioService;
    constructor(tiposServicioService: TiposServicioService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTipoServicioDto: UpdateTipoServicioDto): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        requiereCupo: boolean;
    }>;
}
