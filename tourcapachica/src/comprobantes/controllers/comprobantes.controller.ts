import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { ComprobantesService } from '../services/comprobantes.service';
import { CreateComprobanteDto } from '../dto/create-comprobante.dto';
import { UpdateComprobanteDto } from '../dto/update-comprobante.dto';
import { Comprobante } from '../entities/comprobante.entity';

@ApiTags('Comprobantes')
@Controller('comprobantes')
export class ComprobantesController {
  constructor(private readonly service: ComprobantesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo comprobante' })
  @ApiResponse({ status: 201, description: 'Comprobante creado exitosamente', type: Comprobante })
  create(@Body() dto: CreateComprobanteDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los comprobantes' })
  @ApiResponse({ status: 200, description: 'Lista de comprobantes obtenida correctamente', type: [Comprobante] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un comprobante por su ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del comprobante' })
  @ApiResponse({ status: 200, description: 'Comprobante encontrado', type: Comprobante })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un comprobante por su ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del comprobante' })
  @ApiResponse({ status: 200, description: 'Comprobante actualizado correctamente', type: Comprobante })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  update(@Param('id') id: string, @Body() dto: UpdateComprobanteDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un comprobante por su ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del comprobante' })
  @ApiResponse({ status: 200, description: 'Comprobante eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
