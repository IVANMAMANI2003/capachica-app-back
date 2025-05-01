import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class ImagesService {
  constructor(
    private prisma: PrismaService,
    private supabase: SupabaseService,
  ) {}

  async uploadImage(file: Express.Multer.File, imageableId: number, imageableType: string): Promise<string> {
    const bucket = 'images';
    const path = `${imageableType.toLowerCase()}/${imageableId}`;
    
    const publicUrl = await this.supabase.uploadFile(bucket, file, path);

    await this.prisma.image.create({
      data: {
        url: publicUrl,
        imageableId,
        imageableType,
      },
    });

    return publicUrl;
  }

  async deleteImage(id: number): Promise<void> {
    const image = await this.prisma.image.findUnique({
      where: { id },
    });

    if (!image) {
      return;
    }

    // Extraer el path del URL de Supabase
    const url = new URL(image.url);
    const path = url.pathname.split('/').slice(3).join('/');

    await this.supabase.deleteFile('images', path);
    await this.prisma.image.delete({
      where: { id },
    });
  }

  async getImages(imageableId: number, imageableType: string) {
    return this.prisma.image.findMany({
      where: {
        imageableId,
        imageableType,
      },
    });
  }
} 