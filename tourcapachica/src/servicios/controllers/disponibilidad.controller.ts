import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DisponibilidadService } from '../services/disponibilidad.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { UpdateDisponibilidadDto } from '@/paquetes-turisticos/dto/update-disponibilidad.dto';

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
  create(@Body() createDisponibilidadDto: CreateServicioDisponibilidadDto) {
    return this.disponibilidadService.createDisponibilidad(createDisponibilidadDto);
  }

  @Post('batch')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear múltiples disponibilidades para un servicio' })
  @ApiResponse({ status: 201, description: 'Disponibilidades creadas exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  createBatch(@Body() disponibilidades: CreateServicioDisponibilidadDto[]) {
    return this.disponibilidadService.createDisponibilidades(disponibilidades);
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
    @Body() updateData: UpdateDisponibilidadDto,
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