import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';

@Injectable()
export class SlidersService {
  private readonly IMAGEABLE_TYPE = 'Slider';
  private readonly BUCKET_NAME = 'sliders';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createSliderDto: CreateSliderDto) {
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
    if (imagenes && imagenes.length > 0) {
      for (const imagen of imagenes) {
        const filePath = `${slider.id}/${Date.now()}-${imagen.url.split('/').pop()}`;
        
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

  async update(id: number, updateSliderDto: UpdateSliderDto) {
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

    // Eliminar el slider
    return this.prisma.slider.delete({
      where: { id },
    });
  }
} 