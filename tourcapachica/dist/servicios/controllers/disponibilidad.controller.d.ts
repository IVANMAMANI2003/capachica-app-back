import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateServicioDisponibilidadDto } from '../dto/update-servicio-disponibilidad.dto';
export declare class DisponibilidadController {
    private readonly disponibilidadService;
    constructor(disponibilidadService: DisponibilidadService);
    create(createDisponibilidadDto: CreateServicioDisponibilidadDto): Promise<{
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
    createBatch(disponibilidades: CreateServicioDisponibilidadDto[]): Promise<{
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
    findByServicio(servicioId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateData: UpdateServicioDisponibilidadDto): Promise<{
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
    remove(id: string): Promise<{
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
