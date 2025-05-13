import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ItinerariosReservaService } from './itinerarios-reserva.service';
import { ItinerariosReservaController } from './itinerarios-reserva.controller';


@Module({
  controllers: [ReservasController, ItinerariosReservaController, ],
  providers: [ReservasService, ItinerariosReservaService,  PrismaService],
  exports: [ReservasService, ItinerariosReservaService, ],
})
export class ReservasModule {} 