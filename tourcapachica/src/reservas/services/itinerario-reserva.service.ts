import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateItinerarioReservaDto } from '../dto/create-itinerario-reserva.dto';

@Injectable()
export class ItinerarioReservaService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear múltiples itinerarios personalizados
  async createMany(reservaId: number, itinerarios: CreateItinerarioReservaDto[]) {
    const data = itinerarios.map(itinerario => ({
      reservaId,
      servicioId: itinerario.servicioId,
      fechaInicioActividad: itinerario.fechaInicioActividad,
      fechaFinActividad: itinerario.fechaFinActividad,
      lugarEncuentro: itinerario.lugarEncuentro,
      observaciones: itinerario.observaciones,
      tipoEvento: itinerario.tipoEvento,
      descripcion: itinerario.descripcion,
    }));

    return this.prisma.itinerarioReserva.createMany({
      data,
    });
  }

  findAll() {
    return this.prisma.itinerarioReserva.findMany();
  }

  findOne(id: number) {
    return this.prisma.itinerarioReserva.findUnique({
      where: { id },
    });
  }

  update(id: number, updateItinerarioReservaDto: any) {
    return this.prisma.itinerarioReserva.update({
      where: { id },
      data: updateItinerarioReservaDto,
    });
  }

  remove(id: number) {
    return this.prisma.itinerarioReserva.delete({
      where: { id },
    });
  }
}
