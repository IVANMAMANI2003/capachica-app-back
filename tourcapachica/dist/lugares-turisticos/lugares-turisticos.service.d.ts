import { PrismaService } from '../prisma/prisma.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Prisma } from '@prisma/client';
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
        costoEntrada: Prisma.Decimal | null;
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
        costoEntrada: Prisma.Decimal | null;
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
        costoEntrada: Prisma.Decimal | null;
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
        costoEntrada: Prisma.Decimal | null;
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
        costoEntrada: Prisma.Decimal | null;
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
        costoEntrada: Prisma.Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }[]>;
    findFavorites(usuarioId: number): Promise<{
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
        costoEntrada: Prisma.Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }[]>;
    AddFavorite(usuarioId: number, lugarTuristicoId: number): Promise<{
        lugarTuristico: {
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
            costoEntrada: Prisma.Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
    } & {
        id: number;
        usuarioId: number;
        lugarTuristicoId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeFavorite(usuarioId: number, lugarTuristicoId: number): Promise<{
        message: string;
    }>;
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
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: Prisma.Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    })[]>;
    countTotalFavoritos(): Promise<number>;
}
