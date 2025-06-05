import { ConfigService } from '@nestjs/config';
export declare class SupabaseService {
    private configService;
    private supabase;
    private readonly BUCKET_NAME;
    private readonly logger;
    constructor(configService: ConfigService);
    uploadFile(bucketName: string, filePath: string, fileUrl: string): Promise<{
        data: {
            path: string;
        };
        error: any;
    }>;
    deleteFile(bucketName: string, filePath: string): Promise<{
        error: any;
    }>;
    private getFolderPath;
}
