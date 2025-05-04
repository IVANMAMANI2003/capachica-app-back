import { Module } from '@nestjs/common';
import { ServiciosService } from './services/servicios.service';
import { ServiciosController } from './controllers/servicios.controller';
import { TiposServicioService } from './services/tipos-servicio.service';
import { TiposServicioController } from './controllers/tipos-servicio.controller';
import { DisponibilidadService } from './services/disponibilidad.service';
import { DisponibilidadController } from './controllers/disponibilidad.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [
    ServiciosController,
    TiposServicioController,
    DisponibilidadController,
  ],
  providers: [
    ServiciosService,
    TiposServicioService,
    DisponibilidadService,
  ],
  exports: [
    ServiciosService,
    TiposServicioService,
    DisponibilidadService,
  ],
})
export class ServiciosModule {} 