import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
import { ResenasService } from './resenas.service';
import { UpdateEstadoDto } from './dto/update-estado.dto';
export declare class ResenasController {
    private readonly resenasService;
    constructor(resenasService: ResenasService);
    create(createResenaDto: CreateResenaDto, req: any): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    findAll(): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }[]>;
    findByServicio(servicioId: string): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }[]>;
    findOne(id: string): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    partialUpdate(id: string, updateResenaDto: UpdateResenaDto): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    remove(id: string): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    promedio(servicioId: string): Promise<PromedioResponseDto>;
    updateEstado(id: string, updateEstadoDto: UpdateEstadoDto): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
}
