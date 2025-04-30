import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { EmprendimientosService } from './emprendimientos.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { EmprendimientoEntity } from './entities/emprendimiento.entity';
import { FavoritoEntity } from './entities/favorito.entity';

@ApiTags('emprendimientos')
@Controller('emprendimientos')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class EmprendimientosController {
  constructor(private readonly emprendimientosService: EmprendimientosService) {}

  @Post()
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Crear un nuevo emprendimiento' })
  @ApiResponse({ status: 201, description: 'Emprendimiento creado exitosamente', type: EmprendimientoEntity })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(@Request() req, @Body() createEmprendimientoDto: CreateEmprendimientoDto) {
    return this.emprendimientosService.create(req.user.id, createEmprendimientoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los emprendimientos' })
  @ApiResponse({ status: 200, description: 'Lista de emprendimientos', type: [EmprendimientoEntity] })
  findAll() {
    return this.emprendimientosService.findAll();
  }

  @Get('mis-emprendimientos')
  @Roles('emprendedor') 
  @ApiOperation({ summary: 'Obtener los emprendimientos del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de emprendimientos del usuario', type: [EmprendimientoEntity] })
  findMyEmprendimientos(@Request() req) {
    return this.emprendimientosService.findByUsuario(req.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un emprendimiento por ID' })
  @ApiResponse({ status: 200, description: 'Emprendimiento encontrado', type: EmprendimientoEntity })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  findOne(@Param('id') id: string) {
    return this.emprendimientosService.findOne(+id);
  }

  @Patch(':id')
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Actualizar un emprendimiento' })
  @ApiResponse({ status: 200, description: 'Emprendimiento actualizado', type: EmprendimientoEntity })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  update(@Param('id') id: string, @Body() updateEmprendimientoDto: UpdateEmprendimientoDto) {
    return this.emprendimientosService.update(+id, updateEmprendimientoDto);
  }

  @Delete(':id')
  @Roles('emprendedor', 'SuperAdmin')
  @ApiOperation({ summary: 'Eliminar un emprendimiento' })
  @ApiResponse({ status: 200, description: 'Emprendimiento eliminado' })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  remove(@Param('id') id: string) {
    return this.emprendimientosService.remove(+id);
  }

  @Patch(':id/estado')
  @Roles('SuperAdmin')
  @ApiOperation({ summary: 'Actualizar el estado de un emprendimiento' })
  @ApiResponse({ status: 200, description: 'Estado actualizado', type: EmprendimientoEntity })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  updateEstado(@Param('id') id: string, @Body('estado') estado: string) {
    return this.emprendimientosService.updateEstado(+id, estado);
  }

  // Endpoints para favoritos
  @Post('favoritos')
  @ApiOperation({ summary: 'Marcar un emprendimiento como favorito' })
  @ApiResponse({ status: 201, description: 'Emprendimiento marcado como favorito', type: FavoritoEntity })
  @ApiResponse({ status: 400, description: 'Datos inválidos o emprendimiento ya marcado como favorito' })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  addFavorito(@Request() req, @Body() createFavoritoDto: CreateFavoritoDto) {
    return this.emprendimientosService.addFavorito(req.user.id, createFavoritoDto);
  }

  @Delete('favoritos/:id')
  @ApiOperation({ summary: 'Eliminar un emprendimiento de favoritos' })
  @ApiResponse({ status: 200, description: 'Emprendimiento eliminado de favoritos' })
  @ApiResponse({ status: 404, description: 'Favorito no encontrado' })
  removeFavorito(@Request() req, @Param('id') id: string) {
    return this.emprendimientosService.removeFavorito(req.user.id, +id);
  }

  @Get('favoritos')
  @ApiOperation({ summary: 'Obtener los emprendimientos favoritos del usuario' })
  @ApiResponse({ status: 200, description: 'Lista de emprendimientos favoritos', type: [FavoritoEntity] })
  getFavoritos(@Request() req) {
    return this.emprendimientosService.getFavoritos(req.user.id);
  }

  @Get('favoritos/:id/check')
  @ApiOperation({ summary: 'Verificar si un emprendimiento está marcado como favorito' })
  @ApiResponse({ status: 200, description: 'Estado del favorito', type: Boolean })
  isFavorito(@Request() req, @Param('id') id: string) {
    return this.emprendimientosService.isFavorito(req.user.id, +id);
  }
} 