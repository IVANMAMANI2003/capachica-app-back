import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateDisponibilidadDto } from '../dto/create-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
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
    findByServicio(servicioId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateData: Partial<CreateDisponibilidadDto>): Promise<{
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
    remove(id: string): Promise<{
        id: number;
        servicioId: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fecha: Date;
    }>;
}
