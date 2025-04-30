import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';

@Injectable()
export class LugaresTuristicosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLugarTuristicoDto: CreateLugarTuristicoDto) {
    // Asegurarse de que imagenUrl tenga un valor por defecto si es undefined
    const data = {
      ...createLugarTuristicoDto,
      imagenUrl: createLugarTuristicoDto.imagenUrl || 'https://example.com/default-image.jpg',
    };
    
    return this.prisma.lugarTuristico.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.lugarTuristico.findMany();
  }

  async findOne(id: number) {
    const lugar = await this.prisma.lugarTuristico.findUnique({
      where: { id },
    });

    if (!lugar) {
      throw new NotFoundException(`Lugar turístico con ID ${id} no encontrado`);
    }

    return lugar;
  }

  async update(id: number, updateLugarTuristicoDto: UpdateLugarTuristicoDto) {
    // Verificar que el lugar existe
    await this.findOne(id);

    return this.prisma.lugarTuristico.update({
      where: { id },
      data: updateLugarTuristicoDto,
    });
  }

  async remove(id: number) {
    // Verificar que el lugar existe
    await this.findOne(id);

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