import { PrismaService } from '../prisma/prisma.service';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PromedioResponseDto } from './dto/promedio-response.dto';

@Injectable()
export class ResenasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createResenaDto: any) {
    return this.prisma.resena.create({
      data: {
        servicioId: createResenaDto.servicioId,
        calificacion: createResenaDto.calificacion,
        comentario: createResenaDto.comentario,
        usuarioId: createResenaDto.usuarioId // Este campo lo añade el controlador
        // No incluyas 'estado' aquí si quieres que use el valor por defecto de la base de datos
      }
    });
  }

  async findAll() {
    return this.prisma.resena.findMany();
  }

  async findOne(id: number) {
    const resena = await this.prisma.resena.findUnique({ where: { id } });
    if (!resena) throw new NotFoundException('Reseña no encontrada');
    return resena;
  }

  async update(id: number, updateResenaDto: UpdateResenaDto) {
    await this.findOne(id);
    return this.prisma.resena.update({ where: { id }, data: updateResenaDto });
  }

  async updateEstado(id: number, estado: string) {  
    const updated = await this.prisma.resena.update({
      where: { id },
      data: { estado },
    });
    return updated;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.resena.delete({ where: { id } });
  }

  async promedioCalificacionPorServicio(servicioId: number): Promise<PromedioResponseDto> {
    const resenas = await this.prisma.resena.findMany({ where: { servicioId } });
    const totalResenas = resenas.length;
    const promedioCalificacion = totalResenas > 0 ? resenas.reduce((sum, r) => sum + r.calificacion, 0) / totalResenas : 0;
    return { promedioCalificacion, totalResenas };
  }



}