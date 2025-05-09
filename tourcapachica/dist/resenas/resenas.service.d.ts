import { PrismaService } from '../prisma/prisma.service';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
export declare class ResenasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createResenaDto: any): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    update(id: number, updateResenaDto: UpdateResenaDto): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        usuarioId: number;
        calificacion: number;
        comentario: string | null;
    }>;
    promedioCalificacionPorServicio(servicioId: number): Promise<PromedioResponseDto>;
}
