import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';

@Injectable()
export class LugaresTuristicosService {
  private readonly IMAGEABLE_TYPE = 'LugarTuristico';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createLugarTuristicoDto: CreateLugarTuristicoDto, files?: Express.Multer.File[]) {
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
    if (files && files.length > 0) {
      for (const file of files) {
        // Subir la imagen a Supabase
        const imageUrl = await this.supabaseService.uploadFile(
          file,
          this.IMAGEABLE_TYPE,
          lugarTuristico.id
        );

        // Crear la imagen en la base de datos
        const imagen = await this.prisma.image.create({
          data: {
            url: imageUrl
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: imagen.id,
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

  async update(id: number, updateLugarTuristicoDto: UpdateLugarTuristicoDto, files?: Express.Multer.File[]) {
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
    if (files && files.length > 0) {
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
        // Extraer el nombre del archivo de la URL
        const fileName = imageable.image.url.split('/').pop();
        
        // Eliminar el archivo de Supabase
        await this.supabaseService.deleteFile(
          this.IMAGEABLE_TYPE,
          id,
          fileName
        );

        // Eliminar la relación y la imagen de la base de datos
        await this.prisma.imageable.delete({
          where: { id: imageable.id }
        });
        await this.prisma.image.delete({
          where: { id: imageable.image.id }
        });
      }

      // Crear las nuevas imágenes y relaciones
      for (const file of files) {
        // Subir la nueva imagen a Supabase
        const imageUrl = await this.supabaseService.uploadFile(
          file,
          this.IMAGEABLE_TYPE,
          id
        );

        // Crear la imagen en la base de datos
        const imagen = await this.prisma.image.create({
          data: {
            url: imageUrl
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: imagen.id,
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
      // Extraer el nombre del archivo de la URL
      const fileName = imageable.image.url.split('/').pop();
      
      // Eliminar el archivo de Supabase
      await this.supabaseService.deleteFile(
        this.IMAGEABLE_TYPE,
        id,
        fileName
      );

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