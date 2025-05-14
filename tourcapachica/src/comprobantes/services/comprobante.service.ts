import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComprobanteService {
  constructor(private prisma: PrismaService) {}

  async createComprobante(pagoId: number, total: number, rucCliente?: string) {
    const pago = await this.prisma.pago.findUnique({
      where: { id: pagoId },
    });

    if (!pago || pago.estado !== 'completado') {
      throw new Error('Pago no encontrado o no está completado');
    }

    const tipoComprobante = rucCliente ? 'factura' : 'boleta';
    const serie = rucCliente ? 'F001' : 'B001';

    const ultimoComprobante = await this.prisma.comprobante.findFirst({
      where: { serie },
      orderBy: { numero: 'desc' },
    });

    const numero = ultimoComprobante ? ultimoComprobante.numero + 1 : 1;

    const igv = tipoComprobante === 'factura' ? total * 0.18 : 0;
    const subtotal = tipoComprobante === 'factura' ? total / 1.18 : total;

    return this.prisma.comprobante.create({
      data: {
        pagoId,
        tipoComprobante,
        serie,
        numero,
        subtotal,
        igv,
        total,
      },
    });
  }

  async validateComprobanteUniqueness(serie: string, numero: number) {
    const comprobante = await this.prisma.comprobante.findUnique({
      where: { serie_numero: { serie, numero } },
    });

    if (comprobante) {
      throw new Error('La combinación de serie y número ya existe');
    }
  }
}