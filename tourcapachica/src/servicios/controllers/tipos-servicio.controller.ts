import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { TiposServicioService } from '../services/tipos-servicio.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('tipos-servicio')
@Controller('tipos-servicio')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class TiposServicioController {
  constructor(private readonly tiposServicioService: TiposServicioService) {}

  @Post()
  @Roles('SuperAdmin')
  @ApiOperation({ summary: 'Crear un nuevo tipo de servicio' })
  @ApiResponse({ status: 201, description: 'Tipo de servicio creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(@Body() createTipoServicioDto: CreateTipoServicioDto) {
    return this.tiposServicioService.create(createTipoServicioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de servicio' })
  @ApiResponse({ status: 200, description: 'Lista de tipos de servicio' })
  findAll() {
    return this.tiposServicioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de servicio por ID' })
  @ApiResponse({ status: 200, description: 'Tipo de servicio encontrado' })
  @ApiResponse({ status: 404, description: 'Tipo de servicio no encontrado' })
  findOne(@Param('id') id: string) {
    return this.tiposServicioService.findOne(+id);
  }

  @Delete(':id')
  @Roles('SuperAdmin')
  @ApiOperation({ summary: 'Eliminar un tipo de servicio' })
  @ApiResponse({ status: 200, description: 'Tipo de servicio eliminado' })
  @ApiResponse({ status: 404, description: 'Tipo de servicio no encontrado' })
  remove(@Param('id') id: string) {
    return this.tiposServicioService.remove(+id);
  }
} 