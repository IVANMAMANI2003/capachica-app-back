import { Controller, Get, Post, Body, Param, Delete, UseGuards, Patch, Put } from '@nestjs/common';
import { TiposServicioService } from '../services/tipos-servicio.service';
import { CreateTipoServicioDto } from '../dto/create-tipo-servicio.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateTipoServicioDto } from '../dto/update-tipo-servicio.dto';

@ApiTags('tipos-servicio')
@Controller('tipos-servicio')
export class TiposServicioController {
  constructor(private readonly tiposServicioService: TiposServicioService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin', 'Emprendedor')
  @ApiBearerAuth()
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

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin', 'Emprendedor')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un tipo de servicio' })
  @ApiResponse({ status: 200, description: 'Tipo de servicio actualizado' })
  @ApiResponse({ status: 404, description: 'Tipo de servicio no encontrado' })  
  update(@Param('id') id: string, @Body() updateTipoServicioDto: UpdateTipoServicioDto) {
    return this.tiposServicioService.update(+id, updateTipoServicioDto as CreateTipoServicioDto);
    
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin', 'Emprendedor')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un tipo de servicio' })
  @ApiResponse({ status: 200, description: 'Tipo de servicio eliminado' })
  @ApiResponse({ status: 404, description: 'Tipo de servicio no encontrado' })
  remove(@Param('id') id: string) {
    return this.tiposServicioService.remove(+id);
  }
} 