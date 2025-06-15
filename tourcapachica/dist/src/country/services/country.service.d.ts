import { PrismaService } from '../../prisma/prisma.service';
import { Country } from '../entity/country.entity';
export declare class CountryService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Country[]>;
    findById(id: string): Promise<Country>;
    findByName(name: string): Promise<Country>;
}
