import { PrismaService } from '../prisma/prisma.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
export declare class SlidersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSliderDto: CreateSliderDto): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, updateSliderDto: UpdateSliderDto): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
