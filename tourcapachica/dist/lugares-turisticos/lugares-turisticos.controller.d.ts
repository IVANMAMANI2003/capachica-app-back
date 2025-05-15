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
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
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
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
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
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
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
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
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
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
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
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
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
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
    }>;
    unmarkAsFavorite(lugarTuristicoId: number, req: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getTopFavoritos(): Promise<({
        favoritosLugarTuristico: {
            usuarioId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            lugarTuristicoId: number;
        }[];
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
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
