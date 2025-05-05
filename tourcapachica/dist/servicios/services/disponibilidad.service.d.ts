import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }[]>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }>;
    update(id: number, updateData: Partial<CreateServicioDisponibilidadDto>): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }>;
}
