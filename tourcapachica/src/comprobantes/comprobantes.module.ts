import { Module } from '@nestjs/common';
import { ComprobanteController } from './controllers/comprobante.controller';
import { ComprobanteService } from './services/comprobante.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { SupabaseModule } from '@/supabase/supabase.module';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [ComprobanteController],
  providers: [ComprobanteService],
  exports: [ComprobanteService],
})
export class ComprobantesModule {}