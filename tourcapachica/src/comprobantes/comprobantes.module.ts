import { Module } from '@nestjs/common';
import { ComprobantesController } from './controllers/comprobantes.controller';
import { ComprobantesService } from './services/comprobantes.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ComprobantesController],
  providers: [ComprobantesService],
  exports: [ComprobantesService],
})
export class ComprobantesModule {}