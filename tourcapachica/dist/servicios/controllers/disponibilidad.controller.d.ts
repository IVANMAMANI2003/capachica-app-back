import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
    create(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }>;
    createBatch(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }[]>;
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
    findByServicio(servicioId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateData: Partial<CreateServicioDisponibilidadDto>): Promise<{
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
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        servicioId: number;
        fecha: Date;
    }>;
}
