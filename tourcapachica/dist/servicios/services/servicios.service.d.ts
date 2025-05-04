import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class ServiciosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(emprendimientoId: number, createServicioDto: CreateServicioDto): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
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
    findAll(): Promise<({
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
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
    findOne(id: number): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
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
    findByEmprendimiento(emprendimientoId: number): Promise<({
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
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
    update(id: number, updateServicioDto: UpdateServicioDto): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
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
    remove(id: number): Promise<{
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
    updateEstado(id: number, estado: string): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
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
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
}
