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
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
    update(id: number, updateSliderDto: UpdateSliderDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
}
