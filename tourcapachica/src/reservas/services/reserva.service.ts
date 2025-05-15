import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservaDto } from '../dto/create-reserva.dto';
import { UpdateReservaDto } from '../dto/update-reserva.dto';
import { ItinerarioReservaService } from './itinerario-reserva.service';

@Injectable()
export class ReservaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly itinerarioReservaService: ItinerarioReservaService,
  ) {}

  private generarCodigoReserva(): string {
    const prefix = 'RES';
    const date = new Date();
    const yyyyMMdd = date.toISOString().slice(0, 10).replace(/-/g, '');
    const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
                    String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const numbers = Math.floor(1000 + Math.random() * 9000).toString();
    return `${prefix}-${yyyyMMdd}-${letters}${numbers}`;
  }

  async create(createReservaDto: CreateReservaDto) {
    const codigoReserva = this.generarCodigoReserva();
    const reserva = await this.prisma.reserva.create({
      data:{
        ...createReservaDto,
        codigoReserva,
        fechaReserva: new Date(createReservaDto.fechaReserva),
        fechaInicio: new Date(createReservaDto.fechaInicio),
        fechaFin: new Date(createReservaDto.fechaFin),
        fechaCancelacion: new Date(createReservaDto.fechaCancelacion),
      } ,
    });
    return reserva;
  }

  findAll() {
    return this.prisma.reserva.findMany();
  }

  findOne(id: number) {
    return this.prisma.reserva.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReservaDto: UpdateReservaDto) {
    return this.prisma.reserva.update({
      where: { id },
      data: updateReservaDto,
    });
  }

  remove(id: number) {
    return this.prisma.reserva.delete({
      where: { id },
    });
  }
}