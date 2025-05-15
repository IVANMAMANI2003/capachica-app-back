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
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
    }[]>;
    findOne(id: number, emprendimientoId?: number): Promise<{
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
    } & {
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
    })[]>;
    update(id: number, updateDto: UpdateServicioDto, emprendimientoId: number): Promise<{
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
    }>;
    remove(id: number, emprendimientoId?: number): Promise<{
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
    }>;
    updateEstado(id: number, estado: string, emprendimientoId: number): Promise<{
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
                usuarioId: number;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
    }>;
    createDisponibilidad(dto: CreateServicioDisponibilidadDto): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(list: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getDisponibilidad(servicioId: number): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fechaInicio: string): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
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
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
        };
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
    }[]>;
}
