import { Module } from '@nestjs/common';
import { LugaresTuristicosService } from './lugares-turisticos.service';
import { LugaresTuristicosController } from './lugares-turisticos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [LugaresTuristicosController],
  providers: [LugaresTuristicosService],
  exports: [LugaresTuristicosService]
})
export class LugaresTuristicosModule {} 