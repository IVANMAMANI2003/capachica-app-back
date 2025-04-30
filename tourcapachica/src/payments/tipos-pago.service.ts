import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';

@Injectable()
export class TipoPagoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTipoPagoDto: CreateTipoPagoDto) {
    return this.prisma.tipoPago.create({
      data: {
        nombre: createTipoPagoDto.nombre,
        descripcion: createTipoPagoDto.descripcion,
        requiereVerificacion: createTipoPagoDto.requiereVerificacion,
        comisionPorcentaje: createTipoPagoDto.comisionPorcentaje,
        activo: createTipoPagoDto.activo,
      },
    });
  }

  async findAll() {
    return this.prisma.tipoPago.findMany({
      include: {
        pagoDetalles: true,
      },
    });
  }

  async findOne(id: number) {
    const tipoPago = await this.prisma.tipoPago.findUnique({
      where: { id },
      include: {
        pagoDetalles: true,
      },
    });

    if (!tipoPago) {
      throw new NotFoundException(`Tipo de pago con ID ${id} no encontrado`);
    }

    return tipoPago;
  }

  async update(id: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    await this.findOne(id);

    return this.prisma.tipoPago.update({
      where: { id },
      data: {
        nombre: updateTipoPagoDto.nombre,
        descripcion: updateTipoPagoDto.descripcion,
        requiereVerificacion: updateTipoPagoDto.requiereVerificacion,
        comisionPorcentaje: updateTipoPagoDto.comisionPorcentaje,
        activo: updateTipoPagoDto.activo,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.tipoPago.delete({
      where: { id },
    });
  }
} 