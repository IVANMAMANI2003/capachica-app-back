import { PrismaService } from '../prisma/prisma.service';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
export declare class ResenasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createResenaDto: any): Promise<{
        usuarioId: number;
        id: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        usuarioId: number;
        id: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        usuarioId: number;
        id: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateResenaDto: UpdateResenaDto): Promise<{
        usuarioId: number;
        id: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        usuarioId: number;
        id: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        usuarioId: number;
        id: number;
        servicioId: number;
        calificacion: number;
        comentario: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    promedioCalificacionPorServicio(servicioId: number): Promise<PromedioResponseDto>;
}
