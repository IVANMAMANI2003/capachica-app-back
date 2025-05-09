import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SupabaseService } from '../../supabase/supabase.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';

@Injectable()
export class ServiciosService {
  private readonly IMAGEABLE_TYPE = 'Servicio';
  private readonly BUCKET_NAME = 'servicios';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createServicioDto: CreateServicioDto) {
    const { imagenes, ...servicioData } = createServicioDto;
    
    // Crear el servicio
    const servicio = await this.prisma.servicio.create({
      data: {
        tipoServicioId: servicioData.tipoServicioId,
        nombre: servicioData.nombre,
        descripcion: servicioData.descripcion,
        precioBase: servicioData.precioBase,
        moneda: servicioData.moneda || 'PEN',
        estado: servicioData.estado || 'activo',
        detallesServicio: servicioData.detallesServicio || {},
      },
    });

    // Crear las imágenes si existen
    if (imagenes && imagenes.length > 0) {
      for (const imagen of imagenes) {
        const filePath = `${servicio.id}/${Date.now()}-${imagen.url.split('/').pop()}`;
        
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
            imageable_id: servicio.id,
            imageable_type: this.IMAGEABLE_TYPE
          }
        });
      }
    }

    return this.findOne(servicio.id);
  }

  async findAll() {
    const servicios = await this.prisma.servicio.findMany({
      include: {
        tipoServicio: true
      }
    });
    
    const serviciosWithImages = await Promise.all(
      servicios.map(async (servicio) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: servicio.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...servicio, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return serviciosWithImages;
  }

  async findOne(id: number) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id },
      include: {
        tipoServicio: true
      }
    });

    if (!servicio) {
      return null;
    }

    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: servicio.id,
      },
      include: {
        image: true
      }
    });

    return { 
      ...servicio, 
      imagenes: imageables.map(imageable => ({
        id: imageable.image.id,
        url: imageable.image.url
      }))
    };
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
    const { imagenes, ...servicioData } = updateServicioDto;

    // Actualizar datos del servicio
    await this.prisma.servicio.update({
      where: { id },
      data: {
        tipoServicioId: servicioData.tipoServicioId,
        nombre: servicioData.nombre,
        descripcion: servicioData.descripcion,
        precioBase: servicioData.precioBase,
        moneda: servicioData.moneda,
        estado: servicioData.estado,
        detallesServicio: servicioData.detallesServicio,
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

    // Eliminar el servicio
    return this.prisma.servicio.delete({
      where: { id },
    });
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
        fechaInicio: new Date(createDisponibilidadDto.fechaInicio),
        fechaFin: new Date(createDisponibilidadDto.fechaFin),
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
        fechaInicio: new Date(d.fechaInicio),
        fechaFin: new Date(d.fechaFin), 
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
      orderBy: { fechaInicio: 'asc' },
    });
  }

  async getDisponibilidadByFecha(servicioId: number, fechaInicio: string) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id: servicioId },
    });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
    }

    const disponibilidad = await this.prisma.servicioDisponibilidad.findFirst({
      where: {
        servicioId,
        fechaInicio: new Date(fechaInicio),
      },
    });

    if (!disponibilidad) {
      throw new NotFoundException(`No hay disponibilidad para el servicio ${servicioId} en la fecha ${fechaInicio}`);
    }

    return disponibilidad;
  }

  async findByTipoServicio(tipoServicioId: number) {
    const servicios = await this.prisma.servicio.findMany({
      where: { tipoServicioId },
      include: {
        tipoServicio: true
      }
    });
    
    const serviciosWithImages = await Promise.all(
      servicios.map(async (servicio) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: servicio.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...servicio, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return serviciosWithImages;
  }
}