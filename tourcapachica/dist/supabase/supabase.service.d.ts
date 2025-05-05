import { ConfigService } from '@nestjs/config';
export declare class SupabaseService {
    private configService;
    private supabase;
    private readonly BUCKET_NAME;
    constructor(configService: ConfigService);
    uploadFile(file: Express.Multer.File, imageableType: string, imageableId: number): Promise<string>;
    deleteFile(imageableType: string, imageableId: number, fileName: string): Promise<void>;
    private getFolderPath;
}
