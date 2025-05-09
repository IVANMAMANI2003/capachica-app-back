import { PrismaService } from '../../prisma/prisma.service';
import { SupabaseService } from '../../supabase/supabase.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class ServiciosService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    private readonly BUCKET_NAME;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createServicioDto: CreateServicioDto, emprendimientoId: number): Promise<{
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
    findOne(id: number): Promise<{
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
    findByEmprendimiento(emprendimientoId: number): Promise<({
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
    update(id: number, updateDto: UpdateServicioDto, emprendimientoId: number): Promise<{
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
    remove(id: number, emprendimientoId: number): Promise<{
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
    updateEstado(id: number, estado: string, emprendimientoId: number): Promise<{
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
    createDisponibilidad(dto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(list: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fechaInicio: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findByTipoServicio(tipoServicioId: number): Promise<{
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
