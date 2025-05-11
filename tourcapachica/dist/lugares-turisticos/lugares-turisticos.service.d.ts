import { PrismaService } from '../prisma/prisma.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';
import { SupabaseService } from '../supabase/supabase.service';
export declare class LugaresTuristicosService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    private readonly BUCKET_NAME;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
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
    findOne(id: number): Promise<{
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
    update(id: number, updateLugarTuristicoDto: UpdateLugarTuristicoDto): Promise<{
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
    remove(id: number): Promise<{
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
    markAsFavorite(usuarioId: number, lugarTuristicoId: number): Promise<{
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        lugarTuristicoId: number;
    }>;
    unmarkAsFavorite(usuarioId: number, lugarTuristicoId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
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
