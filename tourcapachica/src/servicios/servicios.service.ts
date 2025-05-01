import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(private prisma: PrismaService) {}

  async create(createServicioDto: CreateServicioDto) {
    const { imagenes, ...servicioData } = createServicioDto;
    
    const servicio = await this.prisma.servicio.create({
      data: servicioData,
    });

    if (imagenes && imagenes.length > 0) {
      await this.prisma.image.createMany({
        data: imagenes.map(img => ({
          url: img.url,
          imageableId: servicio.id,
          imageableType: 'Servicio',
        })),
      });
    }

    return this.findOne(servicio.id);
  }

  async findAll() {
    const servicios = await this.prisma.servicio.findMany({
      include: {
        tipoServicio: true,
      },
    });
    
    const serviciosWithImages = await Promise.all(
      servicios.map(async (servicio) => {
        const imagenes = await this.prisma.image.findMany({
          where: {
            imageableId: servicio.id,
            imageableType: 'Servicio',
          },
        });
        return { ...servicio, imagenes };
      })
    );

    return serviciosWithImages;
  }

  async findOne(id: number) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id },
      include: {
        tipoServicio: true,
      },
    });

    if (!servicio) {
      return null;
    }

    const imagenes = await this.prisma.image.findMany({
      where: {
        imageableId: servicio.id,
        imageableType: 'Servicio',
      },
    });

    return { ...servicio, imagenes };
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    const { imagenes, ...servicioData } = updateServicioDto;

    // Actualizar datos del servicio
    const servicio = await this.prisma.servicio.update({
      where: { id },
      data: servicioData,
    });

    // Si hay nuevas imágenes, eliminar las antiguas y crear las nuevas
    if (imagenes) {
      await this.prisma.image.deleteMany({
        where: {
          imageableId: id,
          imageableType: 'Servicio',
        },
      });

      if (imagenes.length > 0) {
        await this.prisma.image.createMany({
          data: imagenes.map(img => ({
            url: img.url,
            imageableId: id,
            imageableType: 'Servicio',
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
        imageableType: 'Servicio',
      },
    });

    // Eliminar el servicio
    return this.prisma.servicio.delete({
      where: { id },
    });
  }
} 