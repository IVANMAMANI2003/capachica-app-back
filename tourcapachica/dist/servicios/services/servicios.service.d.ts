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
    create(createServicioDto: CreateServicioDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
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
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
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
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
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
    }>;
    findByEmprendimiento(emprendimientoId: number): Promise<({
        tipoServicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                estado: string;
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
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
        })[];
    } & {
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
    })[]>;
    update(id: number, updateServicioDto: UpdateServicioDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    updateEstado(id: number, estado: string): Promise<{
        tipoServicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                estado: string;
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
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
        })[];
    } & {
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
    }>;
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByTipoServicio(tipoServicioId: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        tipoServicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
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
    }[]>;
}
