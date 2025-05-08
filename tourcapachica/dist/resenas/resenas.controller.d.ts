import { CreateResenaDto } from './dto/create-resena.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
import { ResenasService } from './resenas.service';
import { UpdateEstadoDto } from './dto/update-estado.dto';
export declare class ResenasController {
    private readonly resenasService;
    constructor(resenasService: ResenasService);
    create(createResenaDto: CreateResenaDto): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findByServicio(servicioId: string): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    partialUpdate(id: string, updateResenaDto: {
        calificacion?: number;
        comentario?: string;
    }): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    promedio(servicioId: string): Promise<PromedioResponseDto>;
    updateEstado(id: string, updateEstadoDto: UpdateEstadoDto): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
