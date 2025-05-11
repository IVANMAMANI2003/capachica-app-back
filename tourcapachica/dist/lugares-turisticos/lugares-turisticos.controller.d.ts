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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }>;
    markAsFavorite(lugarTuristicoId: number, req: any): Promise<{
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
    }>;
    unmarkAsFavorite(lugarTuristicoId: number, req: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getTopFavoritos(): Promise<({
        favoritosLugarTuristico: {
            id: number;
            usuarioId: number;
            createdAt: Date;
            updatedAt: Date;
            lugarTuristicoId: number;
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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    })[]>;
    countTotalFavoritos(): Promise<number>;
}
