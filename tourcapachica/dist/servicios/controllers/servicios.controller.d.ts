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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
        id: number;
        moneda: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
        id: number;
        moneda: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
        id: number;
        moneda: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
        id: number;
        moneda: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
        latitud: number | null;
        longitud: number | null;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    remove(id: string, req: any): Promise<{
        id: number;
        moneda: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
        latitud: number | null;
        longitud: number | null;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    updateEstado(id: string, updateEstadoDto: UpdateEstadoDto, req: any): Promise<{
        tipoServicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                usuarioId: number;
                descripcion: string | null;
                nombre: string;
                lugarTuristicoId: number | null;
                tipo: string;
                direccion: string | null;
                latitud: number | null;
                longitud: number | null;
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
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
        id: number;
        moneda: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
            requiereCupo: boolean;
        };
        id: number;
        moneda: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
        latitud: number | null;
        longitud: number | null;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }[]>;
}
