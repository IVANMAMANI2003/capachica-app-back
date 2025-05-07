import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SlidersModule } from './sliders/sliders.module';
import { EmprendimientosModule } from './emprendimientos/emprendimientos.module';
import { LugaresTuristicosModule } from './lugares-turisticos/lugares-turisticos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { PaquetesTuristicosModule } from './paquetes-turisticos/paquetes-turisticos.module';
import { SupabaseModule } from './supabase/supabase.module';
import { PaymentsModule } from './payments/payments.module';
import { ReservasModule } from './reservas/reservas.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { ResenasModule } from './resenas/resenas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    PersonasModule,
    RolesModule,
    PermissionsModule,
    SlidersModule,
    EmprendimientosModule,
    LugaresTuristicosModule,
    ServiciosModule,
    ResenasModule,
    PaquetesTuristicosModule,
    SupabaseModule,
    ReservasModule,
    PaymentsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
