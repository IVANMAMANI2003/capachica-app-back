import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseModule } from '../supabase/supabase.module';
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';



@Module({
  imports: [PrismaModule, SupabaseModule, MailerModule, MailerService],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

MailerModule.forRoot({
  transport: {
    service: 'gmail',
    auth: {
      user: 'tu-correo@gmail.com',
      pass: 'tu-contraseña-o-app-password',
    },
  },
  defaults: {
    from: '"Tu App" <tu-correo@gmail.com>',
  },
  template: {
    dir: __dirname + '/templates',
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
})
