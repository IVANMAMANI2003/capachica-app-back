import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadisticasPaqueteDto } from './dto/estadisticas.dto';
import { FavoritoPaqueteTuristico } from '@prisma/client';

@Injectable()
export class PaquetesTuristicosService {
  private readonly IMAGEABLE_TYPE = 'PaqueteTuristico';
  private readonly BUCKET_NAME = 'paquetes-turisticos';

  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService
  ) {}

  async create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto) {
    try {
      const { emprendimientoId, servicios, imagenes, ...data } = createPaqueteTuristicoDto;

      // Validate emprendimiento exists
      const emprendimiento = await this.prisma.emprendimiento.findUnique({
        where: { id: emprendimientoId }
      });

      if (!emprendimiento) {
        throw new BadRequestException(`Emprendimiento con ID ${emprendimientoId} no encontrado`);
      }

      // Create paquete
      const paquete = await this.prisma.paqueteTuristico.create({
        data: {
          ...data,
          emprendimientoId,
          servicios: {
            create: servicios?.map((servicioId, index) => ({
              servicioId,
              orden: index + 1
            })) || []
          }
        },
        include: {
          emprendimiento: true,
          servicios: {
            include: {
              servicio: true
            }
          }
        }
      });

      // Handle images if provided
      if (imagenes && imagenes.length > 0) {
        await Promise.all(
          imagenes.map(async (url) => {
            const image = await this.prisma.image.create({
              data: { url }
            });

            await this.prisma.imageable.create({
              data: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: paquete.id,
                image_id: image.id
              }
            });
          })
        );
      }

      return this.findOne(paquete.id);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Error al crear el paquete turístico');
    }
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
          precio: Number(paquete.precio),
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
    if (!id || isNaN(Number(id))) {
      throw new BadRequestException('ID inválido');
    }

    const paquete = await this.prisma.paqueteTuristico.findUnique({
      where: { id: Number(id) },
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
      throw new NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
    }

    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: Number(id),
      },
      include: {
        image: true
      }
    });

    return {
      ...paquete,
      precio: Number(paquete.precio),
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
          precio: Number(paquete.precio),
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return paquetesWithImages;
  }

  async update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto) {
    try {
      if (!id || isNaN(Number(id))) {
        throw new BadRequestException('ID inválido');
      }

      const paquete = await this.findOne(id);
      if (!paquete) {
        throw new NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
      }

      const { servicios, imagenes, ...data } = updatePaqueteTuristicoDto;

      // Update paquete
      const updatedPaquete = await this.prisma.paqueteTuristico.update({
        where: { id: Number(id) },
        data: {
          ...data,
          servicios: servicios ? {
            deleteMany: {},
            create: servicios.map((servicioId, index) => ({
              servicioId,
              orden: index + 1
            }))
          } : undefined
        },
        include: {
          emprendimiento: true,
          servicios: {
            include: {
              servicio: true
            }
          }
        }
      });

      // Handle images if provided
      if (imagenes && imagenes.length > 0) {
        // Delete existing images
        const existingImageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: Number(id)
          }
        });

        await Promise.all(
          existingImageables.map(async (imageable) => {
            await this.prisma.imageable.delete({
              where: { id: imageable.id }
            });
            await this.prisma.image.delete({
              where: { id: imageable.image_id }
            });
          })
        );

        // Create new images
        await Promise.all(
          imagenes.map(async (url) => {
            const image = await this.prisma.image.create({
              data: { url }
            });

            await this.prisma.imageable.create({
              data: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: updatedPaquete.id,
                image_id: image.id
              }
            });
          })
        );
      }

      return this.findOne(updatedPaquete.id);
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al actualizar el paquete turístico');
    }
  }

  async remove(id: number) {
    try {
      if (!id || isNaN(Number(id))) {
        throw new BadRequestException('ID inválido');
      }

      const paquete = await this.findOne(id);
      if (!paquete) {
        throw new NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
      }

      // Delete associated records first
      await this.prisma.servicioPaquete.deleteMany({
        where: { paqueteTuristicoId: Number(id) }
      });

      await this.prisma.favoritoPaqueteTuristico.deleteMany({
        where: { paqueteTuristicoId: Number(id) }
      });

      const imageables = await this.prisma.imageable.findMany({
        where: {
          imageable_type: this.IMAGEABLE_TYPE,
          imageable_id: Number(id)
        }
      });

      await Promise.all(
        imageables.map(async (imageable) => {
          await this.prisma.imageable.delete({
            where: { id: imageable.id }
          });
          await this.prisma.image.delete({
            where: { id: imageable.image_id }
          });
        })
      );

      // Delete the paquete
      return this.prisma.paqueteTuristico.delete({
        where: { id: Number(id) }
      });
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al eliminar el paquete turístico');
    }
  }

  async updateEstado(id: number, estado: string) {
    if (!['activo', 'inactivo'].includes(estado)) {
      throw new BadRequestException('Estado inválido. Debe ser "activo" o "inactivo"');
    }

    try {
      return await this.prisma.paqueteTuristico.update({
        where: { id: Number(id) },
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
          in: addServiciosDto.servicioIds,
        },
      },
    });

    if (servicios.length !== addServiciosDto.servicioIds.length) {
      throw new BadRequestException('Uno o más servicios no existen');
    }

    return this.prisma.paqueteTuristico.update({
      where: { id: Number(id) },
      data: {
        servicios: {
          create: addServiciosDto.servicioIds.map((servicioId, index) => ({
            servicioId,
            orden: index + 1,
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
        paqueteTuristicoId: Number(id),
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
                  paqueteTuristicoId: Number(id),
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
        servicioId: {
          in: paquete.servicios.map((s: any) => s.servicioId),
        },
      },
      include: {
        usuario: true,
      },
    });

    const totalReservas = reservas.length;
    const totalIngresos = reservas.reduce((sum, reserva) => sum + Number(reserva.precioTotal), 0);
    const promedioCalificacion = resenas.length > 0
      ? resenas.reduce((sum, resena) => sum + resena.calificacion, 0) / resenas.length
      : 0;
    const totalResenas = resenas.length;

    const serviciosPopulares = await this.prisma.servicioPaquete.groupBy({
      by: ['servicioId'],
      where: {
        paqueteTuristicoId: Number(id),
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
                  paqueteTuristicoId: Number(id),
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
      totalResenas,
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
                  paqueteTuristicoId: Number(id),
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
        usuario: {
          include: {
            persona: true,
          },
        },
      },
    });

    const resenas = await this.prisma.resena.findMany({
      where: {
        servicioId: {
          in: paquete.servicios.map((s: any) => s.servicioId),
        },
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

  async addFavorite(paqueteId: number, userId: number) {
    try {
      if (!paqueteId || isNaN(Number(paqueteId))) {
        throw new BadRequestException('ID de paquete inválido');
      }

      const paquete = await this.findOne(paqueteId);
      if (!paquete) {
        throw new NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
      }

      const existingFavorite = await this.prisma.favoritoPaqueteTuristico.findFirst({
        where: {
          paqueteTuristicoId: Number(paqueteId),
          usuarioId: userId
        }
      });

      if (existingFavorite) {
        throw new BadRequestException('El paquete ya está en favoritos');
      }

      return this.prisma.favoritoPaqueteTuristico.create({
        data: {
          paqueteTuristicoId: Number(paqueteId),
          usuarioId: userId
        }
      });
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al agregar el paquete a favoritos');
    }
  }

  async removeFavorite(paqueteId: number, userId: number) {
    try {
      if (!paqueteId || isNaN(Number(paqueteId))) {
        throw new BadRequestException('ID de paquete inválido');
      }

      const paquete = await this.findOne(paqueteId);
      if (!paquete) {
        throw new NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
      }

      const favorite = await this.prisma.favoritoPaqueteTuristico.findFirst({
        where: {
          paqueteTuristicoId: Number(paqueteId),
          usuarioId: userId
        }
      });

      if (!favorite) {
        throw new BadRequestException('El paquete no está en favoritos');
      }

      return this.prisma.favoritoPaqueteTuristico.delete({
        where: { id: favorite.id }
      });
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al eliminar el paquete de favoritos');
    }
  }

  async findFavorites(userId: number) {
    console.log('✅ Servicio - Recibido userId para favoritos:', userId);

    // Obtener solo los IDs de los paquetes turísticos favoritos del usuario
    const favoritosPaqueteTuristico = await this.prisma.favoritoPaqueteTuristico.findMany({
      where: { usuarioId: userId },
      select: { paqueteTuristicoId: true },
    });

    const paqueteIds = favoritosPaqueteTuristico.map(fav => fav.paqueteTuristicoId);

    console.log('📦 Servicio - IDs de paquetes turísticos favoritos obtenidos:', paqueteIds);

    // Si no hay paquetes turísticos favoritos, retornar un array vacío
    if (paqueteIds.length === 0) {
      return [];
    }

    // Obtener los paquetes turísticos correspondientes usando findMany con la cláusula 'in'
    const paquetes = await this.prisma.paqueteTuristico.findMany({
      where: { id: { in: paqueteIds } },
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

    console.log('📦 Servicio - Paquetes turísticos favoritos obtenidos:', paquetes);

    // Mapear los resultados para incluir las imágenes
    return Promise.all(
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
  }

  async getFavoritos() {
    return this.prisma.favoritoPaqueteTuristico.findMany();
  }
  async getFavoritosPaqueteTuristico(paqueteTuristicoId: number) {
    return this.prisma.favoritoPaqueteTuristico.findMany({
      where: { paqueteTuristicoId },
    });
  }

  async getFavoritosUsuario(usuarioId: number) {
    return this.prisma.favoritoPaqueteTuristico.findMany({
      where: { usuarioId },
    });
  }
  async getFavoritosPaqueteTuristicoPorUsuario(usuarioId: number, paqueteTuristicoId: number) {
    return this.prisma.favoritoPaqueteTuristico.findUnique({
      where: {
        usuarioId_paqueteTuristicoId: {
          usuarioId,
          paqueteTuristicoId,
        },
      },
    });
  }

  async getFavoritosPaqueteTuristicoPorUsuarioId(usuarioId: number) {
    return this.prisma.favoritoPaqueteTuristico.findMany({
      where: { usuarioId },
    }); 
  }

  async getFavoritosPaqueteTuristicoPorPaqueteTuristicoId(paqueteTuristicoId: number) {
    return this.prisma.favoritoPaqueteTuristico.findMany({
      where: { paqueteTuristicoId },
    });
  }

  async getFavoritosPaqueteTuristicoPorUsuarioIdYPaqueteTuristicoId(usuarioId: number, paqueteTuristicoId: number) {
    return this.prisma.favoritoPaqueteTuristico.findUnique({
      where: {
        usuarioId_paqueteTuristicoId: {
          usuarioId,
          paqueteTuristicoId,
        },
      },
    });
  }
  async getTopFavoritos() {
    return this.prisma.favoritoPaqueteTuristico.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        paqueteTuristico: {
          include: {
            emprendimiento: true,
            servicios: {
              include: {
                servicio: true,
              },
            },
          },
        },
      },
    });
  }
}

