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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }[]>;
    findDestacados(): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    markAsFavorite(lugarTuristicoId: number, req: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        lugarTuristicoId: number;
    }>;
    unmarkAsFavorite(lugarTuristicoId: number, req: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getTopFavoritos(): Promise<({
        favoritosLugarTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            lugarTuristicoId: number;
        }[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        direccion: string;
        latitud: number | null;
        longitud: number | null;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    })[]>;
    countTotalFavoritos(): Promise<number>;
}
