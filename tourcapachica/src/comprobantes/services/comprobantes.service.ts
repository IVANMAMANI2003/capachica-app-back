import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { UpdateComprobanteDto } from '../dto/update-comprobante.dto';
import { Comprobante, Prisma } from '@prisma/client';


@Injectable()
export class ComprobantesService {
  constructor(private prisma: PrismaService) {}


  private async getNextNumeroForSerie(serie: string): Promise<string> {
    const ultimo = await this.prisma.comprobante.findFirst({
      where: { serie },
      orderBy: { numero: 'desc' },
      select: { numero: true }
    });
  
    const numero = ultimo ? parseInt(ultimo.numero, 10) + 1 : 1;
    
    // Formatear el número con ceros a la izquierda para que tenga 7 dígitos
    return numero.toString().padStart(7, '0'); 
  }
  
  
  private getSeriePorTipo(tipo: 'Factura' | 'Boleta'): string {
    return tipo === 'Factura' ? 'F00001-' : 'B00001-';
  }
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
    const tipoComprobante = payment.datosMetodoPago?.rucCliente ? 'Factura' : 'Boleta';
    const serie = this.getSeriePorTipo(tipoComprobante);
    const numero = await this.getNextNumeroForSerie(serie); // Obtener el siguiente número para la serie
    const numeroFormateado = serie + numero; // Concatenar la serie con el número formateado

    const esFactura = tipoComprobante === 'Factura';
    const subtotal = esFactura ? +(total / 1.18).toFixed(2) : total;
    const igv = esFactura ? +(total - subtotal).toFixed(2) : 0;

    return this.prisma.comprobante.create({
      data: {
        pagoId: payment.id,
        tipoComprobante,
        serie,
        numero: numero,
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
  async create(data: Prisma.ComprobanteCreateInput) {
    return this.prisma.comprobante.create({ data });
  }

  // Validar unicidad de comprobante
  async validateComprobanteUniqueness(serie: string, numero: number) {
    const comprobante = await this.prisma.comprobante.findUnique({
      where: { serie_numero: { serie, numero: numero.toString() } },
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

}
