import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: number, updateData: Partial<CreateServicioDisponibilidadDto>): Promise<{
        servicio: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
}
