import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CountryService } from '../services/country.service';
import { Country } from '../entity/country.entity';

@ApiTags('countries')
@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los países y sus subdivisiones' })
  @ApiResponse({ status: 200, description: 'Lista de países y subdivisiones' })
  async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un país y sus subdivisiones por ID' })
  @ApiParam({ name: 'id', description: 'ID del país' })
  @ApiResponse({ status: 200, description: 'País encontrado con sus subdivisiones' })
  @ApiResponse({ status: 404, description: 'País no encontrado' })
  async findById(@Param('id') id: string): Promise<Country> {
    return this.countryService.findById(id);
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Obtener un país y sus subdivisiones por nombre' })
  @ApiParam({ name: 'name', description: 'Nombre del país' })
  @ApiResponse({ status: 200, description: 'País encontrado con sus subdivisiones' })
  @ApiResponse({ status: 404, description: 'País no encontrado' })
  async findByName(@Param('name') name: string): Promise<Country> {
    return this.countryService.findByName(name);
  }
} 