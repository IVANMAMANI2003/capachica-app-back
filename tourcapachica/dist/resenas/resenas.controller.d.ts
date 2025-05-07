import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { FilterResenasDto } from './dto/filter-resenas.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
import { ResenasService } from './resenas.service';
export declare class ResenasController {
    private readonly resenasService;
    constructor(resenasService: ResenasService);
    create(createResenaDto: CreateResenaDto): Promise<{
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    findAll(filter: FilterResenasDto): Promise<{
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    update(id: string, updateResenaDto: UpdateResenaDto): Promise<{
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    promedio(servicioId: string): Promise<PromedioResponseDto>;
}
