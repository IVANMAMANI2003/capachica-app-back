import { Module } from '@nestjs/common';
import { EmprendimientosService } from './emprendimientos.service';
import { EmprendimientosController } from './emprendimientos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmprendimientosController],
  providers: [EmprendimientosService],
  exports: [EmprendimientosService],
})
export class EmprendimientosModule {} 