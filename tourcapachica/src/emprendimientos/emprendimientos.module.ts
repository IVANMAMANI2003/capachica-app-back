import { Module } from '@nestjs/common';
import { EmprendimientosService } from './emprendimientos.service';
import { EmprendimientosController } from './emprendimientos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [EmprendimientosController],
  providers: [EmprendimientosService],
  exports: [EmprendimientosService],
})
export class EmprendimientosModule {} 