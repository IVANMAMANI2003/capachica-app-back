import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PrismaService } from '../prisma/prisma.service';
import { TipoPagoService } from './tipos-pago.service';
import { TipoPagoController } from './tipos-pago.controller';
import { PagoDetalleService } from './pago-detalle.service';
import { PagoDetalleController } from './pago-detalle.controller';
import { ComprobantesService } from './comprobantes.service';
import { ComprobantesController } from './comprobantes.controller';
import { ReservasModule } from '../reservas/reservas.module';

@Module({
  imports: [ReservasModule],
  controllers: [PaymentsController, TipoPagoController, PagoDetalleController, ComprobantesController],
  providers: [PaymentsService, TipoPagoService, PagoDetalleService, ComprobantesService, PrismaService],
  exports: [PaymentsService, TipoPagoService, PagoDetalleService, ComprobantesService],
})
export class PaymentsModule {} 