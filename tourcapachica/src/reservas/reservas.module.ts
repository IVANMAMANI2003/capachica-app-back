import { Module } from '@nestjs/common';
import { ReservaService } from './services/reserva.service';
import { ItinerarioReservaService } from './services/itinerario-reserva.service';

@Module({
  providers: [ReservaService, ItinerarioReservaService],
  exports: [ReservaService, ItinerarioReservaService],
})
export class ReservasModule {}