import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { FilterResenasDto } from './dto/filter-resenas.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
import { ResenasService } from './resenas.service';

@Controller('resenas')
export class ResenasController {
  constructor(private readonly resenasService: ResenasService) {}

  @Post()
  create(@Body() createResenaDto: CreateResenaDto) {
    return this.resenasService.create(createResenaDto);
  }

  @Get()
  findAll(@Query() filter: FilterResenasDto) {
    if (filter.servicioId) {
      return this.resenasService.findAll().then(resenas => resenas.filter(r => r.servicioId === filter.servicioId));
    }
    return this.resenasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resenasService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateResenaDto: UpdateResenaDto) {
    return this.resenasService.update(Number(id), updateResenaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resenasService.remove(Number(id));
  }

  @Get('/promedio/:servicioId')
  promedio(@Param('servicioId') servicioId: string): Promise<PromedioResponseDto> {
    return this.resenasService.promedioCalificacionPorServicio(Number(servicioId));
  }
}