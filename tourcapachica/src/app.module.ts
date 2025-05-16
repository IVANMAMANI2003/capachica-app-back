import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { ComprobantesModule } from './comprobantes/comprobantes.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({

      transport: {
        service: 'gmail',
        auth: {
          user: 'ivanyomm.2003@gmail.com',
          pass: 'jfeyoruxwsirfhid',
        },
      },
      defaults: {
        from: 'ivanyomm.2003@gmail.com', // sin nombre
      },
      template: {
        dir: path.join(process.cwd(), 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },

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
    ComprobantesModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

