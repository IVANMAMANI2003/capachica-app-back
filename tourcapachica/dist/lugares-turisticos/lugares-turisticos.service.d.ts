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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        direccion: string;
        coordenadas: string;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        direccion: string;
        coordenadas: string;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
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
        descripcion: string;
        estado: string;
        direccion: string;
        coordenadas: string;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
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
        descripcion: string;
        estado: string;
        direccion: string;
        coordenadas: string;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        direccion: string;
        coordenadas: string;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }>;
    findDestacados(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        direccion: string;
        coordenadas: string;
        esDestacado: boolean;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
    }[]>;
}
