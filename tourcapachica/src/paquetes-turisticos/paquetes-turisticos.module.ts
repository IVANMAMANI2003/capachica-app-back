import { Module } from '@nestjs/common';
import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { PaquetesTuristicosController } from './paquetes-turisticos.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PaquetesTuristicosController],
  providers: [PaquetesTuristicosService, PrismaService],
  exports: [PaquetesTuristicosService],
})
export class PaquetesTuristicosModule {} 