import { CountryService } from '../services/country.service';
import { Country } from '../entity/country.entity';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findAll(): Promise<Country[]>;
    findById(id: string): Promise<Country>;
    findByName(name: string): Promise<Country>;
}
