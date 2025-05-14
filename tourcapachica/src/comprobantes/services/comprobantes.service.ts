import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateComprobanteDto } from '../dto/create-comprobante.dto';
import { UpdateComprobanteDto } from '../dto/update-comprobante.dto';
import { Comprobante } from '@prisma/client';

@Injectable()
export class ComprobantesService {
  constructor(private prisma: PrismaService) {}

  // Generar comprobante automáticamente al completar el pago
  async generateAutomaticComprobante(payment: {
    id: number;
    montoTotal: number;
    datosMetodoPago?: {
      rucCliente?: string;
      razonSocial?: string;
      direccion?: string;
    };
  }): Promise<Comprobante> {
    const total = Number(payment.montoTotal);
    const isFactura = !!payment.datosMetodoPago?.rucCliente;
    const tipoComprobante = isFactura ? 'Factura' : 'Boleta';
    const serie = isFactura ? 'F001' : 'B001';
    const numero = await this.getNextNumero(serie);

    const subtotal = isFactura ? +(total / 1.18).toFixed(2) : total;
    const igv = isFactura ? +(total - subtotal).toFixed(2) : 0;

    return this.prisma.comprobante.create({
      data: {
        pagoId: payment.id,
        tipoComprobante,
        serie,
        numero,
        rucCliente: payment.datosMetodoPago?.rucCliente ?? null,
        razonSocial: payment.datosMetodoPago?.razonSocial ?? null,
        direccionCliente: payment.datosMetodoPago?.direccion ?? null,
        subtotal,
        igv,
        total,
      },
    });
  }

  // Crear comprobante manualmente
  async create(data: CreateComprobanteDto) {
    return this.prisma.comprobante.create({ data });
  }

  // Validar unicidad de comprobante
  async validateComprobanteUniqueness(serie: string, numero: number) {
    const comprobante = await this.prisma.comprobante.findUnique({
      where: { serie_numero: { serie, numero } },
    });

    if (comprobante) {
      throw new Error('La combinación de serie y número ya existe');
    }
  }

  // Obtener todos los comprobantes
  async findAll() {
    return this.prisma.comprobante.findMany();
  }

  // Obtener comprobante por ID
  async findOne(id: number) {
    return this.prisma.comprobante.findUnique({ where: { id } });
  }

  // Actualizar comprobante
  async update(id: number, data: UpdateComprobanteDto) {
    return this.prisma.comprobante.update({ where: { id }, data });
  }

  // Eliminar comprobante
  async remove(id: number) {
    return this.prisma.comprobante.delete({ where: { id } });
  }

  // Obtener el siguiente número correlativo
  private async getNextNumero(serie: string): Promise<number> {
    const ultimo = await this.prisma.comprobante.findFirst({
      orderBy: { numero: 'desc' },
      select: { numero: true },
      where: { serie },
    });
    return ultimo ? ultimo.numero + 1 : 1;
  }
}
