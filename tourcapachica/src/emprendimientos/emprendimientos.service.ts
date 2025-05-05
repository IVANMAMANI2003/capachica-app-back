import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito.dto';

@Injectable()
export class EmprendimientosService {
  private readonly IMAGEABLE_TYPE = 'Emprendimiento';

  constructor(
    private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async create(createEmprendimientoDto: CreateEmprendimientoDto, files?: Express.Multer.File[]) {
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
    if (files && files.length > 0) {
      for (const file of files) {
        // Subir la imagen a Supabase
        const imageUrl = await this.supabaseService.uploadFile(
          file,
          this.IMAGEABLE_TYPE,
          emprendimiento.id
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

  async update(id: number, updateEmprendimientoDto: UpdateEmprendimientoDto, files?: Express.Multer.File[]) {
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

    // Eliminar el emprendimiento
    return this.prisma.emprendimiento.delete({
      where: { id },
    });
  }

  async updateEstado(id: number, estado: string) {
    try {
      return await this.prisma.emprendimiento.update({
        where: { id },
        data: {
          estado,
          fechaAprobacion: estado === 'aprobado' ? new Date() : null,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
    }
  }

  // Métodos para favoritos
  async addFavorito(usuarioId: number, createFavoritoDto: CreateFavoritoDto) {
    // Verificar si el emprendimiento existe
    const emprendimiento = await this.prisma.emprendimiento.findUnique({
      where: { id: createFavoritoDto.emprendimientoId },
    });

    if (!emprendimiento) {
      throw new NotFoundException(`Emprendimiento con ID ${createFavoritoDto.emprendimientoId} no encontrado`);
    }

    // Verificar si ya existe un favorito para este emprendimiento
    const favoritoExistente = await this.prisma.favorito.findFirst({
      where: {
        emprendimientoId: createFavoritoDto.emprendimientoId,
        usuarioId: usuarioId,
      },
    });

    if (favoritoExistente) {
      throw new BadRequestException('Este emprendimiento ya está marcado como favorito');
    }

    // Crear el favorito
    return this.prisma.favorito.create({
      data: {
        emprendimientoId: createFavoritoDto.emprendimientoId,
        usuarioId: usuarioId,
        estado: 'activo',
      },
      include: {
        emprendimiento: true,
      },
    });
  }

  async removeFavorito(usuarioId: number, emprendimientoId: number) {
    // Verificar si el favorito existe
    const favorito = await this.prisma.favorito.findFirst({
      where: {
        emprendimientoId,
        usuarioId: usuarioId,
      },
    });

    if (!favorito) {
      throw new NotFoundException(`No se encontró un favorito para el emprendimiento con ID ${emprendimientoId}`);
    }

    // Eliminar el favorito
    return this.prisma.favorito.delete({
      where: {
        id: favorito.id,
      },
    });
  }

  async getFavoritos(usuarioId: number) {
    return this.prisma.favorito.findMany({
      where: {
        usuarioId: usuarioId,
      },
      include: {
        emprendimiento: {
          include: {
            usuario: {
              include: {
                persona: true,
              },
            },
          },
        },
      },
    });
  }

  async isFavorito(usuarioId: number, emprendimientoId: number) {
    const favorito = await this.prisma.favorito.findFirst({
      where: {
        emprendimientoId,
        usuarioId: usuarioId,
      },
    });

    return !!favorito;
  }
} 