import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
    create(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
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
    createBatch(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
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
    findByServicio(servicioId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateData: UpdateServicioDisponibilidadDto): Promise<{
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
    remove(id: string): Promise<{
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
