import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PagoDetalleService } from './pago-detalle.service';
import { CreatePagoDetalleDto } from './dto/create-pago-detalle.dto';
import { UpdatePagoDetalleDto } from './dto/update-pago-detalle.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('pago-detalle')
@Controller('pago-detalle')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class PagoDetalleController {
  constructor(private readonly pagoDetalleService: PagoDetalleService) {}

  @Post()
  @Roles('SuperAdmin', 'Admin')
  @ApiOperation({ summary: 'Crear un nuevo detalle de pago' })
  @ApiResponse({ status: 201, description: 'Detalle de pago creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  create(@Body() createPagoDetalleDto: CreatePagoDetalleDto) {
    return this.pagoDetalleService.create(createPagoDetalleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los detalles de pago' })
  @ApiResponse({ status: 200, description: 'Lista de detalles de pago' })
  findAll() {
    return this.pagoDetalleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un detalle de pago por ID' })
  @ApiResponse({ status: 200, description: 'Detalle de pago encontrado' })
  @ApiResponse({ status: 404, description: 'Detalle de pago no encontrado' })
  findOne(@Param('id') id: string) {
    return this.pagoDetalleService.findOne(+id);
  }

  @Get('pago/:pagoId')
  @ApiOperation({ summary: 'Obtener detalles de pago por ID de pago' })
  @ApiResponse({ status: 200, description: 'Lista de detalles de pago' })
  findByPagoId(@Param('pagoId') pagoId: string) {
    return this.pagoDetalleService.findByPagoId(+pagoId);
  }

  @Patch(':id')
  @Roles('SuperAdmin', 'Admin')
  @ApiOperation({ summary: 'Actualizar un detalle de pago' })
  @ApiResponse({ status: 200, description: 'Detalle de pago actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Detalle de pago no encontrado' })
  update(@Param('id') id: string, @Body() updatePagoDetalleDto: UpdatePagoDetalleDto) {
    return this.pagoDetalleService.update(+id, updatePagoDetalleDto);
  }

  @Delete(':id')
  @Roles('SuperAdmin', 'Admin')
  @ApiOperation({ summary: 'Eliminar un detalle de pago' })
  @ApiResponse({ status: 200, description: 'Detalle de pago eliminado exitosamente' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Detalle de pago no encontrado' })
  remove(@Param('id') id: string) {
    return this.pagoDetalleService.remove(+id);
  }
}