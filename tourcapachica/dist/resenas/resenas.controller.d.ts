import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
import { ResenasService } from './resenas.service';
export declare class ResenasController {
    private readonly resenasService;
    constructor(resenasService: ResenasService);
    create(createResenaDto: CreateResenaDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }[]>;
    findByServicio(servicioId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    update(id: string, updateResenaDto: UpdateResenaDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    promedio(servicioId: string): Promise<PromedioResponseDto>;
}
