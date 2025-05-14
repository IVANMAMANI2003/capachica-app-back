import { Module } from '@nestjs/common';
import { PaymentController } from './controllers/payment.controller';
import { PaymentService } from './services/payment.service';
import { ComprobantesModule } from '@/comprobantes/comprobantes.module';

@Module({
  imports: [ComprobantesModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentsModule {}