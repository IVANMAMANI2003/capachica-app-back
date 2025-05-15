import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidad(servicioId: number): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<({
        servicio: {
            moneda: string;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
            moneda: string;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            moneda: string;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: number, updateData: UpdateServicioDisponibilidadDto): Promise<{
        servicio: {
            moneda: string;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
        };
    } & {
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        fechaInicio: Date | null;
        fechaFin: Date | null;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
}
