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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: Prisma.Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: Prisma.Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }>;
    findDestacados(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            direccion: string;
            descripcion: string;
            estado: string;
            latitud: number | null;
            longitud: number | null;
            horarioApertura: Date | null;
            horarioCierre: Date | null;
            costoEntrada: Prisma.Decimal | null;
            recomendaciones: string | null;
            restricciones: string | null;
            esDestacado: boolean;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        lugarTuristicoId: number;
    }>;
    removeFavorite(usuarioId: number, lugarTuristicoId: number): Promise<{
        message: string;
    }>;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        latitud: number | null;
        longitud: number | null;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: Prisma.Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    })[]>;
    countTotalFavoritos(): Promise<number>;
}
