import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createSupabaseClient } from '../config/supabase.config';

@Injectable()
export class SupabaseService {
  private supabase;
  private readonly BUCKET_NAME = 'images';

  constructor(private configService: ConfigService) {
    this.supabase = createSupabaseClient(this.configService);
  }

  /**
   * Sube un archivo a Supabase Storage y retorna la URL pública
   * @param file Archivo a subir
   * @param imageableType Tipo de entidad (ej: 'Slider', 'LugarTuristico', etc.)
   * @param imageableId ID de la entidad
   * @returns URL pública del archivo
   */
  async uploadFile(
    file: Express.Multer.File, 
    imageableType: string, 
    imageableId: number
  ): Promise<string> {
    try {
      // Crear el path basado en el tipo y ID
      const folderPath = this.getFolderPath(imageableType, imageableId);
      const fileExt = file.originalname.split('.').pop();
      const fileName = `${folderPath}/${Date.now()}.${fileExt}`;

      // Subir el archivo
      const { error } = await this.supabase.storage
        .from(this.BUCKET_NAME)
        .upload(fileName, file.buffer, {
          contentType: file.mimetype,
          upsert: true
        });

      if (error) {
        throw new Error(`Error uploading file to Supabase: ${error.message}`);
      }

      // Obtener la URL pública
      const { data: { publicUrl } } = this.supabase.storage
        .from(this.BUCKET_NAME)
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      throw new Error(`Error in uploadFile: ${error.message}`);
    }
  }

  /**
   * Elimina un archivo de Supabase Storage
   * @param imageableType Tipo de entidad
   * @param imageableId ID de la entidad
   * @param fileName Nombre del archivo
   */
  async deleteFile(
    imageableType: string,
    imageableId: number,
    fileName: string
  ): Promise<void> {
    try {
      const folderPath = this.getFolderPath(imageableType, imageableId);
      const filePath = `${folderPath}/${fileName}`;

      const { error } = await this.supabase.storage
        .from(this.BUCKET_NAME)
        .remove([filePath]);

      if (error) {
        throw new Error(`Error deleting file from Supabase: ${error.message}`);
      }
    } catch (error) {
      throw new Error(`Error in deleteFile: ${error.message}`);
    }
  }

  /**
   * Genera la ruta de la carpeta basada en el tipo y ID
   * @param imageableType Tipo de entidad
   * @param imageableId ID de la entidad
   * @returns Ruta de la carpeta
   */
  private getFolderPath(imageableType: string, imageableId: number): string {
    // Convertir el tipo a minúsculas y reemplazar espacios con guiones
    const typePath = imageableType.toLowerCase().replace(/\s+/g, '-');
    return `${typePath}/${imageableId}`;
  }
} 