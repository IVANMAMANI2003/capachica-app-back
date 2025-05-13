import { ServiciosService } from '../services/servicios.service';
import { CreateServicioPayloadDto } from '../dto/create-servicio.dto';
import { UpdateServicioPayloadDto } from '../dto/update-servicio.dto';
import { UpdateEstadoDto } from '../dto/update-estado.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(payload: CreateServicioPayloadDto, req: any): Promise<{
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
    }[]>;
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
    }>;
    update(id: string, dto: UpdateServicioPayloadDto, req: any): Promise<{
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
    }>;
    remove(id: string, req: any): Promise<{
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
                usuarioId: number;
                lugarTuristicoId: number;
                nombre: string;
                descripcion: string | null;
                tipo: string;
                direccion: string | null;
                latitud: number | null;
                longitud: number | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                estado: string;
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
    }[]>;
}
