import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadisticasPaqueteDto } from './dto/estadisticas.dto';

@Injectable()
export class PaquetesTuristicosService {
  private readonly IMAGEABLE_TYPE = 'PaqueteTuristico';

  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService
  ) {}

  async create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto, files?: Express.Multer.File[]) {
    const { imagenes, servicios, ...paqueteData } = createPaqueteTuristicoDto;

    // Crear el paquete turístico
    const paquete = await this.prisma.paqueteTuristico.create({
      data: {
        nombre: paqueteData.nombre,
        descripcion: paqueteData.descripcion,
        precio: paqueteData.precio,
        estado: paqueteData.estado || 'activo',
        emprendimientoId: paqueteData.emprendimientoId,
      },
    });

    // Crear las relaciones con servicios si existen
    if (servicios && servicios.length > 0) {
      await this.prisma.servicioPaquete.createMany({
        data: servicios.map((servicioId, index) => ({
          paqueteTuristicoId: paquete.id,
          servicioId,
          orden: index + 1,
        })),
      });
    }

    // Crear las imágenes si existen
    if (files && files.length > 0) {
      for (const file of files) {
        // Subir la imagen a Supabase
        const imageUrl = await this.supabaseService.uploadFile(
          file,
          this.IMAGEABLE_TYPE,
          paquete.id
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
            imageable_id: paquete.id,
            imageable_type: this.IMAGEABLE_TYPE
          }
        });
      }
    }

    return this.findOne(paquete.id);
  }

  async findAll() {
    const paquetes = await this.prisma.paqueteTuristico.findMany({
      include: {
        emprendimiento: true,
        servicios: {
          include: {
            servicio: true
          }
        }
      }
    });
    
    const paquetesWithImages = await Promise.all(
      paquetes.map(async (paquete) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: paquete.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...paquete, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
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
            servicio: true
          }
        },
        disponibilidad: true
      }
    });

    if (!paquete) {
      return null;
    }

    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: paquete.id,
      },
      include: {
        image: true
      }
    });

    return { 
      ...paquete, 
      imagenes: imageables.map(imageable => ({
        id: imageable.image.id,
        url: imageable.image.url
      }))
    };
  }

  async findByEmprendimiento(emprendimientoId: number) {
    const paquetes = await this.prisma.paqueteTuristico.findMany({
      where: { emprendimientoId },
      include: {
        emprendimiento: true,
        servicios: {
          include: {
            servicio: true
          }
        },
        disponibilidad: true
      }
    });

    const paquetesWithImages = await Promise.all(
      paquetes.map(async (paquete) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: paquete.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...paquete, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return paquetesWithImages;
  }

  async update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto, files?: Express.Multer.File[]) {
    const { imagenes, servicios, ...paqueteData } = updatePaqueteTuristicoDto;

    // Actualizar datos del paquete
    await this.prisma.paqueteTuristico.update({
      where: { id },
      data: {
        nombre: paqueteData.nombre,
        descripcion: paqueteData.descripcion,
        precio: paqueteData.precio,
        estado: paqueteData.estado,
      },
    });

    // Actualizar servicios si se proporcionan
    if (servicios) {
      // Eliminar relaciones existentes
      await this.prisma.servicioPaquete.deleteMany({
        where: { paqueteTuristicoId: id },
      });

      // Crear nuevas relaciones
      if (servicios.length > 0) {
        await this.prisma.servicioPaquete.createMany({
          data: servicios.map((servicioId, index) => ({
            paqueteTuristicoId: id,
            servicioId,
            orden: index + 1,
          })),
        });
      }
    }

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

    // Eliminar el paquete
    return this.prisma.paqueteTuristico.delete({
      where: { id },
    });
  }

  async updateEstado(id: number, estado: string) {
    if (!['activo', 'inactivo'].includes(estado)) {
      throw new BadRequestException('Estado inválido. Debe ser "activo" o "inactivo"');
    }

    try {
      return await this.prisma.paqueteTuristico.update({
        where: { id },
        data: { estado },
        include: {
          emprendimiento: true,
          servicios: {
            include: {
              servicio: true
            }
          }
        },
      });
    } catch (error) {
      throw new NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
    }
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
    const paquete = await this.prisma.paqueteTuristico.findUnique({
      where: { id },
    });

    if (!paquete) {
      throw new NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
    }

    return this.prisma.disponibilidadPaquete.create({
      data: {
        paqueteId: id,
        fechaInicio: new Date(createDisponibilidadDto.fechaInicio),
        fechaFin: new Date(createDisponibilidadDto.fechaFin),
        cuposDisponibles: createDisponibilidadDto.cuposDisponibles,
        cuposMaximos: createDisponibilidadDto.cuposMaximos,
        precioEspecial: createDisponibilidadDto.precioEspecial,
        notas: createDisponibilidadDto.notas,
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

  async getDisponibilidad(paqueteId: number) {
    const paquete = await this.prisma.paqueteTuristico.findUnique({
      where: { id: paqueteId },
    });

    if (!paquete) {
      throw new NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
    }

    return this.prisma.disponibilidadPaquete.findMany({
      where: { paqueteId },
      orderBy: { fechaInicio: 'asc' },
    });
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