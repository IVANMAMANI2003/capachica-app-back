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
   * Sube un archivo a Supabase Storage desde una URL
   * @param bucketName Nombre del bucket
   * @param filePath Ruta donde se guardará el archivo
   * @param fileUrl URL del archivo a subir
   * @returns Objeto con la ruta del archivo y posibles errores
   */
  async uploadFile(
    bucketName: string,
    filePath: string,
    fileUrl: string
  ): Promise<{ data: { path: string }, error: any }> {
    try {
      // Descargar el archivo desde la URL
      const response = await fetch(fileUrl);
      const buffer = await response.arrayBuffer();

      // Subir el archivo
      const { data, error } = await this.supabase.storage
        .from(bucketName)
        .upload(filePath, buffer, {
          contentType: response.headers.get('content-type'),
          upsert: true
        });

      if (error) {
        throw new Error(`Error uploading file to Supabase: ${error.message}`);
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  /**
   * Elimina un archivo de Supabase Storage
   * @param bucketName Nombre del bucket
   * @param filePath Ruta del archivo a eliminar
   * @returns Objeto con posibles errores
   */
  async deleteFile(
    bucketName: string,
    filePath: string
  ): Promise<{ error: any }> {
    try {
      const { error } = await this.supabase.storage
        .from(bucketName)
        .remove([filePath]);

      if (error) {
        throw new Error(`Error deleting file from Supabase: ${error.message}`);
      }

      return { error: null };
    } catch (error) {
      return { error };
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