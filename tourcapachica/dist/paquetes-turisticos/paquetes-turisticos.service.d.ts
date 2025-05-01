import { PrismaService } from '../prisma/prisma.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
export declare class PaquetesTuristicosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDisponibilidad(paqueteId: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        paqueteId: number;
    }>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        paqueteId: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        paqueteId: number;
    }>;
    getDisponibilidadesPaquete(paqueteId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        paqueteId: number;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        paqueteId: number;
    }>;
    create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            direccion: string | null;
            estado: string;
            tipo: string;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            direccion: string | null;
            estado: string;
            tipo: string;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            direccion: string | null;
            estado: string;
            tipo: string;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            direccion: string | null;
            estado: string;
            tipo: string;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
}
