import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLugarTuristicoDto, ImageDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class LugaresTuristicosService {
  private readonly IMAGEABLE_TYPE = 'LugarTuristico';
  private readonly BUCKET_NAME = 'lugares-turisticos';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createLugarTuristicoDto: CreateLugarTuristicoDto) {
    const { imagenes, ...lugarData } = createLugarTuristicoDto;
    
    // Crear el lugar turístico
    const lugarTuristico = await this.prisma.lugarTuristico.create({
      data: {
        nombre: lugarData.nombre,
        descripcion: lugarData.descripcion,
        direccion: lugarData.direccion,
        coordenadas: lugarData.coordenadas,
        horarioApertura: lugarData.horarioApertura,
        horarioCierre: lugarData.horarioCierre,
        costoEntrada: lugarData.costoEntrada,
        recomendaciones: lugarData.recomendaciones,
        restricciones: lugarData.restricciones,
        esDestacado: lugarData.esDestacado,
        estado: lugarData.estado,
      },
    });

    // Crear las imágenes si existen
    if (imagenes && imagenes.length > 0) {
      for (const imagen of imagenes) {
        const filePath = `${lugarTuristico.id}/${Date.now()}-${imagen.url.split('/').pop()}`;
        
        // Subir la imagen a Supabase
        const { data, error } = await this.supabaseService.uploadFile(
          this.BUCKET_NAME,
          filePath,
          imagen.url
        );

        if (error) {
          throw new BadRequestException(`Error al subir la imagen: ${error.message}`);
        }

        // Crear la imagen en la base de datos con la URL de Supabase
        const imagenDb = await this.prisma.image.create({
          data: {
            url: data.path
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: imagenDb.id,
            imageable_id: lugarTuristico.id,
            imageable_type: this.IMAGEABLE_TYPE
          }
        });
      }
    }

    return this.findOne(lugarTuristico.id);
  }

  async findAll() {
    const lugares = await this.prisma.lugarTuristico.findMany();
    
    const lugaresWithImages = await Promise.all(
      lugares.map(async (lugar) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: lugar.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...lugar, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return lugaresWithImages;
  }

  async findOne(id: number) {
    const lugar = await this.prisma.lugarTuristico.findUnique({
      where: { id },
    });

    if (!lugar) {
      return null;
    }

    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: lugar.id,
      },
      include: {
        image: true
      }
    });

    return { 
      ...lugar, 
      imagenes: imageables.map(imageable => ({
        id: imageable.image.id,
        url: imageable.image.url
      }))
    };
  }

  async update(id: number, updateLugarTuristicoDto: UpdateLugarTuristicoDto) {
    const { imagenes, ...lugarData } = updateLugarTuristicoDto;

    // Actualizar datos del lugar turístico
    await this.prisma.lugarTuristico.update({
      where: { id },
      data: {
        nombre: lugarData.nombre,
        descripcion: lugarData.descripcion,
        direccion: lugarData.direccion,
        coordenadas: lugarData.coordenadas,
        horarioApertura: lugarData.horarioApertura,
        horarioCierre: lugarData.horarioCierre,
        costoEntrada: lugarData.costoEntrada,
        recomendaciones: lugarData.recomendaciones,
        restricciones: lugarData.restricciones,
        esDestacado: lugarData.esDestacado,
        estado: lugarData.estado,
      },
    });

    // Si hay nuevas imágenes, eliminar las antiguas y crear las nuevas
    if (imagenes) {
      // Obtener las relaciones imageables existentes
      const imageables = await this.prisma.imageable.findMany({
        where: {
          imageable_type: this.IMAGEABLE_TYPE,
          imageable_id: id,
        },
        include: {
          image: true
        }
      });

      // Eliminar las relaciones y las imágenes
      for (const imageable of imageables) {
        // Eliminar la imagen de Supabase
        const { error } = await this.supabaseService.deleteFile(
          this.BUCKET_NAME,
          imageable.image.url
        );

        if (error) {
          console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
        }

        // Eliminar la relación y la imagen de la base de datos
        await this.prisma.imageable.delete({
          where: { id: imageable.id }
        });
        await this.prisma.image.delete({
          where: { id: imageable.image.id }
        });
      }

      // Crear las nuevas imágenes y relaciones
      for (const imagen of imagenes) {
        const filePath = `${id}/${Date.now()}-${imagen.url.split('/').pop()}`;
        
        // Subir la imagen a Supabase
        const { data, error } = await this.supabaseService.uploadFile(
          this.BUCKET_NAME,
          filePath,
          imagen.url
        );

        if (error) {
          throw new BadRequestException(`Error al subir la imagen: ${error.message}`);
        }

        // Crear la imagen en la base de datos con la URL de Supabase
        const imagenDb = await this.prisma.image.create({
          data: {
            url: data.path
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: imagenDb.id,
            imageable_id: id,
            imageable_type: this.IMAGEABLE_TYPE
          }
        });
      }
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    // Obtener las relaciones imageables
    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: id,
      },
      include: {
        image: true
      }
    });

    // Eliminar las relaciones y las imágenes
    for (const imageable of imageables) {
      // Eliminar la imagen de Supabase
      const { error } = await this.supabaseService.deleteFile(
        this.BUCKET_NAME,
        imageable.image.url
      );

      if (error) {
        console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
      }

      // Eliminar la relación y la imagen de la base de datos
      await this.prisma.imageable.delete({
        where: { id: imageable.id }
      });
      await this.prisma.image.delete({
        where: { id: imageable.image.id }
      });
    }

    // Eliminar el lugar turístico
    return this.prisma.lugarTuristico.delete({
      where: { id },
    });
  }

  async findDestacados() {
    return this.prisma.lugarTuristico.findMany({
      where: { esDestacado: true },
    });
  }
} 