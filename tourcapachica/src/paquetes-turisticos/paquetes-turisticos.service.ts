import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDisponibilidadDto, EstadoDisponibilidad } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';

@Injectable()
export class PaquetesTuristicosService {
  constructor(private readonly prisma: PrismaService) {}

  // ... otros métodos del servicio ...

  async createDisponibilidad(paqueteId: number, createDisponibilidadDto: CreateDisponibilidadDto) {
    // Verificar que el paquete existe
    const paquete = await this.prisma.paqueteTuristico.findUnique({
      where: { id: paqueteId }
    });

    if (!paquete) {
      throw new NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
    }

    // Verificar que la fecha de inicio es menor que la fecha de fin
    if (createDisponibilidadDto.fechaInicio >= createDisponibilidadDto.fechaFin) {
      throw new BadRequestException('La fecha de inicio debe ser anterior a la fecha de fin');
    }

    // Verificar que los cupos disponibles no excedan los cupos máximos
    if (createDisponibilidadDto.cuposDisponibles > createDisponibilidadDto.cuposMaximos) {
      throw new BadRequestException('Los cupos disponibles no pueden exceder los cupos máximos');
    }

    // Verificar que no haya solapamiento de fechas para el mismo paquete
    const existingDisponibilidad = await this.prisma.disponibilidadPaquete.findFirst({
      where: {
        paqueteId,
        OR: [
          {
            AND: [
              { fechaInicio: { lte: createDisponibilidadDto.fechaInicio } },
              { fechaFin: { gte: createDisponibilidadDto.fechaInicio } }
            ]
          },
          {
            AND: [
              { fechaInicio: { lte: createDisponibilidadDto.fechaFin } },
              { fechaFin: { gte: createDisponibilidadDto.fechaFin } }
            ]
          }
        ]
      }
    });

    if (existingDisponibilidad) {
      throw new BadRequestException('Ya existe disponibilidad para el paquete en el rango de fechas especificado');
    }

    return this.prisma.disponibilidadPaquete.create({
      data: {
        ...createDisponibilidadDto,
        paqueteId,
        estado:createDisponibilidadDto.estado || EstadoDisponibilidad.ACTIVO
      }
    });
  }

