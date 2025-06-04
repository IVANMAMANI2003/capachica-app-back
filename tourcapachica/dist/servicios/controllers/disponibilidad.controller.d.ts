import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
    create(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
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
    createBatch(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
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
    findByServicio(servicioId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateData: UpdateServicioDisponibilidadDto): Promise<{
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
    remove(id: string): Promise<{
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
