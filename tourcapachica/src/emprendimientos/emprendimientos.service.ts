import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class EmprendimientosService {
  private readonly IMAGEABLE_TYPE = 'Emprendimiento';
  private readonly BUCKET_NAME = 'emprendimientos';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createEmprendimientoDto: CreateEmprendimientoDto) {
    const { imagenes, ...emprendimientoData } = createEmprendimientoDto;
    
    // Crear el emprendimiento
    const emprendimiento = await this.prisma.emprendimiento.create({
      data: {
        usuarioId: emprendimientoData.usuarioId,
        nombre: emprendimientoData.nombre,
        descripcion: emprendimientoData.descripcion,
        tipo: emprendimientoData.tipo,
        direccion: emprendimientoData.direccion,
        coordenadas: emprendimientoData.coordenadas,
        contactoTelefono: emprendimientoData.contactoTelefono,
        contactoEmail: emprendimientoData.contactoEmail,
        sitioWeb: emprendimientoData.sitioWeb,
        redesSociales: emprendimientoData.redesSociales,
        estado: emprendimientoData.estado || 'pendiente',
        fechaAprobacion: emprendimientoData.fechaAprobacion,
      },
    });

    // Crear las imágenes si existen
    if (imagenes && imagenes.length > 0) {
      for (const imagen of imagenes) {
        const filePath = `${emprendimiento.id}/${Date.now()}-${imagen.url.split('/').pop()}`;
        
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
        const image = await this.prisma.image.create({
          data: {
            url: data.path
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: image.id,
            imageable_id: emprendimiento.id,
            imageable_type: this.IMAGEABLE_TYPE
          }
        });
      }
    }

    return this.findOne(emprendimiento.id);
  }

  async findAll() {
    const emprendimientos = await this.prisma.emprendimiento.findMany({
      include: {
        usuario: {
          include: {
            persona: true
          }
        }
      }
    });
    
    const emprendimientosWithImages = await Promise.all(
      emprendimientos.map(async (emprendimiento) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: emprendimiento.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...emprendimiento, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return emprendimientosWithImages;
  }

  async findOne(id: number) {
    const emprendimiento = await this.prisma.emprendimiento.findUnique({
      where: { id },
      include: {
        usuario: {
          include: {
            persona: true
          }
        }
      }
    });

    if (!emprendimiento) {
      return null;
    }

    const imageables = await this.prisma.imageable.findMany({
      where: {
        imageable_type: this.IMAGEABLE_TYPE,
        imageable_id: emprendimiento.id,
      },
      include: {
        image: true
      }
    });

    return { 
      ...emprendimiento, 
      imagenes: imageables.map(imageable => ({
        id: imageable.image.id,
        url: imageable.image.url
      }))
    };
  }

  async findByUsuario(usuarioId: number) {
    const emprendimientos = await this.prisma.emprendimiento.findMany({
      where: { usuarioId },
      include: {
        usuario: {
          include: {
            persona: true
          }
        }
      }
    });

    const emprendimientosWithImages = await Promise.all(
      emprendimientos.map(async (emprendimiento) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: emprendimiento.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...emprendimiento, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return emprendimientosWithImages;
  }

  async update(id: number, updateEmprendimientoDto: UpdateEmprendimientoDto) {
    const { imagenes, ...emprendimientoData } = updateEmprendimientoDto;

    // Actualizar datos del emprendimiento
    await this.prisma.emprendimiento.update({
      where: { id },
      data: {
        nombre: emprendimientoData.nombre,
        descripcion: emprendimientoData.descripcion,
        tipo: emprendimientoData.tipo,
        direccion: emprendimientoData.direccion,
        coordenadas: emprendimientoData.coordenadas,
        contactoTelefono: emprendimientoData.contactoTelefono,
        contactoEmail: emprendimientoData.contactoEmail,
        sitioWeb: emprendimientoData.sitioWeb,
        redesSociales: emprendimientoData.redesSociales,
        estado: emprendimientoData.estado,
        fechaAprobacion: emprendimientoData.fechaAprobacion,
      },
    });

    // Si hay nuevas imágenes, eliminar las antiguas y crear las nuevas
    if (imagenes && imagenes.length > 0) {
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
        const image = await this.prisma.image.create({
          data: {
            url: data.path
          }
        });

        // Crear la relación imageable
        await this.prisma.imageable.create({
          data: {
            image_id: image.id,
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

    // Eliminar el emprendimiento
    await this.prisma.emprendimiento.delete({
      where: { id }
    });

    return { message: 'Emprendimiento eliminado exitosamente' };
  }

  async updateEstado(id: number, estado: string) {
    const emprendimiento = await this.prisma.emprendimiento.update({
      where: { id },
      data: { 
        estado,
        fechaAprobacion: estado === 'aprobado' ? new Date() : null
      }
    });

    if (!emprendimiento) {
      throw new NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
    }

    return emprendimiento;
  }

  async addFavorito(usuarioId: number, createFavoritoDto: CreateFavoritoDto) {
    const { emprendimientoId } = createFavoritoDto;

    // Verificar si el emprendimiento existe
    const emprendimiento = await this.prisma.emprendimiento.findUnique({
      where: { id: emprendimientoId }
    });

    if (!emprendimiento) {
      throw new NotFoundException(`Emprendimiento con ID ${emprendimientoId} no encontrado`);
    }

    // Verificar si ya existe el favorito
    const favoritoExistente = await this.prisma.favorito.findFirst({
      where: {
        usuarioId,
        emprendimientoId
      }
    });

    if (favoritoExistente) {
      throw new BadRequestException('El emprendimiento ya está marcado como favorito');
    }

    // Crear el favorito
    const favorito = await this.prisma.favorito.create({
      data: {
        usuarioId,
        emprendimientoId
      },
      include: {
        emprendimiento: true
      }
    });

    return favorito;
  }

  async removeFavorito(usuarioId: number, emprendimientoId: number) {
    const favorito = await this.prisma.favorito.findFirst({
      where: {
        usuarioId,
        emprendimientoId
      }
    });

    if (!favorito) {
      throw new NotFoundException('Favorito no encontrado');
    }

    await this.prisma.favorito.delete({
      where: { id: favorito.id }
    });

    return { message: 'Favorito eliminado exitosamente' };
  }

  async getFavoritos(usuarioId: number) {
    const favoritos = await this.prisma.favorito.findMany({
      where: { usuarioId },
      include: {
        emprendimiento: {
          include: {
            usuario: {
              include: {
                persona: true
              }
            }
          }
        }
      }
    });

    const favoritosWithImages = await Promise.all(
      favoritos.map(async (favorito) => {
        const imageables = await this.prisma.imageable.findMany({
          where: {
            imageable_type: this.IMAGEABLE_TYPE,
            imageable_id: favorito.emprendimiento.id,
          },
          include: {
            image: true
          }
        });
        return { 
          ...favorito.emprendimiento, 
          imagenes: imageables.map(imageable => ({
            id: imageable.image.id,
            url: imageable.image.url
          }))
        };
      })
    );

    return favoritosWithImages;
  }

  async isFavorito(usuarioId: number, emprendimientoId: number) {
    const favorito = await this.prisma.favorito.findFirst({
      where: {
        usuarioId,
        emprendimientoId
      }
    });

    return !!favorito;
  }
} 