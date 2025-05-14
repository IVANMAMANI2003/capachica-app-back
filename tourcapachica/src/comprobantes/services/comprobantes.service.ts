import { PrismaService } from "@/prisma/prisma.service";
import { CreateComprobanteDto } from "../dto/create-comprobante.dto";
import { UpdateComprobanteDto } from "../dto/update-comprobante.dto";
import { Payment } from "@/payments/entities/payment.entity";
import { Injectable } from "@nestjs/common";
import { Comprobante } from "@prisma/client";

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
    const montoTotal = Number(payment.montoTotal); // 👈 Conversión aquí
    const igv = this.calculateIgv(montoTotal);
    const comprobante = await this.prisma.comprobante.create({
      data: {
        pagoId: payment.id,
        tipoComprobante: 'Factura',
        serie: 'F001',
        numero: await this.getNextNumero(),
        rucCliente: payment.datosMetodoPago?.rucCliente ?? null,
        razonSocial: payment.datosMetodoPago?.razonSocial ?? null,
        direccionCliente: payment.datosMetodoPago?.direccion ?? null,
        subtotal: montoTotal - igv, // 👈 Usamos montoTotal convertido
        igv,
        total: montoTotal,
      }
    });
  
    return comprobante;
  }
  

  // CRUD
  async create(data: CreateComprobanteDto) {
    return this.prisma.comprobante.create({ data });
  }

  async findAll() {
    return this.prisma.comprobante.findMany();
  }

  async findOne(id: number) {
    return this.prisma.comprobante.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateComprobanteDto) {
    return this.prisma.comprobante.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.comprobante.delete({ where: { id } });
  }

  private async getNextNumero(): Promise<number> {
    const ultimo = await this.prisma.comprobante.findFirst({
      orderBy: { numero: 'desc' },
      select: { numero: true },
      where: { serie: 'F001' }
    });
    return ultimo ? ultimo.numero + 1 : 1;
  }

  private calculateIgv(total: number): number {
    return parseFloat((total * 0.18).toFixed(2));
  }
}
