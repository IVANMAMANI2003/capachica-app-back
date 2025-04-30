import { Module } from '@nestjs/common';
import { LugaresTuristicosService } from './lugares-turisticos.service';
import { LugaresTuristicosController } from './lugares-turisticos.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [LugaresTuristicosController],
  providers: [LugaresTuristicosService, PrismaService],
  exports: [LugaresTuristicosService],
})
export class LugaresTuristicosModule {} 