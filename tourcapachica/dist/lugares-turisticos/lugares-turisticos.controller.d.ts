import { LugaresTuristicosService } from './lugares-turisticos.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';
export declare class LugaresTuristicosController {
    private readonly lugaresTuristicosService;
    constructor(lugaresTuristicosService: LugaresTuristicosService);
    create(createLugarTuristicoDto: CreateLugarTuristicoDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
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
        coordenadas: string;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        coordenadas: string;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }[]>;
    findDestacados(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        coordenadas: string;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        coordenadas: string;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }>;
    update(id: string, updateLugarTuristicoDto: UpdateLugarTuristicoDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
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
        coordenadas: string;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string;
        descripcion: string;
        estado: string;
        coordenadas: string;
        horarioApertura: Date | null;
        horarioCierre: Date | null;
        costoEntrada: import(".prisma/client/runtime/library").Decimal | null;
        recomendaciones: string | null;
        restricciones: string | null;
        esDestacado: boolean;
    }>;
}
