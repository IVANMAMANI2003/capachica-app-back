import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';
export declare class DisponibilidadService {
    private prisma;
    constructor(prisma: PrismaService);
    createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidad(servicioId: number): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    getDisponibilidadByFecha(servicioId: number, fecha: string): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<({
        servicio: {
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            id: number;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findByServicio(servicioId: number): Promise<({
        servicio: {
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            id: number;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    findOne(id: number): Promise<{
        servicio: {
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            id: number;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: number, updateData: UpdateServicioDisponibilidadDto): Promise<{
        servicio: {
            nombre: string;
            descripcion: string | null;
            latitud: number | null;
            longitud: number | null;
            estado: string;
            id: number;
            tipoServicioId: number;
            precioBase: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        notas: string | null;
        servicioId: number;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
}
