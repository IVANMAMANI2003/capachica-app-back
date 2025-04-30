import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePagoDetalleDto } from './dto/create-pago-detalle.dto';
import { UpdatePagoDetalleDto } from './dto/update-pago-detalle.dto';

@Injectable()
export class PagoDetalleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPagoDetalleDto: CreatePagoDetalleDto) {
    return this.prisma.pagoDetalle.create({
      data: {
        pagoId: createPagoDetalleDto.pagoId,
        tipoPagoId: createPagoDetalleDto.tipoPagoId,
        concepto: createPagoDetalleDto.concepto,
        monto: createPagoDetalleDto.monto,
        porcentajeImpuesto: createPagoDetalleDto.porcentajeImpuesto,
        cantidad: createPagoDetalleDto.cantidad,
        descripcion: createPagoDetalleDto.descripcion,
      },
      include: {
        pago: true,
        tipoPago: true,
      },
    });
  }

  async findAll() {
    return this.prisma.pagoDetalle.findMany({
      include: {
        pago: true,
        tipoPago: true,
      },
    });
  }

  async findOne(id: number) {
    const pagoDetalle = await this.prisma.pagoDetalle.findUnique({
      where: { id },
      include: {
        pago: true,
        tipoPago: true,
      },
    });

    if (!pagoDetalle) {
      throw new NotFoundException(`Detalle de pago con ID ${id} no encontrado`);
    }

    return pagoDetalle;
  }

  async findByPagoId(pagoId: number) {
    return this.prisma.pagoDetalle.findMany({
      where: { pagoId },
      include: {
        tipoPago: true,
      },
    });
  }

  async update(id: number, updatePagoDetalleDto: UpdatePagoDetalleDto) {
    await this.findOne(id);

    return this.prisma.pagoDetalle.update({
      where: { id },
      data: {
        concepto: updatePagoDetalleDto.concepto,
        monto: updatePagoDetalleDto.monto,
        porcentajeImpuesto: updatePagoDetalleDto.porcentajeImpuesto,
        cantidad: updatePagoDetalleDto.cantidad,
        descripcion: updatePagoDetalleDto.descripcion,
      },
      include: {
        pago: true,
        tipoPago: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pagoDetalle.delete({
      where: { id },
    });
  }
} 