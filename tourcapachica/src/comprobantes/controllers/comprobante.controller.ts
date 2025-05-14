import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ComprobanteService } from '../services/comprobante.service';
import { ComprobanteDto } from '../dto/comprobante.dto';

@Controller('comprobantes')
export class ComprobanteController {
  constructor(private readonly comprobanteService: ComprobanteService) {}

  @Post()
  create(@Body() comprobanteDto: ComprobanteDto) {
    return this.comprobanteService.create(comprobanteDto);
  }

  @Get()
  findAll() {
    return this.comprobanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comprobanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() comprobanteDto: ComprobanteDto) {
    return this.comprobanteService.update(+id, comprobanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comprobanteService.remove(+id);
  }
}