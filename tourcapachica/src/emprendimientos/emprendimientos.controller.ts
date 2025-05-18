import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Req } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { EmprendimientoEntity } from './entities/emprendimiento.entity';
import { CreateFavoritoDto } from './dto/create-favorito-emprendimiento.dto';
import { FavoritoEntity } from './entities/favorito.entity';
import { EmprendimientosService } from './emprendimientos.service';

interface RequestWithUser extends ExpressRequest {
  user: {
    id: number;
  };
}

@ApiTags('emprendimientos')
@Controller('emprendimientos')
export class EmprendimientosController {
  constructor(private readonly emprendimientosService: EmprendimientosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo emprendimiento' })
  @ApiResponse({ status: 201, description: 'Emprendimiento creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(@Body() createEmprendimientoDto: CreateEmprendimientoDto, @Request() req: RequestWithUser) {
    return this.emprendimientosService.create(createEmprendimientoDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los emprendimientos' })
  @ApiResponse({ status: 200, description: 'Lista de emprendimientos' })
  findAll() {
    return this.emprendimientosService.findAll();
  }

  @Get('mis-emprendimientos')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Obtener los emprendimientos del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de emprendimientos del usuario', type: [EmprendimientoEntity] })
  findMyEmprendimientos(@Request() req: RequestWithUser) {
    return this.emprendimientosService.findByUsuario(req.user.id);
  }

  @Get('usuario/:usuarioId')
  @ApiOperation({ summary: 'Obtener emprendimientos por usuario' })
  @ApiResponse({ status: 200, description: 'Lista de emprendimientos del usuario' })
  findByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.emprendimientosService.findByUsuario(+usuarioId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un emprendimiento por ID' })
  @ApiResponse({ status: 200, description: 'Emprendimiento encontrado' })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  findOne(@Param('id') id: string) {
    return this.emprendimientosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un emprendimiento por ID' })
  @ApiResponse({ status: 200, description: 'Emprendimiento actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  update(
    @Param('id') id: string,
    @Body() updateEmprendimientoDto: UpdateEmprendimientoDto
  ) {
    return this.emprendimientosService.update(+id, updateEmprendimientoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un emprendimiento por ID' })
  @ApiResponse({ status: 200, description: 'Emprendimiento eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  remove(@Param('id') id: string) {
    return this.emprendimientosService.remove(+id);
  }


  // Endpoints para favoritos
  @Post(':id/favoritosEmprendimiento')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Marcar un emprendimiento como favorito' })
  @ApiResponse({ status: 201, description: 'Emprendimiento marcado como favorito'})
  @ApiResponse({ status: 400, description: 'Datos inválidos o emprendimiento ya marcado como favorito' })
  @ApiResponse({ status: 404, description: 'Emprendimiento no encontrado' })
  async addFavorito(@Param('id') id: string, @Req() req) {
    return this.emprendimientosService.addFavorito(req.user.id, +id);
  }

  @Delete(':id/favoritosEmprendimiento')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un emprendimiento de favoritos' })
  @ApiResponse({ status: 200, description: 'Emprendimiento eliminado de favoritos' })
  @ApiResponse({ status: 404, description: 'Favorito no encontrado' })
  removeFavorito(@Param('id') id: string, @Req() req) {
    return this.emprendimientosService.removeFavorito(req.user.id, +id);
  }

  @Get('favoritosEmprendimiento:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener los emprendimientos favoritos del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de emprendimientos favoritos', type: [FavoritoEntity] })
  getFavoritos(@Request() req: RequestWithUser) {
    return this.emprendimientosService.getFavoritos(req.user.id);
  }

}