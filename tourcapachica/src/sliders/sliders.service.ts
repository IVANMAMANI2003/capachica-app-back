import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';

@Injectable()
export class SlidersService {
  private readonly IMAGEABLE_TYPE = 'Slider';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createSliderDto: CreateSliderDto, files?: Express.Multer.File[]) {
    const { imagenes, ...sliderData } = createSliderDto;
    
    // Crear el slider
    const slider = await this.prisma.slider.create({
      data: {
        nombre: sliderData.nombre,
        description: sliderData.descripcion,
        estado: sliderData.estado,
      },
    });

    // Crear las imágenes si existen
    if (files && files.length > 0) {
      for (const file of files) {
        // Subir la imagen a Supabase
        const imageUrl = await this.supabaseService.uploadFile(
          file,
          this.IMAGEABLE_TYPE,
          slider.id
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
            imageable_id: slider.id,
            imageable_type: this.IMAGEABLE_TYPE
          }
        });
      }
    }

    return this.findOne(slider.id);
  }

  async findAll() {
    const sliders = await this.prisma.slider.findMany();
    
    const slidersWithImages = await Promise.all(
      sliders.map(async (slider) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: slider.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...slider, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return slidersWithImages;
  }

  async findOne(id: number) {
    const slider = await this.prisma.slider.findUnique({
      where: { id },
    });

    if (!slider) {
      return null;
    }

    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: slider.id,
      },
      include: {
        image: true
      }
    });

    return { 
      ...slider, 
      imagenes: imageables.map(imageable => ({
        id: imageable.image.id,
        url: imageable.image.url
      }))
    };
  }

  async update(id: number, updateSliderDto: UpdateSliderDto, files?: Express.Multer.File[]) {
    const { imagenes, ...sliderData } = updateSliderDto;

    // Actualizar datos del slider
    await this.prisma.slider.update({
      where: { id },
      data: {
        nombre: sliderData.nombre,
        description: sliderData.descripcion,
        estado: sliderData.estado,
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

    // Eliminar el slider
    return this.prisma.slider.delete({
      where: { id },
    });
  }
} 