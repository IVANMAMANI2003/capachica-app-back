import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
export declare class ServiciosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(emprendimientoId: number, createServicioDto: CreateServicioDto): Promise<{
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                direccion: string | null;
                usuarioId: number;
                descripcion: string | null;
                estado: string;
                tipo: string;
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
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        moneda: string;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    findAll(): Promise<({
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                direccion: string | null;
                usuarioId: number;
                descripcion: string | null;
                estado: string;
                tipo: string;
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
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        moneda: string;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    })[]>;
    findOne(id: number): Promise<{
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                direccion: string | null;
                usuarioId: number;
                descripcion: string | null;
                estado: string;
                tipo: string;
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
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        moneda: string;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    findByEmprendimiento(emprendimientoId: number): Promise<({
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                direccion: string | null;
                usuarioId: number;
                descripcion: string | null;
                estado: string;
                tipo: string;
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
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        moneda: string;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    })[]>;
    update(id: number, updateServicioDto: UpdateServicioDto): Promise<{
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                direccion: string | null;
                usuarioId: number;
                descripcion: string | null;
                estado: string;
                tipo: string;
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
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        moneda: string;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        moneda: string;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        tipoServicio: {
            id: number;
            createdAt: Date;
            nombre: string;
            descripcion: string | null;
            imagenUrl: string;
            requiereCupo: boolean;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                direccion: string | null;
                usuarioId: number;
                descripcion: string | null;
                estado: string;
                tipo: string;
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
            servicioId: number;
            emprendimientoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        moneda: string;
        estado: string;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
    }>;
}
