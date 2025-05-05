import { PrismaService } from '../../prisma/prisma.service';
import { SupabaseService } from '../../supabase/supabase.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class ServiciosService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createServicioDto: CreateServicioDto, files?: Express.Multer.File[]): Promise<{
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
    findOne(id: number): Promise<{
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
    findByEmprendimiento(emprendimientoId: number): Promise<({
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
    update(id: number, updateServicioDto: UpdateServicioDto, files?: Express.Multer.File[]): Promise<{
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
    remove(id: number): Promise<{
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
    updateEstado(id: number, estado: string): Promise<{
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
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findByTipoServicio(tipoServicioId: number): Promise<{
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
