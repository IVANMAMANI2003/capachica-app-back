import { Module } from '@nestjs/common';
import { ReservaService } from './services/reserva.service';
import { ItinerarioReservaService } from './services/itinerario-reserva.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { SupabaseModule } from '@/supabase/supabase.module';
import { ReservaController } from './controllers/reserva.controller';
import { ItinerarioReservaController } from './controllers/itinerario-reserva.controller';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [ReservaController, ItinerarioReservaController],
  providers: [ReservaService, ItinerarioReservaService],
  exports: [ReservaService, ItinerarioReservaService],
})
export class ReservasModule {}