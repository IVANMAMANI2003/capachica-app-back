import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItinerarioReservaService {
  constructor(private readonly prisma: PrismaService) {}

  async createForReserva(reservaId: number) {
    // Logic to create itineraries for a given reservation
    // This is a placeholder implementation
    return this.prisma.itinerarioReserva.createMany({
      data: [{
        reservaId,
        servicioId: 1, // Example service ID
        fechaInicioActividad: new Date(),
        fechaFinActividad: new Date(),
        horaInicio: new Date(),
        horaFin: new Date(),
        lugarEncuentro: 'Default Location',
        observaciones: 'Default Observations',
        tipoEvento: 'Default Event',
        descripcion: 'Default Description',

      }],
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