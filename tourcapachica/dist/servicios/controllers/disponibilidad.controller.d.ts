import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateDisponibilidadDto } from '@/paquetes-turisticos/dto/update-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
    create(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createBatch(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        id: number;
        servicioId: number;
        fechaInicio: Date;
        fechaFin: Date | null;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
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
    findByServicio(servicioId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateData: UpdateDisponibilidadDto): Promise<{
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
    remove(id: string): Promise<{
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
