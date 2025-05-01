import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';

@Injectable()
export class SlidersService {
  constructor(private prisma: PrismaService) {}

  async create(createSliderDto: CreateSliderDto) {
    const { imagenes, ...sliderData } = createSliderDto;
    
    const slider = await this.prisma.slider.create({
      data: sliderData,
    });

    if (imagenes && imagenes.length > 0) {
      await this.prisma.image.createMany({
        data: imagenes.map(img => ({
          url: img.url,
          imageableId: slider.id,
          imageableType: 'Slider',
        })),
      });
    }

    return this.findOne(slider.id);
  }

  async findAll() {
    const sliders = await this.prisma.slider.findMany();
    
    const slidersWithImages = await Promise.all(
      sliders.map(async (slider) => {
        const imagenes = await this.prisma.image.findMany({
          where: {
            imageableId: slider.id,
            imageableType: 'Slider',
          },
        });
        return { ...slider, imagenes };
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

    const imagenes = await this.prisma.image.findMany({
      where: {
        imageableId: slider.id,
        imageableType: 'Slider',
      },
    });

    return { ...slider, imagenes };
  }

  async update(id: number, updateSliderDto: UpdateSliderDto) {
    const { imagenes, ...sliderData } = updateSliderDto;

    // Actualizar datos del slider
    const slider = await this.prisma.slider.update({
      where: { id },
      data: sliderData,
    });

    // Si hay nuevas imágenes, eliminar las antiguas y crear las nuevas
    if (imagenes) {
      await this.prisma.image.deleteMany({
        where: {
          imageableId: id,
          imageableType: 'Slider',
        },
      });

      if (imagenes.length > 0) {
        await this.prisma.image.createMany({
          data: imagenes.map(img => ({
            url: img.url,
            imageableId: id,
            imageableType: 'Slider',
          })),
        });
      }
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    // Eliminar imágenes asociadas
    await this.prisma.image.deleteMany({
      where: {
        imageableId: id,
        imageableType: 'Slider',
      },
    });

    // Eliminar el slider
    return this.prisma.slider.delete({
      where: { id },
    });
  }
} 