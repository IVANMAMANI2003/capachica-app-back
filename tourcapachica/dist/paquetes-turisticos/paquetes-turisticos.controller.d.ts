import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
export declare class PaquetesTuristicosController {
    private readonly paquetesTuristicosService;
    constructor(paquetesTuristicosService: PaquetesTuristicosService);
    createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        notas: string | null;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        notas: string | null;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        cuposMaximos: number;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        notas: string | null;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        notas: string | null;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        notas: string | null;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
}
