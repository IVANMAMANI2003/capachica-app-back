import { Module } from '@nestjs/common';
import { CountryController } from './controller/country.controller';
import { CountryService } from './services/country.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {} 