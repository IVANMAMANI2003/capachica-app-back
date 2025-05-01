import { ConfigService } from '@nestjs/config';
export declare class SupabaseService {
    private configService;
    private supabase;
    constructor(configService: ConfigService);
    uploadFile(bucket: string, file: Express.Multer.File, path: string): Promise<string>;
    deleteFile(bucket: string, path: string): Promise<void>;
}
