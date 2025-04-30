import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ComprobantesService } from './comprobantes.service';
import { CreateComprobanteDto } from './dto/create-comprobante.dto';
import { UpdateComprobanteDto } from './dto/update-comprobante.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('comprobantes')
@ApiBearerAuth()
@Controller('comprobantes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ComprobantesController {
  constructor(private readonly comprobantesService: ComprobantesService) {}

  @Post()
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear un nuevo comprobante' })
  @ApiResponse({ status: 201, description: 'Comprobante creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  create(@Body() createComprobanteDto: CreateComprobanteDto) {
    return this.comprobantesService.create(createComprobanteDto);
  }

  @Get()
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Obtener todos los comprobantes' })
  @ApiResponse({ status: 200, description: 'Lista de comprobantes' })
  findAll() {
    return this.comprobantesService.findAll();
  }

  @Get(':id')
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Obtener un comprobante por ID' })
  @ApiResponse({ status: 200, description: 'Comprobante encontrado' })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  findOne(@Param('id') id: string) {
    return this.comprobantesService.findOne(+id);
  }

  @Get('pago/:pagoId')
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Obtener un comprobante por ID de pago' })
  @ApiResponse({ status: 200, description: 'Comprobante encontrado' })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  findByPagoId(@Param('pagoId') pagoId: string) {
    return this.comprobantesService.findByPagoId(+pagoId);
  }

  @Patch(':id')
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Actualizar un comprobante' })
  @ApiResponse({ status: 200, description: 'Comprobante actualizado' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  update(@Param('id') id: string, @Body() updateComprobanteDto: UpdateComprobanteDto) {
    return this.comprobantesService.update(+id, updateComprobanteDto);
  }

  @Delete(':id')
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Eliminar un comprobante' })
  @ApiResponse({ status: 200, description: 'Comprobante eliminado' })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  remove(@Param('id') id: string) {
    return this.comprobantesService.remove(+id);
  }

  @Patch(':id/estado')
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Actualizar el estado de un comprobante' })
  @ApiResponse({ status: 200, description: 'Estado actualizado' })
  @ApiResponse({ status: 404, description: 'Comprobante no encontrado' })
  updateEstado(@Param('id') id: string, @Body('estado') estado: string) {
    return this.comprobantesService.updateEstado(+id, estado);
  }
} 