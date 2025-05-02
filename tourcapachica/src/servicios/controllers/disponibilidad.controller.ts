import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DisponibilidadService } from '../services/disponibilidad.service';
import { CreateDisponibilidadDto } from '../dto/create-disponibilidad.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('disponibilidad')
@Controller('disponibilidad')
@ApiBearerAuth()
export class DisponibilidadController {
  constructor(private readonly disponibilidadService: DisponibilidadService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear disponibilidad para un servicio' })
  @ApiResponse({ status: 201, description: 'Disponibilidad creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos o fecha ya registrada' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  create(@Body() createDisponibilidadDto: CreateDisponibilidadDto) {
    return this.disponibilidadService.create(createDisponibilidadDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las disponibilidades' })
  @ApiResponse({ status: 200, description: 'Lista de disponibilidades' })
  findAll() {
    return this.disponibilidadService.findAll();
  }

  @Get('servicio/:servicioId')
  @ApiOperation({ summary: 'Obtener disponibilidades por servicio' })
  @ApiResponse({ status: 200, description: 'Lista de disponibilidades del servicio' })
  findByServicio(@Param('servicioId') servicioId: string) {
    return this.disponibilidadService.findByServicio(+servicioId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una disponibilidad por ID' })
  @ApiResponse({ status: 200, description: 'Disponibilidad encontrada' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  findOne(@Param('id') id: string) {
    return this.disponibilidadService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Actualizar una disponibilidad' })
  @ApiResponse({ status: 200, description: 'Disponibilidad actualizada' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreateDisponibilidadDto>,
  ) {
    return this.disponibilidadService.update(+id, updateData);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Eliminar una disponibilidad' })
  @ApiResponse({ status: 200, description: 'Disponibilidad eliminada' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  remove(@Param('id') id: string) {
    return this.disponibilidadService.remove(+id);
  }
} 