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

  async create(createReservaDto: CreateReservaDto) {
    const reserva = await this.prisma.reserva.create({
      data:{
        ...createReservaDto,
        fechaReserva: new Date(createReservaDto.fechaReserva),
        fechaInicio: new Date(createReservaDto.fechaInicio),
        fechaFin: new Date(createReservaDto.fechaFin),
      } ,
    });
    await this.itinerarioReservaService.createForReserva(reserva.id);
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