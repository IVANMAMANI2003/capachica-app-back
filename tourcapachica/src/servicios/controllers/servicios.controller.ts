import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { CreateServicioDisponibilidadDto } from '../dto/create-servicio-disponibilidad.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ServicioEntity } from '../entities/servicio.entity';

@ApiTags('servicios')
@Controller('servicios')
@ApiBearerAuth()
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post('emprendimiento/:emprendimientoId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear un nuevo servicio para un emprendimiento' })
  @ApiResponse({ status: 201, description: 'Servicio creado exitosamente', type: ServicioEntity })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Tipo de servicio no encontrado' })
  create(
    @Param('emprendimientoId') emprendimientoId: string,
    @Body() createServicioDto: CreateServicioDto,
  ) {
    return this.serviciosService.create(+emprendimientoId, createServicioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los servicios' })
  @ApiResponse({ status: 200, description: 'Lista de servicios', type: [ServicioEntity] })
  findAll() {
    return this.serviciosService.findAll();
  }

  @Get('emprendimiento/:emprendimientoId')
  @ApiOperation({ summary: 'Obtener servicios por emprendimiento' })
  @ApiResponse({ status: 200, description: 'Lista de servicios del emprendimiento', type: [ServicioEntity] })
  findByEmprendimiento(@Param('emprendimientoId') emprendimientoId: string) {
    return this.serviciosService.findByEmprendimiento(+emprendimientoId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un servicio por ID' })
  @ApiResponse({ status: 200, description: 'Servicio encontrado', type: ServicioEntity })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  findOne(@Param('id') id: string) {
    return this.serviciosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Actualizar un servicio' })
  @ApiResponse({ status: 200, description: 'Servicio actualizado', type: ServicioEntity })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  update(@Param('id') id: string, @Body() updateServicioDto: UpdateServicioDto) {
    return this.serviciosService.update(+id, updateServicioDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Eliminar un servicio' })
  @ApiResponse({ status: 200, description: 'Servicio eliminado' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  remove(@Param('id') id: string) {
    return this.serviciosService.remove(+id);
  }

  @Patch(':id/estado')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Actualizar el estado de un servicio' })
  @ApiResponse({ status: 200, description: 'Estado actualizado', type: ServicioEntity })
  @ApiResponse({ status: 400, description: 'Estado inválido' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  updateEstado(@Param('id') id: string, @Body('estado') estado: string) {
    return this.serviciosService.updateEstado(+id, estado);
  }

  @Post('disponibilidad')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear disponibilidad para un servicio' })
  @ApiResponse({ status: 201, description: 'Disponibilidad creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  createDisponibilidad(@Body() createDisponibilidadDto: CreateServicioDisponibilidadDto) {
    return this.serviciosService.createDisponibilidad(createDisponibilidadDto);
  }

  @Post('disponibilidad/batch')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear múltiples disponibilidades para un servicio' })
  @ApiResponse({ status: 201, description: 'Disponibilidades creadas exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  createDisponibilidades(@Body() disponibilidades: CreateServicioDisponibilidadDto[]) {
    return this.serviciosService.createDisponibilidades(disponibilidades);
  }

  @Get('disponibilidad/:servicioId')
  @ApiOperation({ summary: 'Obtener disponibilidad de un servicio' })
  @ApiResponse({ status: 200, description: 'Lista de disponibilidades del servicio' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  getDisponibilidad(@Param('servicioId') servicioId: string) {
    return this.serviciosService.getDisponibilidad(+servicioId);
  }

  @Get('disponibilidad/:servicioId/:fecha')
  @ApiOperation({ summary: 'Obtener disponibilidad de un servicio para una fecha específica' })
  @ApiResponse({ status: 200, description: 'Disponibilidad encontrada' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  getDisponibilidadByFecha(
    @Param('servicioId') servicioId: string,
    @Param('fecha') fecha: string,
  ) {
    return this.serviciosService.getDisponibilidadByFecha(+servicioId, fecha);
  }
} 