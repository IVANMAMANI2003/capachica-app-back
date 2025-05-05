import { Module } from '@nestjs/common';
import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { PaquetesTuristicosController } from './paquetes-turisticos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [PaquetesTuristicosController],
  providers: [PaquetesTuristicosService],
  exports: [PaquetesTuristicosService],
})
export class PaquetesTuristicosModule {} 