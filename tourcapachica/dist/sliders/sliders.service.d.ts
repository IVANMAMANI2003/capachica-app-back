import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
export declare class SlidersService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    private readonly BUCKET_NAME;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createSliderDto: CreateSliderDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
    }>;
    update(id: number, updateSliderDto: UpdateSliderDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
    }>;
    remove(id: number): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        estado: string;
    }>;
}
