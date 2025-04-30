import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComprobanteDto } from './dto/create-comprobante.dto';
import { UpdateComprobanteDto } from './dto/update-comprobante.dto';

@Injectable()
export class ComprobantesService {
  constructor(private prisma: PrismaService) {}

  async create(createComprobanteDto: CreateComprobanteDto) {
    // Verificar que el pago existe
    const pago = await this.prisma.pago.findUnique({
      where: { id: createComprobanteDto.pagoId },
    });

    if (!pago) {
      throw new NotFoundException('Pago no encontrado');
    }

    // Verificar que no existe otro comprobante para este pago
    const comprobanteExistente = await this.prisma.comprobante.findUnique({
      where: { pagoId: createComprobanteDto.pagoId },
    });

    if (comprobanteExistente) {
      throw new BadRequestException('Ya existe un comprobante para este pago');
    }

    // Verificar que la serie y número son únicos
    const serieNumeroExistente = await this.prisma.comprobante.findFirst({
      where: {
        serie: createComprobanteDto.serie,
        numero: createComprobanteDto.numero,
      },
    });

    if (serieNumeroExistente) {
      throw new BadRequestException('Ya existe un comprobante con esta serie y número');
    }

    // Crear el comprobante
    return this.prisma.comprobante.create({
      data: {
        pago: {
          connect: { id: createComprobanteDto.pagoId }
        },
        tipoComprobante: createComprobanteDto.tipo,
        serie: createComprobanteDto.serie,
        numero: createComprobanteDto.numero,
        rucCliente: createComprobanteDto.rucCliente,
        razonSocial: createComprobanteDto.razonSocial,
        direccionCliente: createComprobanteDto.direccionCliente,
        subtotal: createComprobanteDto.subtotal,
        igv: createComprobanteDto.igv,
        total: createComprobanteDto.total,
        moneda: createComprobanteDto.moneda || 'PEN',
        estado: createComprobanteDto.estado || 'emitido',
        codigoSunat: createComprobanteDto.codigoSunat,
        codigoHash: createComprobanteDto.codigoHash,
        xmlUrl: createComprobanteDto.xmlUrl,
        pdfUrl: createComprobanteDto.pdfUrl,
      },
      include: {
        pago: true,
      },
    });
  }

  async findAll() {
    return this.prisma.comprobante.findMany({
      include: {
        pago: true,
      },
    });
  }

  async findOne(id: number) {
    const comprobante = await this.prisma.comprobante.findUnique({
      where: { id },
      include: {
        pago: true,
      },
    });

    if (!comprobante) {
      throw new NotFoundException('Comprobante no encontrado');
    }

    return comprobante;
  }

  async findByPagoId(pagoId: number) {
    const comprobante = await this.prisma.comprobante.findUnique({
      where: { pagoId },
      include: {
        pago: true,
      },
    });

    if (!comprobante) {
      throw new NotFoundException('Comprobante no encontrado para este pago');
    }

    return comprobante;
  }

  async update(id: number, updateComprobanteDto: UpdateComprobanteDto) {
    await this.findOne(id);

    // Si se está actualizando la serie o número, verificar que no exista otro comprobante con la misma combinación
    if (updateComprobanteDto.serie && updateComprobanteDto.numero) {
      const serieNumeroExistente = await this.prisma.comprobante.findFirst({
        where: {
          serie: updateComprobanteDto.serie,
          numero: updateComprobanteDto.numero,
          id: { not: id }, // Excluir el comprobante actual
        },
      });

      if (serieNumeroExistente) {
        throw new BadRequestException('Ya existe un comprobante con esta serie y número');
      }
    }

    const { pagoId, ...data } = updateComprobanteDto;
    return this.prisma.comprobante.update({
      where: { id },
      data: {
        ...data,
        pago: pagoId ? { connect: { id: pagoId } } : undefined,
      },
      include: {
        pago: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.comprobante.delete({
      where: { id },
    });
  }

  async updateEstado(id: number, estado: string) {
    await this.findOne(id);
    return this.prisma.comprobante.update({
      where: { id },
      data: { estado },
      include: {
        pago: true,
      },
    });
  }
} 