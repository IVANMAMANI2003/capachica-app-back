import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createSupabaseClient } from '../config/supabase.config';

@Injectable()
export class SupabaseService {
  private supabase;

  constructor(private configService: ConfigService) {
    this.supabase = createSupabaseClient(this.configService);
  }

  async uploadFile(bucket: string, file: Express.Multer.File, path: string): Promise<string> {
    const fileExt = file.originalname.split('.').pop();
    const fileName = `${path}/${Date.now()}.${fileExt}`;

    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        upsert: true
      });

    if (error) {
      throw new Error(`Error uploading file to Supabase: ${error.message}`);
    }

    const { data: { publicUrl } } = this.supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    return publicUrl;
  }

  async deleteFile(bucket: string, path: string): Promise<void> {
    const { error } = await this.supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      throw new Error(`Error deleting file from Supabase: ${error.message}`);
    }
  }
} 