import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadisticasPaqueteDto } from './dto/estadisticas.dto';

@Injectable()
export class PaquetesTuristicosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto) {
    try {
      // Convertir el estado a minúsculas para coincidir con el schema
      const data = {
        ...createPaqueteTuristicoDto,
        estado: createPaqueteTuristicoDto.estado.toLowerCase(),
      };

      const paquete = await this.prisma.paqueteTuristico.create({
        data,
        include: {
          servicios: {
            include: {
              servicio: true,
            },
          },
        },
      });

      // Crear las imágenes si existen
      if (createPaqueteTuristicoDto.imagenes && createPaqueteTuristicoDto.imagenes.length > 0) {
        const imagenesPromises = createPaqueteTuristicoDto.imagenes.map(async (imagen) => {
          return this.prisma.image.create({
            data: {
              url: imagen.url,
              imageableId: paquete.id,
              imageableType: 'PaqueteTuristico',
            },
          });
        });

        await Promise.all(imagenesPromises);
      }

      // Obtener el paquete con sus imágenes
      const paqueteConImagenes = await this.prisma.paqueteTuristico.findUnique({
        where: { id: paquete.id },
        include: {
          servicios: {
            include: {
              servicio: true,
            },
          },
        },
      });

      // Obtener las imágenes asociadas
      const imagenes = await this.prisma.image.findMany({
        where: {
          imageableId: paquete.id,
          imageableType: 'PaqueteTuristico',
        },
      });

      return {
        ...paqueteConImagenes,
        imagenes,
      };
    } catch (error) {
      throw new BadRequestException('Error al crear el paquete turístico: ' + error.message);
    }
  }

  async findAll() {
    return this.prisma.paqueteTuristico.findMany({
      include: {
        servicios: {
          include: {
            servicio: true,
          },
        },
        disponibilidad: true,
      },
    });
  }

  async findOne(id: number) {
    const result = await this.prisma.paqueteTuristico.findUnique({
      where: { id },
      include: {
        servicios: {
          include: {
            servicio: true,
          },
        },
        disponibilidad: true,
      },
    });

    if (!result) {
      throw new NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
    }

    return result;
  }

  async update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto) {
    await this.findOne(id);

    return this.prisma.paqueteTuristico.update({
      where: { id },
      data: updatePaqueteTuristicoDto,
      include: {
        servicios: {
          include: {
            servicio: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.paqueteTuristico.delete({
      where: { id },
    });
  }

  async addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number) {
    const paquete = await this.findOne(id);

    if (paquete.emprendimientoId !== userId) {
      throw new ForbiddenException('No tienes permiso para modificar este paquete');
    }

    const servicios = await this.prisma.servicio.findMany({
      where: {
        id: {
          in: addServiciosDto.servicios.map(s => s.servicioId),
        },
      },
    });

    if (servicios.length !== addServiciosDto.servicios.length) {
      throw new BadRequestException('Uno o más servicios no existen');
    }

    return this.prisma.paqueteTuristico.update({
      where: { id },
      data: {
        servicios: {
          create: addServiciosDto.servicios.map(s => ({
            servicioId: s.servicioId,
            orden: s.orden,
          })),
        },
      },
      include: {
        servicios: {
          include: {
            servicio: true,
          },
        },
      },
    });
  }

  async removeServicio(id: number, servicioId: number, userId: number) {
    const paquete = await this.findOne(id);

    if (paquete.emprendimientoId !== userId) {
      throw new ForbiddenException('No tienes permiso para modificar este paquete');
    }

    const servicioPaquete = await this.prisma.servicioPaquete.findFirst({
      where: {
        paqueteTuristicoId: id,
        servicioId,
      },
    });

    if (!servicioPaquete) {
      throw new NotFoundException(`El servicio con ID ${servicioId} no está en este paquete`);
    }

    return this.prisma.servicioPaquete.delete({
      where: {
        id: servicioPaquete.id,
      },
    });
  }

  async getEstadisticas(id: number, userId: number): Promise<EstadisticasPaqueteDto> {
    const paquete = await this.findOne(id);

    if (paquete.emprendimientoId !== userId) {
      throw new ForbiddenException('No tienes permiso para ver las estadísticas de este paquete');
    }

    const reservas = await this.prisma.reserva.findMany({
      where: {
        itinerarios: {
          some: {
            servicio: {
              serviciosPaquetes: {
                some: {
                  paqueteTuristicoId: id,
                },
              },
            },
          },
        },
      },
      include: {
        itinerarios: {
          include: {
            servicio: true,
          },
        },
      },
    });

    const resenas = await this.prisma.resena.findMany({
      where: {
        tipoObjeto: 'PAQUETE_TURISTICO',
      },
    });

    const totalReservas = reservas.length;
    const totalIngresos = reservas.reduce((sum, reserva) => sum + Number(reserva.precioTotal), 0);
    const promedioCalificacion = resenas.length > 0
      ? resenas.reduce((sum, resena) => sum + resena.calificacion, 0) / resenas.length
      : 0;

    const serviciosPopulares = await this.prisma.servicioPaquete.groupBy({
      by: ['servicioId'],
      where: {
        paqueteTuristicoId: id,
      },
      _count: {
        servicioId: true,
      },
      orderBy: {
        _count: {
          servicioId: 'desc',
        },
      },
      take: 5,
    });

    const estadisticasMensuales = await this.prisma.reserva.groupBy({
      by: ['fechaReserva'],
      where: {
        itinerarios: {
          some: {
            servicio: {
              serviciosPaquetes: {
                some: {
                  paqueteTuristicoId: id,
                },
              },
            },
          },
        },
      },
      _count: {
        id: true,
      },
      _sum: {
        precioTotal: true,
      },
    });

    return {
      totalReservas,
      totalIngresos,
      promedioCalificacion,
      totalResenas: resenas.length,
      tasaOcupacion: totalReservas > 0 ? (totalReservas / (paquete.disponibilidad[0]?.cuposMaximos || 0)) * 100 : 0,
      serviciosPopulares: await Promise.all(
        serviciosPopulares.map(async (sp) => {
          const servicio = await this.prisma.servicio.findUnique({
            where: { id: sp.servicioId },
          });
          return {
            servicioId: sp.servicioId,
            nombre: servicio.nombre,
            cantidadReservas: sp._count.servicioId,
          };
        })
      ),
      estadisticasMensuales: estadisticasMensuales.map(em => ({
        mes: em.fechaReserva,
        totalReservas: em._count.id,
        totalIngresos: Number(em._sum.precioTotal || 0),
      })),
    };
  }

  async exportarDatos(id: number, userId: number) {
    const paquete = await this.findOne(id);

    if (paquete.emprendimientoId !== userId) {
      throw new ForbiddenException('No tienes permiso para exportar los datos de este paquete');
    }

    const reservas = await this.prisma.reserva.findMany({
      where: {
        itinerarios: {
          some: {
            servicio: {
              serviciosPaquetes: {
                some: {
                  paqueteTuristicoId: id,
                },
              },
            },
          },
        },
      },
      include: {
        itinerarios: {
          include: {
            servicio: true,
          },
        },
        turista: {
          include: {
            usuario: true,
          },
        },
      },
    });

    const resenas = await this.prisma.resena.findMany({
      where: {
        tipoObjeto: 'PAQUETE_TURISTICO',
      },
      include: {
        usuario: true,
      },
    });

    return {
      paquete,
      reservas,
      resenas,
    };
  }

  async createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto) {
    await this.findOne(id);

    return this.prisma.disponibilidadPaquete.create({
      data: {
        ...createDisponibilidadDto,
        paqueteId: id,
      },
    });
  }

  async getDisponibilidadesPaquete(id: number) {
    await this.findOne(id);

    return this.prisma.disponibilidadPaquete.findMany({
      where: {
        paqueteId: id,
      },
    });
  }

  async getDisponibilidad(id: number) {
    const result = await this.prisma.disponibilidadPaquete.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
    }

    return result;
  }

  async updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto) {
    await this.getDisponibilidad(id);

    return this.prisma.disponibilidadPaquete.update({
      where: { id },
      data: updateDisponibilidadDto,
    });
  }

  async deleteDisponibilidad(id: number) {
    await this.getDisponibilidad(id);

    return this.prisma.disponibilidadPaquete.delete({
      where: { id },
    });
  }
} 