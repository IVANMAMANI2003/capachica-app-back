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
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(filter: FilterResenasDto): Promise<{
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
    update(id: string, updateResenaDto: UpdateResenaDto): Promise<{
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
}
