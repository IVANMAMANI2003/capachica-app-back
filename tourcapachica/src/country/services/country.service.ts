import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Country, Subdivision } from '../entity/country.entity';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Country[]> {
    const countries = await this.prisma.country.findMany({
      include: {
        subdivisions: true,
      },
    });
    return countries;
  }

  async findById(id: string): Promise<Country> {
    const country = await this.prisma.country.findUnique({
      where: { id: parseInt(id) },
      include: {
        subdivisions: true,
      },
    });

    if (!country) {
      throw new NotFoundException(`País con ID ${id} no encontrado`);
    }

    return country;
  }

  async findByName(name: string): Promise<Country> {
    const country = await this.prisma.country.findFirst({
      where: { name },
      include: {
        subdivisions: true,
      },
    });

    if (!country) {
      throw new NotFoundException(`País con nombre ${name} no encontrado`);
    }

    return country;
  }
} 