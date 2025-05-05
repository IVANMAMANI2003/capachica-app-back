import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(createServicioDto: CreateServicioDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }[]>;
    findByEmprendimiento(emprendimientoId: string): Promise<({
        tipoServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
                usuarioId: number;
                tipo: string;
                direccion: string | null;
                coordenadas: string | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                fechaAprobacion: Date | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
            servicioId: number;
        })[];
    } & {
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    })[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    update(id: string, updateServicioDto: UpdateServicioDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        tipoServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
                usuarioId: number;
                tipo: string;
                direccion: string | null;
                coordenadas: string | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                fechaAprobacion: Date | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
            servicioId: number;
        })[];
    } & {
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    findByTipoServicio(tipoServicioId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }[]>;
}
