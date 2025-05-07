import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
    create(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    createBatch(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
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
    findByServicio(servicioId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateData: Partial<CreateServicioDisponibilidadDto>): Promise<{
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
    remove(id: string): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
    }>;
}
