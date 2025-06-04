import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getDisponibilidad(servicioId: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    findAll(): Promise<({
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    update(id: number, updateData: UpdateServicioDisponibilidadDto): Promise<{
        servicio: {
            id: number;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
}