  async updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto) {
    // Verificar que la disponibilidad existe
    const disponibilidad = await this.prisma.disponibilidadPaquete.findUnique({
      where: { id }
    });

    if (!disponibilidad) {
      throw new NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
    }

    // Si se actualizan las fechas, verificar que no haya solapamiento
    if (updateDisponibilidadDto.fechaInicio || updateDisponibilidadDto.fechaFin) {
      const fechaInicio = updateDisponibilidadDto.fechaInicio || disponibilidad.fechaInicio;
      const fechaFin = updateDisponibilidadDto.fechaFin || disponibilidad.fechaFin;

      if (fechaInicio >= fechaFin) {
        throw new BadRequestException('La fecha de inicio debe ser anterior a la fecha de fin');
      }

      const existingDisponibilidad = await this.prisma.disponibilidadPaquete.findFirst({
        where: {
          paqueteId: disponibilidad.paqueteId,
          id: { not: id },
          OR: [
            {
              AND: [
                { fechaInicio: { lte: fechaInicio } },
                { fechaFin: { gte: fechaInicio } }
              ]
            },
            {
              AND: [
                { fechaInicio: { lte: fechaFin } },
                { fechaFin: { gte: fechaFin } }
              ]
            }
          ]
        }
      });

      if (existingDisponibilidad) {
        throw new BadRequestException('Ya existe disponibilidad para el paquete en el rango de fechas especificado');
      }
    }

    // Si se actualizan los cupos, verificar que sean válidos
    if (updateDisponibilidadDto.cuposDisponibles !== undefined || updateDisponibilidadDto.cuposMaximos !== undefined) {
      const cuposDisponibles = updateDisponibilidadDto.cuposDisponibles ?? disponibilidad.cuposDisponibles;
      const cuposMaximos = updateDisponibilidadDto.cuposMaximos ?? disponibilidad.cuposMaximos;

      if (cuposDisponibles > cuposMaximos) {
        throw new BadRequestException('Los cupos disponibles no pueden exceder los cupos máximos');
      }
    }

    return this.prisma.disponibilidadPaquete.update({
      where: { id },
      data: updateDisponibilidadDto
    });
  }

  async deleteDisponibilidad(id: number) {
    // Verificar que la disponibilidad existe
    const disponibilidad = await this.prisma.disponibilidadPaquete.findUnique({
      where: { id }
    });

    if (!disponibilidad) {
      throw new NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
    }

    return this.prisma.disponibilidadPaquete.delete({
      where: { id }
    });
  }

  async getDisponibilidadesPaquete(paqueteId: number) {
    // Verificar que el paquete existe
    const paquete = await this.prisma.paqueteTuristico.findUnique({
      where: { id: paqueteId }
    });

    if (!paquete) {
      throw new NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
    }

    return this.prisma.disponibilidadPaquete.findMany({
      where: { paqueteId },
      orderBy: { fechaInicio: 'asc' }
    });
  }

  async getDisponibilidad(id: number) {
    const disponibilidad = await this.prisma.disponibilidadPaquete.findUnique({
      where: { id }
    });

    if (!disponibilidad) {
      throw new NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
    }

    return disponibilidad;
  }

  async create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto) {
    const { imagenes, ...paqueteData } = createPaqueteTuristicoDto;
    
    const paquete = await this.prisma.paqueteTuristico.create({
      data: paqueteData,
    });

    if (imagenes && imagenes.length > 0) {
      await this.prisma.image.createMany({
        data: imagenes.map(img => ({
          url: img.url,
          imageableId: paquete.id,
          imageableType: 'PaqueteTuristico',
        })),
      });
    }

    return this.findOne(paquete.id);
  }

  async findAll() {
    const paquetes = await this.prisma.paqueteTuristico.findMany({
      include: {
        emprendimiento: true,
        servicios: {
          include: {
            servicio: true,
          },
        },
      },
    });
    
    const paquetesWithImages = await Promise.all(
      paquetes.map(async (paquete) => {
        const imagenes = await this.prisma.image.findMany({
          where: {
            imageableId: paquete.id,
            imageableType: 'PaqueteTuristico',
          },
        });
        return { ...paquete, imagenes };
      })
    );

    return paquetesWithImages;
  }

  async findOne(id: number) {
    const paquete = await this.prisma.paqueteTuristico.findUnique({
      where: { id },
      include: {
        emprendimiento: true,
        servicios: {
          include: {
            servicio: true,
          },
        },
      },
    });

    if (!paquete) {
      return null;
    }

    const imagenes = await this.prisma.image.findMany({
      where: {
        imageableId: paquete.id,
        imageableType: 'PaqueteTuristico',
      },
    });

    return { ...paquete, imagenes };
  }

  async update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto) {
    const { imagenes, ...paqueteData } = updatePaqueteTuristicoDto;

    // Actualizar datos del paquete
    const paquete = await this.prisma.paqueteTuristico.update({
      where: { id },
      data: paqueteData,
    });

    // Si hay nuevas imágenes, eliminar las antiguas y crear las nuevas
    if (imagenes) {
      await this.prisma.image.deleteMany({
        where: {
          imageableId: id,
          imageableType: 'PaqueteTuristico',
        },
      });

      if (imagenes.length > 0) {
        await this.prisma.image.createMany({
          data: imagenes.map(img => ({
            url: img.url,
            imageableId: id,
            imageableType: 'PaqueteTuristico',
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
        imageableType: 'PaqueteTuristico',
      },
    });

    // Eliminar el paquete
    return this.prisma.paqueteTuristico.delete({
      where: { id },
    });
  }
} 