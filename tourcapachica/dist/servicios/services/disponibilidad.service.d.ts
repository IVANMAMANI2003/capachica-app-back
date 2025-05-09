import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateData: UpdateServicioDisponibilidadDto): Promise<{
        servicio: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            tipoServicioId: number;
            nombre: string;
            descripcion: string | null;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
