import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseModule } from '../supabase/supabase.module';
import { ImagesService } from './images.service';

@Module({
  imports: [PrismaModule, SupabaseModule],
  providers: [ImagesService],
  exports: [ImagesService],
})
export class ImagesModule {} 