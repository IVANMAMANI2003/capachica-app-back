import { PrismaService } from '../prisma/prisma.service';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
export declare class ResenasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateResenaDto: UpdateResenaDto): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        servicioId: number;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    promedioCalificacionPorServicio(servicioId: number): Promise<PromedioResponseDto>;
}
