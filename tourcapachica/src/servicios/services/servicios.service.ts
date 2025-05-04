import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';

@Injectable()
export class ServiciosService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(emprendimientoId: number, createServicioDto: CreateServicioDto) {
    try {
      // Verificar si existe el tipo de servicio
      const tipoServicio = await this.prisma.tipoServicio.findUnique({
        where: { id: createServicioDto.tipoServicioId },
      });

      if (!tipoServicio) {
        throw new NotFoundException(`Tipo de servicio con ID ${createServicioDto.tipoServicioId} no encontrado`);
      }

      // Crear el servicio
      const servicio = await this.prisma.servicio.create({
        data: {
          tipoServicioId: createServicioDto.tipoServicioId,
          nombre: createServicioDto.nombre,
          descripcion: createServicioDto.descripcion,
          precioBase: createServicioDto.precioBase,
          moneda: createServicioDto.moneda,
          estado: createServicioDto.estado || 'activo',
          detallesServicio: createServicioDto.detallesServicio || '{}',
          serviciosEmprendedores: {
            create: {
              emprendimientoId,
            },
          },
        },
        include: {
          tipoServicio: true,
          serviciosEmprendedores: {
            include: {
              emprendimiento: true,
            },
          },
        },
      });

      // Crear las imágenes si existen
      if (createServicioDto.imagenes && createServicioDto.imagenes.length > 0) {
        const imagenesPromises = createServicioDto.imagenes.map(async (imagen) => {
          return this.prisma.image.create({
            data: {
              url: imagen.url,
              imageableId: servicio.id,
              imageableType: 'Servicio',
            },
          });
        });

        await Promise.all(imagenesPromises);
      }

      // Obtener el servicio con sus imágenes
      const servicioConImagenes = await this.prisma.servicio.findUnique({
        where: { id: servicio.id },
        include: {
          tipoServicio: true,
          serviciosEmprendedores: {
            include: {
              emprendimiento: true,
            },
          },
        },
      });

      // Obtener las imágenes asociadas
      const imagenes = await this.prisma.image.findMany({
        where: {
          imageableId: servicio.id,
          imageableType: 'Servicio',
        },
      });

      return {
        ...servicioConImagenes,
        imagenes,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al crear el servicio: ' + error.message);
    }
  }

  async findAll() {
    return this.prisma.servicio.findMany({
      include: {
        tipoServicio: true,
        serviciosEmprendedores: {
          include: {
            emprendimiento: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id },
      include: {
        tipoServicio: true,
        serviciosEmprendedores: {
          include: {
            emprendimiento: true,
          },
        },
      },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }

    return servicio;
  }

  async findByEmprendimiento(emprendimientoId: number) {
    return this.prisma.servicio.findMany({
      where: {
        serviciosEmprendedores: {
          some: {
            emprendimientoId,
          },
        },
      },
      include: {
        tipoServicio: true,
        serviciosEmprendedores: {
          include: {
            emprendimiento: true,
          },
        },
      },
    });
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    try {
      // Verificar si existe el tipo de servicio si se proporciona
      if (updateServicioDto.tipoServicioId) {
        const tipoServicio = await this.prisma.tipoServicio.findUnique({
          where: { id: updateServicioDto.tipoServicioId },
        });

        if (!tipoServicio) {
          throw new NotFoundException(`Tipo de servicio con ID ${updateServicioDto.tipoServicioId} no encontrado`);
        }
      }

      return await this.prisma.servicio.update({
        where: { id },
        data: updateServicioDto,
        include: {
          tipoServicio: true,
          serviciosEmprendedores: {
            include: {
              emprendimiento: true,
            },
          },
        },
      });
    } catch (error) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.servicio.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }
  }

  async updateEstado(id: number, estado: string) {
    if (!['activo', 'inactivo'].includes(estado)) {
      throw new BadRequestException('Estado inválido. Debe ser "activo" o "inactivo"');
    }

    try {
      return await this.prisma.servicio.update({
        where: { id },
        data: { estado },
        include: {
          tipoServicio: true,
          serviciosEmprendedores: {
            include: {
              emprendimiento: true,
            },
          },
        },
      });
    } catch (error) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }
  }

  async createDisponibilidad(createDisponibilidadDto: CreateServicioDisponibilidadDto) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: createDisponibilidadDto.servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${createDisponibilidadDto.servicioId} no encontrado`);
    }

    return this.prisma.servicioDisponibilidad.create({
      data: {
        servicioId: createDisponibilidadDto.servicioId,
        fecha: new Date(createDisponibilidadDto.fecha),
        cuposDisponibles: createDisponibilidadDto.cuposDisponibles,
        precioEspecial: createDisponibilidadDto.precioEspecial,
      },
    });
  }

  async createDisponibilidades(disponibilidades: CreateServicioDisponibilidadDto[]) {
    // Verificar que todos los servicios existan
    const servicioIds = [...new Set(disponibilidades.map(d => d.servicioId))];
    const servicios = await this.prisma.servicio.findMany({
      where: { id: { in: servicioIds } },
    });

    if (servicios.length !== servicioIds.length) {
      const serviciosEncontrados = servicios.map(s => s.id);
      const serviciosNoEncontrados = servicioIds.filter(id => !serviciosEncontrados.includes(id));
      throw new NotFoundException(`Servicios con IDs ${serviciosNoEncontrados.join(', ')} no encontrados`);
    }

    return this.prisma.servicioDisponibilidad.createMany({
      data: disponibilidades.map(d => ({
        servicioId: d.servicioId,
        fecha: new Date(d.fecha),
        cuposDisponibles: d.cuposDisponibles,
        precioEspecial: d.precioEspecial,
      })),
    });
  }

  async getDisponibilidad(servicioId: number) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
    }

    return this.prisma.servicioDisponibilidad.findMany({
      where: { servicioId },
      orderBy: { fecha: 'asc' },
    });
  }

  async getDisponibilidadByFecha(servicioId: number, fecha: string) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
    }

    const disponibilidad = await this.prisma.servicioDisponibilidad.findFirst({
      where: {
        servicioId,
        fecha: new Date(fecha),
      },
    });

    if (!disponibilidad) {
      throw new NotFoundException(`No hay disponibilidad para el servicio ${servicioId} en la fecha ${fecha}`);
    }

    return disponibilidad;
  }
} 