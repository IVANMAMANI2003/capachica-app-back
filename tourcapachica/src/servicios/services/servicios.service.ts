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

  /**
   * Crea un servicio y lo asocia al emprendimiento indicado.
   */
  async create(
    createServicioDto: CreateServicioDto,
    emprendimientoId: number
  ) {
    if (!emprendimientoId) {
      throw new BadRequestException('No hay emprendimiento activo');
    }

    const { imagenes, ...servicioData } = createServicioDto;

    const servicio = await this.prisma.$transaction(async (tx) => {
      const creado = await tx.servicio.create({
        data: {
          ...servicioData,
          moneda: servicioData.moneda || 'PEN',
          estado: servicioData.estado || 'activo',
          serviciosEmprendedores: {
            create: { emprendimientoId }
          }
        }
      });

      if (imagenes?.length) {
        for (const img of imagenes) {
          const filePath = `${creado.id}/${Date.now()}-${img.url.split('/').pop()}`;
          const { data, error } = await this.supabaseService.uploadFile(
            this.BUCKET_NAME,
            filePath,
            img.url
          );
          if (error) throw new BadRequestException(`Error al subir la imagen: ${error.message}`);

          const imageDb = await tx.image.create({ data: { url: data.path } });
          await tx.imageable.create({
            data: {
              image_id:       imageDb.id,
              imageable_id:   creado.id,
              imageable_type: this.IMAGEABLE_TYPE
            }
          });
        }
      }

      return creado;
    });

    return this.findOne(servicio.id);
  }

  /**
   * Obtiene todos los servicios (públicos).
   */
  async findAll() {
    const servicios = await this.prisma.servicio.findMany({
      include: {
        tipoServicio: true,
        serviciosEmprendedores: {
          select: {
            emprendimientoId: true
          }
        }
      }
    });
  
    return Promise.all(
      servicios.map(async (s) => {
        const imgs = await this.prisma.imageable.findMany({
          where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: s.id },
          include: { image: true }
        });
  
        return {
          ...s,
          imagenes: imgs.map(i => ({ id: i.image.id, url: i.image.url }))
        };
      })
    );
  }
  

  /**
   * Obtiene un servicio por su ID.
   */
  async findOne(id: number) {
    const servicio = await this.prisma.servicio.findUnique({
      where: { id },
      include: {
        tipoServicio: true,
        serviciosEmprendedores: {
          select: {
            emprendimientoId: true
          }
        }
      }
    });
  
    if (!servicio) throw new NotFoundException(`Servicio ${id} no encontrado`);
  
    const imgs = await this.prisma.imageable.findMany({
      where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: id },
      include: { image: true }
    });
  
    return {
      ...servicio,
      imagenes: imgs.map(i => ({ id: i.image.id, url: i.image.url }))
    };
  }

  /**
   * Obtiene servicios de un emprendimiento específico.
   */
  async findByEmprendimiento(emprendimientoId: number) {
    return this.prisma.servicio.findMany({
      where: { serviciosEmprendedores: { some: { emprendimientoId } } },
      include: {
        tipoServicio: true,
        serviciosEmprendedores: { include: { emprendimiento: true } }
      }
    });
  }

  /**
   * Actualiza un servicio solo si pertenece al emprendimiento autenticado.
   */
  async update(
    id: number,
    updateDto: UpdateServicioDto,
    emprendimientoId: number
  ) {
    // Validar existencia y pertenencia
    const relation = await this.prisma.servicioEmprendedor.findFirst({
      where: { servicioId: id, emprendimientoId }
    });
    if (!relation) throw new NotFoundException('Servicio no encontrado para este emprendimiento');

    const { imagenes, ...servicioData } = updateDto;
    await this.prisma.servicio.update({ where: { id }, data: servicioData });

    if (imagenes) {
      const old = await this.prisma.imageable.findMany({
        where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: id },
        include: { image: true }
      });
      for (const item of old) {
        await this.supabaseService.deleteFile(this.BUCKET_NAME, item.image.url);
        await this.prisma.imageable.delete({ where: { id: item.id } });
        await this.prisma.image.delete({ where: { id: item.image.id } });
      }
      for (const img of imagenes) {
        const filePath = `${id}/${Date.now()}-${img.url.split('/').pop()}`;
        const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, img.url);
        if (error) throw new BadRequestException(`Error al subir imagen: ${error.message}`);
        const imageDb = await this.prisma.image.create({ data: { url: data.path } });
        await this.prisma.imageable.create({ data: {
          image_id:       imageDb.id,
          imageable_id:   id,
          imageable_type: this.IMAGEABLE_TYPE
        }});
      }
    }

    return this.findOne(id);
  }

  /**
   * Elimina un servicio solo si pertenece al emprendimiento autenticado.
   */
  async remove(
    id: number,
    emprendimientoId: number
  ) {
    const relation = await this.prisma.servicioEmprendedor.findFirst({
      where: { servicioId: id, emprendimientoId }
    });
    if (!relation) throw new NotFoundException('Servicio no encontrado para este emprendimiento');

    const imgs = await this.prisma.imageable.findMany({
      where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: id },
      include: { image: true }
    });
    for (const item of imgs) {
      await this.supabaseService.deleteFile(this.BUCKET_NAME, item.image.url);
      await this.prisma.imageable.delete({ where: { id: item.id } });
      await this.prisma.image.delete({ where: { id: item.image.id } });
    }

    return this.prisma.servicio.delete({ where: { id } });
  }

  /**
   * Actualiza el estado de un servicio si pertenece al emprendimiento autenticado.
   */
  async updateEstado(
    id: number,
    estado: string,
    emprendimientoId: number
  ) {
    if (!['activo','inactivo'].includes(estado)) {
      throw new BadRequestException('Estado inválido');
    }
    const relation = await this.prisma.servicioEmprendedor.findFirst({
      where: { servicioId: id, emprendimientoId }
    });
    if (!relation) throw new NotFoundException('Servicio no encontrado para este emprendimiento');

    return this.prisma.servicio.update({
      where: { id },
      data: { estado },
      include: { tipoServicio: true, serviciosEmprendedores:{ include:{ emprendimiento:true } } }
    });
  }


  async createDisponibilidad(dto: CreateServicioDisponibilidadDto) {
    const srv = await this.prisma.servicio.findUnique({ where:{ id:dto.servicioId }});
    if (!srv) throw new NotFoundException(`Servicio ${dto.servicioId} no encontrado`);
    return this.prisma.servicioDisponibilidad.create({ data: {
      servicioId:     dto.servicioId,
      fechaInicio:    new Date(dto.fechaInicio),
      fechaFin:       new Date(dto.fechaFin),
      cuposDisponibles: dto.cuposDisponibles,
      precioEspecial: dto.precioEspecial
    }});
  }

  async createDisponibilidades(list: CreateServicioDisponibilidadDto[]) {
    const ids = [...new Set(list.map(d=>d.servicioId))];
    const found = await this.prisma.servicio.findMany({ where:{ id:{ in:ids }}});
    if (found.length!==ids.length) {
      const miss = ids.filter(id=>!found.map(f=>f.id).includes(id));
      throw new NotFoundException(`Servicios no encontrados: ${miss.join(',')}`);
    }
    return this.prisma.servicioDisponibilidad.createMany({ data: list.map(d=>({
      servicioId: d.servicioId,
      fechaInicio: new Date(d.fechaInicio),
      fechaFin:    new Date(d.fechaFin),
      cuposDisponibles: d.cuposDisponibles,
      precioEspecial:  d.precioEspecial
    })) });
  }

  async getDisponibilidad(servicioId: number) {
    const srv = await this.prisma.servicio.findUnique({ where:{ id:servicioId }});
    if (!srv) throw new NotFoundException(`Servicio ${servicioId} no encontrado`);
    return this.prisma.servicioDisponibilidad.findMany({
      where:{ servicioId }, orderBy:{ fechaInicio:'asc' }
    });
  }

  async getDisponibilidadByFecha(servicioId: number, fechaInicio: string) {
    const srv = await this.prisma.servicio.findUnique({ where:{ id:servicioId }});
    if (!srv) throw new NotFoundException(`Servicio ${servicioId} no encontrado`);
    const disp = await this.prisma.servicioDisponibilidad.findFirst({
      where:{ servicioId, fechaInicio:new Date(fechaInicio) }
    });
    if (!disp) throw new NotFoundException(`Sin disponibilidad para fecha ${fechaInicio}`);
    return disp;
  }

  async findByTipoServicio(tipoServicioId: number) {
    const servicios = await this.prisma.servicio.findMany({ where:{ tipoServicioId }, include:{ tipoServicio:true }});
    return Promise.all(
      servicios.map(async (s)=>{
        const imgs = await this.prisma.imageable.findMany({
          where:{ imageable_type:this.IMAGEABLE_TYPE, imageable_id:s.id },
          include:{ image:true }
        });
        return { ...s, imagenes: imgs.map(i=>({ id:i.image.id, url:i.image.url })) };
      })
    );
  }
}
