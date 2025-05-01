import { PrismaService } from '../../prisma/prisma.service';
import { CreateDisponibilidadDto } from '../dto/create-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<({
        servicio: {
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
        };
    } & {
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
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
        };
    } & {
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
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
        };
    } & {
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: number, updateData: Partial<CreateDisponibilidadDto>): Promise<{
        servicio: {
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
        };
    } & {
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        servicioId: number;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
}
