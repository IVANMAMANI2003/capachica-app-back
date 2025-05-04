import { PrismaService } from '../../prisma/prisma.service';
import { CreateDisponibilidadDto } from '../dto/create-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fecha: Date;
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fecha: Date;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fecha: Date;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fecha: Date;
    }>;
    update(id: number, updateData: Partial<CreateDisponibilidadDto>): Promise<{
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fecha: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        servicioId: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fecha: Date;
    }>;
}
