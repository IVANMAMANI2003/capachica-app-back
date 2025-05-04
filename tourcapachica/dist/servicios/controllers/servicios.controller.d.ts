import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(emprendimientoId: string, createServicioDto: CreateServicioDto): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
            createdAt: Date;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                estado: string;
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
            createdAt: Date;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                estado: string;
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        updatedAt: Date;
    })[]>;
    findByEmprendimiento(emprendimientoId: string): Promise<({
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
            createdAt: Date;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                estado: string;
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
            createdAt: Date;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                estado: string;
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        updatedAt: Date;
    }>;
    update(id: string, updateServicioDto: UpdateServicioDto): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
            createdAt: Date;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                estado: string;
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        updatedAt: Date;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        tipoServicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            requiereCupo: boolean;
            createdAt: Date;
        };
        serviciosEmprendedores: ({
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                estado: string;
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
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        tipoServicioId: number;
        precioBase: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        detallesServicio: import(".prisma/client/runtime/library").JsonValue;
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
    getDisponibilidad(servicioId: string): Promise<{
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: string, fecha: string): Promise<{
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
}
