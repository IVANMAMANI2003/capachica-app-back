import { Module } from '@nestjs/common';
import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { PaquetesTuristicosController } from './paquetes-turisticos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PaquetesTuristicosController],
  providers: [PaquetesTuristicosService],
  exports: [PaquetesTuristicosService],
})
export class PaquetesTuristicosModule {} 