import { PrismaService } from '../prisma/prisma.service';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
export declare class ResenasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createResenaDto: any): Promise<{
        usuarioId: number | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    findAll(): Promise<{
        usuarioId: number | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }[]>;
    findOne(id: number): Promise<{
        usuarioId: number | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    update(id: number, updateResenaDto: UpdateResenaDto): Promise<{
        usuarioId: number | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        usuarioId: number | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    remove(id: number): Promise<{
        usuarioId: number | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    promedioCalificacionPorServicio(servicioId: number): Promise<PromedioResponseDto>;
}
