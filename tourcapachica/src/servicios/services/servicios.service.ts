import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SupabaseService } from '../../supabase/supabase.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';

@Injectable()
export class ServiciosService {
  private readonly IMAGEABLE_TYPE = 'Servicio';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createServicioDto: CreateServicioDto, files?: Express.Multer.File[]) {
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
    if (files && files.length > 0) {
      for (const file of files) {
        // Subir la imagen a Supabase
        const imageUrl = await this.supabaseService.uploadFile(
          file,
          this.IMAGEABLE_TYPE,
          servicio.id
        );

        // Crear la imagen en la base de datos
        const imagen = await this.prisma.image.create({
          data: {
            url: imageUrl
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: imagen.id,
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

  async update(id: number, updateServicioDto: UpdateServicioDto, files?: Express.Multer.File[]) {
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
    if (files && files.length > 0) {
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
        // Extraer el nombre del archivo de la URL
        const fileName = imageable.image.url.split('/').pop();
        
        // Eliminar el archivo de Supabase
        await this.supabaseService.deleteFile(
          this.IMAGEABLE_TYPE,
          id,
          fileName
        );

        // Eliminar la relación y la imagen de la base de datos
        await this.prisma.imageable.delete({
          where: { id: imageable.id }
        });
        await this.prisma.image.delete({
          where: { id: imageable.image.id }
        });
      }

      // Crear las nuevas imágenes y relaciones
      for (const file of files) {
        // Subir la nueva imagen a Supabase
        const imageUrl = await this.supabaseService.uploadFile(
          file,
          this.IMAGEABLE_TYPE,
          id
        );

        // Crear la imagen en la base de datos
        const imagen = await this.prisma.image.create({
          data: {
            url: imageUrl
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: imagen.id,
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
      // Extraer el nombre del archivo de la URL
      const fileName = imageable.image.url.split('/').pop();
      
      // Eliminar el archivo de Supabase
      await this.supabaseService.deleteFile(
        this.IMAGEABLE_TYPE,
        id,
        fileName
      );

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