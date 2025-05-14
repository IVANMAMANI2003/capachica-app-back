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
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
    }[]>;
    findOne(id: number, emprendimientoId?: number): Promise<{
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
    } & {
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
    })[]>;
    update(id: number, updateDto: UpdateServicioDto, emprendimientoId: number): Promise<{
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
        serviciosEmprendedores: {
            emprendimientoId: number;
        }[];
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
    }>;
    remove(id: number, emprendimientoId?: number): Promise<{
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
    }>;
    updateEstado(id: number, estado: string, emprendimientoId: number): Promise<{
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
                usuarioId: number;
                lugarTuristicoId: number | null;
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
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
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
    }>;
    createDisponibilidad(dto: CreateServicioDisponibilidadDto): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(list: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getDisponibilidad(servicioId: number): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fechaInicio: string): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
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
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            requiereCupo: boolean;
        };
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
    }[]>;
}
