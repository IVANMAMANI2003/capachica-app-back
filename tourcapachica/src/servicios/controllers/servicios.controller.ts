import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, Req, HttpException, HttpStatus } from '@nestjs/common';
import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ServicioEntity } from '../entities/servicio.entity';
import { UpdateEstadoDto } from '../dto/update-estado.dto';

@ApiTags('servicios')
@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo servicio' })
  @ApiResponse({ status: 201, description: 'Servicio creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async create(
    @Body() createServicioDto: CreateServicioDto,
    @Req() req,
      ) {
      try {
        // Extraemos emprendimientoId del token
        const emprendimientoId: number = req.user.emprendimientoId;
        if (!emprendimientoId) {
          throw new HttpException('No hay emprendimiento activo', HttpStatus.BAD_REQUEST);
        }

        // Llamamos al service, pasándole el DTO y el ID
        return await this.serviciosService.create(createServicioDto, emprendimientoId);
      } catch (error) {
        // Re-lanzar si ya es HttpException, o envolver en 400
        if (error instanceof HttpException) throw error;
        throw new HttpException('Error al crear el servicio', HttpStatus.BAD_REQUEST);
      }
    }
  
    @Get()
    @ApiOperation({ summary: 'Obtener todos los servicios (público)' })
    @ApiResponse({ status: 200, description: 'Lista de servicios', type: [ServicioEntity] })
    findAll() {
      return this.serviciosService.findAll();
    }
  
    // —— Mis servicios del emprendimiento autenticado ——
    @Get('mios')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('Emprendedor', 'SuperAdmin')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Obtener servicios de mi emprendimiento' })
    @ApiResponse({ status: 200, description: 'Lista de servicios propios', type: [ServicioEntity] })
    findMine(@Req() req) {
      const emprendimientoId: number = req.user.emprendimientoId;
      return this.serviciosService.findByEmprendimiento(emprendimientoId);
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
    @Roles('Emprendedor', 'SuperAdmin')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Actualizar un servicio por ID' })
    @ApiResponse({ status: 200, description: 'Servicio actualizado exitosamente', type: ServicioEntity })
    @ApiResponse({ status: 400, description: 'Datos inválidos' })
    @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
    update(
      @Param('id') id: string,
      @Body() dto: UpdateServicioDto,
      @Req() req
    ) {
      const emprendimientoId: number = req.user.emprendimientoId;
      return this.serviciosService.update(+id, dto, emprendimientoId);
    }
  
    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('Emprendedor', 'SuperAdmin')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Eliminar un servicio por ID' })
    @ApiResponse({ status: 200, description: 'Servicio eliminado exitosamente' })
    @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
    remove(
      @Param('id') id: string,
      @Req() req
    ) {
      const emprendimientoId: number = req.user.emprendimientoId;
      return this.serviciosService.remove(+id, emprendimientoId);
    }
  
    @Patch(':id/estado')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('Emprendedor', 'SuperAdmin')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Actualizar el estado de un servicio' })
    @ApiResponse({ status: 200, description: 'Estado actualizado', type: ServicioEntity })
    @ApiResponse({ status: 400, description: 'Estado inválido' })
    @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
    updateEstado(
      @Param('id') id: string,
      @Body() updateEstadoDto: UpdateEstadoDto,
      @Req() req
    ) {
      const emprendimientoId: number = req.user.emprendimientoId;
      return this.serviciosService.updateEstado(+id, updateEstadoDto.estado, emprendimientoId);
    }
  
    @Get('tipo-servicio/:tipoServicioId')
    @ApiOperation({ summary: 'Obtener servicios por tipo de servicio' })
    @ApiResponse({ status: 200, description: 'Lista de servicios del tipo especificado', type: [ServicioEntity] })
    findByTipoServicio(@Param('tipoServicioId') tipoServicioId: string) {
      return this.serviciosService.findByTipoServicio(+tipoServicioId);
    }
  }