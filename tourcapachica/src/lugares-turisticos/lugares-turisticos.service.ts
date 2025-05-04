import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';

@Injectable()
export class LugaresTuristicosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLugarTuristicoDto: CreateLugarTuristicoDto) {
    const { imagenes, ...lugarData } = createLugarTuristicoDto;
    
    try {
      const lugar = await this.prisma.lugarTuristico.create({
        data: {
          ...lugarData,
          estado: lugarData.estado || 'activo',
          esDestacado: lugarData.esDestacado || false,
        },
      });

      if (imagenes && imagenes.length > 0) {
        await this.prisma.image.createMany({
          data: imagenes.map(img => ({
            url: img.url,
            imageableId: lugar.id,
            imageableType: 'LugarTuristico',
          })),
        });
      }

      return this.findOne(lugar.id);
    } catch (error) {
      console.error('Error al crear lugar turístico:', error);
      throw error;
    }
  }

  async findAll() {
    const lugares = await this.prisma.lugarTuristico.findMany();
    
    const lugaresWithImages = await Promise.all(
      lugares.map(async (lugar) => {
        const imagenes = await this.prisma.image.findMany({
          where: {
            imageableId: lugar.id,
            imageableType: 'LugarTuristico',
          },
        });
        return { ...lugar, imagenes };
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

    const imagenes = await this.prisma.image.findMany({
      where: {
        imageableId: lugar.id,
        imageableType: 'LugarTuristico',
      },
    });

    return { ...lugar, imagenes };
  }

  async update(id: number, updateLugarTuristicoDto: UpdateLugarTuristicoDto) {
    const { imagenes, ...lugarData } = updateLugarTuristicoDto;

    // Actualizar datos del lugar
    const lugar = await this.prisma.lugarTuristico.update({
      where: { id },
      data: lugarData,
    });

    // Si hay nuevas imágenes, eliminar las antiguas y crear las nuevas
    if (imagenes) {
      await this.prisma.image.deleteMany({
        where: {
          imageableId: id,
          imageableType: 'LugarTuristico',
        },
      });

      if (imagenes.length > 0) {
        await this.prisma.image.createMany({
          data: imagenes.map(img => ({
            url: img.url,
            imageableId: id,
            imageableType: 'LugarTuristico',
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
        imageableType: 'LugarTuristico',
      },
    });

    // Eliminar el lugar
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