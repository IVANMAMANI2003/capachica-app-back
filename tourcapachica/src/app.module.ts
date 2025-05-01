import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SlidersModule } from './sliders/sliders.module';
import { EmprendimientosModule } from './emprendimientos/emprendimientos.module';
import { LugaresTuristicosModule } from './lugares-turisticos/lugares-turisticos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { PaquetesTuristicosModule } from './paquetes-turisticos/paquetes-turisticos.module';
import { ImagesModule } from './images/images.module';
import { SupabaseModule } from './supabase/supabase.module';
import { PaymentsModule } from './payments/payments.module';
import { ReservasModule } from './reservas/reservas.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    SlidersModule,
    EmprendimientosModule,
    LugaresTuristicosModule,
    ServiciosModule,
    PaquetesTuristicosModule,
    ImagesModule,
    ConfigModule,
    SupabaseModule,
    PaymentsModule,
    ReservasModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
