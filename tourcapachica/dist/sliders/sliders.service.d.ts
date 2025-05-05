import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
export declare class SlidersService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createSliderDto: CreateSliderDto, files?: Express.Multer.File[]): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
        description: string | null;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
        description: string | null;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
        description: string | null;
    }>;
    update(id: number, updateSliderDto: UpdateSliderDto, files?: Express.Multer.File[]): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
        description: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
        description: string | null;
    }>;
}
