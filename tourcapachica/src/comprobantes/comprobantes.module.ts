import { Module } from '@nestjs/common';
import { ComprobanteController } from './controllers/comprobante.controller';
import { ComprobanteService } from './services/comprobante.service';

@Module({
  controllers: [ComprobanteController],
  providers: [ComprobanteService],
})
export class ComprobantesModule {}