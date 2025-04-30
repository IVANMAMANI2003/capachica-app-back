import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonasService {
  constructor(private prisma: PrismaService) {}

  async create(createPersonaDto: CreatePersonaDto) {
    return this.prisma.persona.create({
      data: createPersonaDto,
      include: {
        subdivision: true,
        usuario: true,
      },
    });
  }

  async findAll() {
    return this.prisma.persona.findMany({
      include: {
        subdivision: true,
        usuario: true,
      },
    });
  }

  async findOne(id: number) {
    const persona = await this.prisma.persona.findUnique({
      where: { id },
      include: {
        subdivision: true,
        usuario: true,
      },
    });

    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }

    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    try {
      return await this.prisma.persona.update({
        where: { id },
        data: updatePersonaDto,
        include: {
          subdivision: true,
          usuario: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.persona.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }
  }
}