import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LugaresTuristicosService } from './lugares-turisticos.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('lugares-turisticos')
@Controller('lugares-turisticos')
export class LugaresTuristicosController {
  constructor(private readonly lugaresTuristicosService: LugaresTuristicosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo lugar turístico' })
  @ApiResponse({ status: 201, description: 'Lugar turístico creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Prohibido' })
  create(@Body() createLugarTuristicoDto: CreateLugarTuristicoDto) {
    return this.lugaresTuristicosService.create(createLugarTuristicoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los lugares turísticos' })
  @ApiResponse({ status: 200, description: 'Lista de lugares turísticos' })
  findAll() {
    return this.lugaresTuristicosService.findAll();
  }

  @Get('destacados')
  @ApiOperation({ summary: 'Obtener lugares turísticos destacados' })
  @ApiResponse({ status: 200, description: 'Lista de lugares turísticos destacados' })
  findDestacados() {
    return this.lugaresTuristicosService.findDestacados();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un lugar turístico por ID' })
  @ApiResponse({ status: 200, description: 'Lugar turístico encontrado' })
  @ApiResponse({ status: 404, description: 'Lugar turístico no encontrado' })
  findOne(@Param('id') id: string) {
    return this.lugaresTuristicosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un lugar turístico' })
  @ApiResponse({ status: 200, description: 'Lugar turístico actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Prohibido' })
  @ApiResponse({ status: 404, description: 'Lugar turístico no encontrado' })
  update(@Param('id') id: string, @Body() updateLugarTuristicoDto: UpdateLugarTuristicoDto) {
    return this.lugaresTuristicosService.update(+id, updateLugarTuristicoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un lugar turístico' })
  @ApiResponse({ status: 200, description: 'Lugar turístico eliminado exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Prohibido' })
  @ApiResponse({ status: 404, description: 'Lugar turístico no encontrado' })
  remove(@Param('id') id: string) {
    return this.lugaresTuristicosService.remove(+id);
  }
} 