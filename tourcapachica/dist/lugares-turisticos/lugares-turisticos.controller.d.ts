import { LugaresTuristicosService } from './lugares-turisticos.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';
export declare class LugaresTuristicosController {
    private readonly lugaresTuristicosService;
    constructor(lugaresTuristicosService: LugaresTuristicosService);
    create(createLugarTuristicoDto: CreateLugarTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        horarioCierre: Date | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        horarioCierre: Date | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }[]>;
    findDestacados(): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        horarioCierre: Date | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        horarioCierre: Date | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    update(id: string, updateLugarTuristicoDto: UpdateLugarTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        horarioCierre: Date | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        horarioCierre: Date | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    markAsFavorite(lugarTuristicoId: number, req: any): Promise<{
        id: number;
        usuarioId: number;
        lugarTuristicoId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    unmarkAsFavorite(lugarTuristicoId: number, req: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getTopFavoritos(): Promise<({
        favoritosLugarTuristico: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        horarioCierre: Date | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    })[]>;
    countTotalFavoritos(): Promise<number>;
}
