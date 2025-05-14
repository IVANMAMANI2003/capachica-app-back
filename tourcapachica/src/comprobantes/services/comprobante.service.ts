import { Injectable } from '@nestjs/common';
import { ComprobanteDto } from '../dto/comprobante.dto';
import { Comprobante } from '../entities/comprobante.entity';

@Injectable()
export class ComprobanteService {
  private comprobantes: Comprobante[] = [];

  create(comprobanteDto: ComprobanteDto): Comprobante {
    const newComprobante: Comprobante = {
      id: this.comprobantes.length + 1,
      ...comprobanteDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.comprobantes.push(newComprobante);
    return newComprobante;
  }

  findAll(): Comprobante[] {
    return this.comprobantes;
  }

  findOne(id: number): Comprobante | undefined {
    return this.comprobantes.find(comprobante => comprobante.id === id);
  }

  update(id: number, updateComprobanteDto: Partial<ComprobanteDto>): Comprobante | undefined {
    const comprobante = this.findOne(id);
    if (comprobante) {
      Object.assign(comprobante, updateComprobanteDto, { updatedAt: new Date() });
    }
    return comprobante;
  }

  remove(id: number): void {
    this.comprobantes = this.comprobantes.filter(comprobante => comprobante.id !== id);
  }
}