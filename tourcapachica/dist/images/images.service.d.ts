import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
export declare class ImagesService {
    private prisma;
    private supabase;
    constructor(prisma: PrismaService, supabase: SupabaseService);
    uploadImage(file: Express.Multer.File, imageableId: number, imageableType: string): Promise<string>;
    deleteImage(id: number): Promise<void>;
    getImages(imageableId: number, imageableType: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        imageableId: number;
        imageableType: string;
    }[]>;
}
