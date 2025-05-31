import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Req, ForbiddenException, BadRequestException, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiBody, ApiProperty } from '@nestjs/swagger';
import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { EstadoPaquete } from './enums/estado-paquete.enum';
import { IsEnum } from 'class-validator';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { PrismaService } from '../prisma/prisma.service';

@ApiTags('paquetes-turisticos')
@Controller('paquetes-turisticos')
class UpdateEstadoDto {
  @ApiProperty({ description: 'Estado de la paquete turistico', enum: EstadoPaquete })
  @IsEnum(EstadoPaquete, { message: 'El estado Debe ser "activo" o "inactivo"' })
  
  estado: EstadoPaquete;
}
@ApiTags('paquetes-turisticos')
@Controller('paquetes-turisticos')
export class PaquetesTuristicosController {
  constructor(
    private readonly paquetesTuristicosService: PaquetesTuristicosService,
    private readonly prisma: PrismaService
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo paquete turístico' })
  @ApiResponse({ status: 201, description: 'Paquete turístico creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async create(
    @Body() createPaqueteTuristicoDto: CreatePaqueteTuristicoDto,
    @Req() req: RequestWithUser
  ) {
    try {
      // If user is Emprendedor, ensure they can only create for their emprendimiento
      if (req.user.roles.includes('Emprendedor')) {
        const emprendimiento = await this.prisma.emprendimiento.findFirst({
          where: { usuarioId: req.user.id }
        });
        if (!emprendimiento) {
          throw new ForbiddenException('No tienes un emprendimiento asociado');
        }
        createPaqueteTuristicoDto.emprendimientoId = emprendimiento.id;
      }

      return this.paquetesTuristicosService.create(createPaqueteTuristicoDto);
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw error;
      }
      throw new BadRequestException('Error al crear el paquete turístico');
    }
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los paquetes turísticos' })
  @ApiResponse({ status: 200, description: 'Lista de paquetes turísticos' })
  async findAll() {
    try {
      return this.paquetesTuristicosService.findAll();
    } catch (error) {
      throw new BadRequestException('Error al obtener los paquetes turísticos');
    }
  }

  @Get('emprendimiento/:emprendimientoId')
  @ApiOperation({ summary: 'Obtener paquetes turísticos por emprendimiento' })
  @ApiResponse({ status: 200, description: 'Lista de paquetes turísticos del emprendimiento' })
  async findByEmprendimiento(@Param('emprendimientoId') emprendimientoId: string) {
    try {
      return this.paquetesTuristicosService.findByEmprendimiento(Number(emprendimientoId));
    } catch (error) {
      throw new BadRequestException('Error al obtener los paquetes turísticos del emprendimiento');
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un paquete turístico por ID' })
  @ApiResponse({ status: 200, description: 'Paquete turístico encontrado' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  async findOne(@Param('id') id: string) {
    try {
      return this.paquetesTuristicosService.findOne(Number(id));
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al obtener el paquete turístico');
    }
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un paquete turístico por ID' })
  @ApiResponse({ status: 200, description: 'Paquete turístico actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  async update(
    @Param('id') id: string,
    @Body() updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto,
    @Req() req: RequestWithUser
  ) {
    try {
      // If user is Emprendedor, ensure they can only update their own paquetes
      if (req.user.roles.includes('Emprendedor')) {
        const paquete = await this.paquetesTuristicosService.findOne(Number(id));
        const emprendimiento = await this.prisma.emprendimiento.findFirst({
          where: { usuarioId: req.user.id }
        });
        if (!emprendimiento || paquete.emprendimientoId !== emprendimiento.id) {
          throw new ForbiddenException('No tienes permiso para actualizar este paquete turístico');
        }
      }

      return this.paquetesTuristicosService.update(Number(id), updatePaqueteTuristicoDto);
    } catch (error) {
      if (error instanceof ForbiddenException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al actualizar el paquete turístico');
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un paquete turístico por ID' })
  @ApiResponse({ status: 200, description: 'Paquete turístico eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  async remove(
    @Param('id') id: string,
    @Req() req: RequestWithUser
  ) {
    try {
      // If user is Emprendedor, ensure they can only delete their own paquetes
      if (req.user.roles.includes('Emprendedor')) {
        const paquete = await this.paquetesTuristicosService.findOne(Number(id));
        const emprendimiento = await this.prisma.emprendimiento.findFirst({
          where: { usuarioId: req.user.id }
        });
        if (!emprendimiento || paquete.emprendimientoId !== emprendimiento.id) {
          throw new ForbiddenException('No tienes permiso para eliminar este paquete turístico');
        }
      }

      return this.paquetesTuristicosService.remove(Number(id));
    } catch (error) {
      if (error instanceof ForbiddenException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al eliminar el paquete turístico');
    }
  }

  @Patch(':id/estado')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar el estado de un paquete turístico' })
  @ApiResponse({ status: 200, description: 'Estado actualizado' })
  @ApiResponse({ status: 400, description: 'Estado inválido' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  @ApiBody({
    description: 'Nuevo estado del paquete',
    type: UpdateEstadoDto,
  })
  updateEstado(
    @Param('id') id: string,
    @Body() body: UpdateEstadoDto,
  ) {
    return this.paquetesTuristicosService.updateEstado(+id, body.estado);
  }
  

  @Post(':id/servicios')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Agregar servicios a un paquete turístico' })
  @ApiResponse({ status: 200, description: 'Servicios agregados exitosamente' })
  @ApiResponse({ status: 404, description: 'Paquete o servicios no encontrados' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  async addServicios(
    @Param('id', ParseIntPipe) id: number,
    @Body() addServiciosDto: AddServiciosDto,
    @Req() req: any
  ) {
    return this.paquetesTuristicosService.addServicios(id, addServiciosDto, req.user.id);
  }

  @Delete(':id/servicios/:servicioId')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un servicio de un paquete turístico' })
  @ApiResponse({ status: 200, description: 'Servicio eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Paquete o servicio no encontrado' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  async removeServicio(
    @Param('id', ParseIntPipe) id: number,
    @Param('servicioId', ParseIntPipe) servicioId: number,
    @Req() req: any
  ) {
    return this.paquetesTuristicosService.removeServicio(id, servicioId, req.user.id);
  }

  @Get(':id/estadisticas')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener estadísticas de un paquete turístico' })
  @ApiResponse({ status: 200, description: 'Estadísticas obtenidas exitosamente' })
  @ApiResponse({ status: 404, description: 'Paquete no encontrado' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  async getEstadisticas(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: any
  ) {
    return this.paquetesTuristicosService.getEstadisticas(id, req.user.id);
  }

  @Get(':id/exportar')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Exportar datos de un paquete turístico' })
  @ApiResponse({ status: 200, description: 'Datos exportados exitosamente' })
  @ApiResponse({ status: 404, description: 'Paquete no encontrado' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  async exportarDatos(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: any
  ) {
    return this.paquetesTuristicosService.exportarDatos(id, req.user.id);
  }

  @Post(':id/disponibilidad')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear disponibilidad para un paquete turístico' })
  @ApiResponse({ status: 201, description: 'Disponibilidad creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  async createDisponibilidad(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDisponibilidadDto: CreateDisponibilidadDto
  ) {
    return this.paquetesTuristicosService.createDisponibilidad(id, createDisponibilidadDto);
  }

  @Get(':id/disponibilidad')
  @ApiOperation({ summary: 'Obtener todas las disponibilidades de un paquete turístico' })
  @ApiResponse({ status: 200, description: 'Lista de disponibilidades' })
  @ApiResponse({ status: 404, description: 'Paquete turístico no encontrado' })
  async getDisponibilidadesPaquete(@Param('id', ParseIntPipe) id: number) {
    return this.paquetesTuristicosService.getDisponibilidadesPaquete(id);
  }

  @Get('disponibilidad/:id')
  @ApiOperation({ summary: 'Obtener una disponibilidad específica' })
  @ApiResponse({ status: 200, description: 'Disponibilidad encontrada' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  async getDisponibilidad(@Param('id', ParseIntPipe) id: number) {
    return this.paquetesTuristicosService.getDisponibilidad(id);
  }

  @Patch('disponibilidad/:id')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar una disponibilidad' })
  @ApiResponse({ status: 200, description: 'Disponibilidad actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  async updateDisponibilidad(
    @Param('id') id: number,
    @Body() updateDisponibilidadDto: UpdateDisponibilidadDto
  ) {
    // Asegúrate de que las fechas estén en formato ISO-8601
    updateDisponibilidadDto.fechaInicio = new Date(updateDisponibilidadDto.fechaInicio).toISOString();
    updateDisponibilidadDto.fechaFin = new Date(updateDisponibilidadDto.fechaFin).toISOString();
    return this.paquetesTuristicosService.updateDisponibilidad(id, updateDisponibilidadDto);
  }

  @Delete('disponibilidad/:id')
  @Roles('Emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar una disponibilidad' })
  @ApiResponse({ status: 200, description: 'Disponibilidad eliminada exitosamente' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Disponibilidad no encontrada' })
  async deleteDisponibilidad(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.paquetesTuristicosService.deleteDisponibilidad(id);
  }
  
  @Post(':id/favoritosPaquetes')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Marcar paquete turístico como favorito' })
  @ApiResponse({ status: 201, description: 'Paquete turístico marcado como favorito' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async addFavorite(
    @Param('id') id: string,
    @Req() req: RequestWithUser
  ) {
    try {
      return this.paquetesTuristicosService.addFavorite(Number(id), req.user.id);
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al agregar el paquete a favoritos');
    }
  }

  @Delete(':id/favoritosPaquetes')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Desmarcar paquete turístico como favorito' })
  @ApiResponse({ status: 200, description: 'Paquete turístico desmarcado como favorito' })
  @ApiResponse({ status: 404, description: 'Favorito no encontrado' })
  async removeFavorite(
    @Param('id') id: string,
    @Req() req: RequestWithUser
  ) {
    try {
      return this.paquetesTuristicosService.removeFavorite(Number(id), req.user.id);
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al eliminar el paquete de favoritos');
    }
  }

  @Get('favoritosPaquetes/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener los paquetes turísticos favoritos del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de favoritos del usuario' })
  async findFavorites(@Req() req: any) {
    return this.paquetesTuristicosService.findFavorites(Number(req.user.id));
  }
}