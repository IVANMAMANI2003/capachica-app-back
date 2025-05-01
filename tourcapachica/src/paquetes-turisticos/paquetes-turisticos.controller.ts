import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';

@ApiTags('paquetes-turisticos')
@Controller('paquetes-turisticos')
export class PaquetesTuristicosController {
  constructor(private readonly paquetesTuristicosService: PaquetesTuristicosService) {}

  // ... otros métodos del controlador ...

  @Post(':id/disponibilidad')
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear disponibilidad para un paquete turístico' })
  @ApiResponse({ status: 201, description: 'Disponibilidad creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos de disponibilidad inválidos' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  createDisponibilidad(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDisponibilidadDto: CreateDisponibilidadDto
  ) {
    return this.paquetesTuristicosService.createDisponibilidad(id, createDisponibilidadDto);
  }

  @Get(':id/disponibilidad')
  @ApiOperation({ summary: 'Obtener todas las disponibilidades de un paquete turístico' })
  @ApiResponse({ status: 200, description: 'Lista de disponibilidades' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  getDisponibilidadesPaquete(@Param('id', ParseIntPipe) id: number) {
    return this.paquetesTuristicosService.getDisponibilidadesPaquete(id);
  }

  @Get('disponibilidad/:id')
  @ApiOperation({ summary: 'Obtener una disponibilidad específica' })
  @ApiResponse({ status: 200, description: 'Disponibilidad encontrada' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  getDisponibilidad(@Param('id', ParseIntPipe) id: number) {
    return this.paquetesTuristicosService.getDisponibilidad(id);
  }

  @Patch('disponibilidad/:id')
  @ApiOperation({ summary: 'Actualizar una disponibilidad' })
  @ApiResponse({ status: 200, description: 'Disponibilidad actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos de actualización inválidos' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  updateDisponibilidad(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisponibilidadDto: UpdateDisponibilidadDto
  ) {
    return this.paquetesTuristicosService.updateDisponibilidad(id, updateDisponibilidadDto);
  }

  @Delete('disponibilidad/:id')
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Eliminar una disponibilidad' })
  @ApiResponse({ status: 200, description: 'Disponibilidad eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  deleteDisponibilidad(@Param('id', ParseIntPipe) id: number) {
    return this.paquetesTuristicosService.deleteDisponibilidad(id);
  }
} 