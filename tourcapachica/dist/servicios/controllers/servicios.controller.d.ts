import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { UpdateEstadoDto } from '../dto/update-estado.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(createServicioDto: CreateServicioDto, req: any): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
            url: string;
        }[];
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
    findMine(req: any): Promise<({
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                usuarioId: number;
                tipo: string;
                direccion: string | null;
                coordenadas: string | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                fechaAprobacion: Date | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
            servicioId: number;
        })[];
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
    update(id: string, dto: UpdateServicioDto, req: any): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
    remove(id: string, req: any): Promise<{
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
    updateEstado(id: string, updateEstadoDto: UpdateEstadoDto, req: any): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                usuarioId: number;
                tipo: string;
                direccion: string | null;
                coordenadas: string | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                fechaAprobacion: Date | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
            servicioId: number;
        })[];
    } & {
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
    findByTipoServicio(tipoServicioId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
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
}
