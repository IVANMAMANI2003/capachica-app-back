import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ItinerariosReservaService } from './itinerarios-reserva.service';
import { ItinerariosReservaController } from './itinerarios-reserva.controller';
import { ItinerariosLugarService } from './itinerarios-lugar.service';
import { ItinerariosLugarController } from './itinerarios-lugar.controller';

@Module({
  controllers: [ReservasController, ItinerariosReservaController, ItinerariosLugarController],
  providers: [ReservasService, ItinerariosReservaService, ItinerariosLugarService, PrismaService],
  exports: [ReservasService, ItinerariosReservaService, ItinerariosLugarService],
})
export class ReservasModule {} 