import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RolesModule } from './roles/roles.module';
import { PersonasModule } from './personas/personas.module';
import { PermissionsModule } from './permissions/permissions.module';
import { LugaresTuristicosModule } from './lugares-turisticos/lugares-turisticos.module';
import { EmprendimientosModule } from './emprendimientos/emprendimientos.module';
import { PaquetesTuristicosModule } from './paquetes-turisticos/paquetes-turisticos.module';
import { ReservasModule } from './reservas/reservas.module';
import { PaymentsModule } from './payments/payments.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    RolesModule,
    PersonasModule,
    PermissionsModule,
    LugaresTuristicosModule,
    EmprendimientosModule,
    PaquetesTuristicosModule,
    ReservasModule,
    PaymentsModule,
    ServiciosModule,
  ],
})
export class AppModule {}
