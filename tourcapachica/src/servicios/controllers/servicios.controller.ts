import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFiles, ParseIntPipe } from '@nestjs/common';
import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ServicioEntity } from '../entities/servicio.entity';

@ApiTags('servicios')
@Controller('servicios')

export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post('emprendimiento/:emprendimientoId')
  @Roles('emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Crear un nuevo servicio' })
  @ApiResponse({ status: 201, description: 'Servicio creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        tipoServicioId: { type: 'number' },
        nombre: { type: 'string' },
        descripcion: { type: 'string' },
        precioBase: { type: 'number' },
        moneda: { type: 'string' },
        estado: { type: 'string' },
        detallesServicio: { type: 'string' },
        imagenes: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(FilesInterceptor('imagenes', 10))
  async create(
    @Param('emprendimientoId', ParseIntPipe) emprendimientoId: number,
    @Body() createServicioDto: CreateServicioDto,
    @UploadedFiles() imagenes?: Express.Multer.File[],
  ) {
    if (imagenes) {
      createServicioDto.imagenes = imagenes.map(file => ({ url: file.path }));
    }
    return this.serviciosService.create(emprendimientoId, createServicioDto);
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
  @Roles('emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Actualizar un servicio' })
  @ApiResponse({ status: 200, description: 'Servicio actualizado', type: ServicioEntity })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  update(@Param('id') id: string, @Body() updateServicioDto: UpdateServicioDto) {
    return this.serviciosService.update(+id, updateServicioDto);
  }

  @Delete(':id')
  @Roles('emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Eliminar un servicio' })
  @ApiResponse({ status: 200, description: 'Servicio eliminado' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  remove(@Param('id') id: string) {
    return this.serviciosService.remove(+id);
  }

  @Patch(':id/estado')
  @Roles('emprendedor', 'SuperAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Actualizar el estado de un servicio' })
  @ApiResponse({ status: 200, description: 'Estado actualizado', type: ServicioEntity })
  @ApiResponse({ status: 400, description: 'Estado inválido' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  updateEstado(@Param('id') id: string, @Body('estado') estado: string) {
    return this.serviciosService.updateEstado(+id, estado);
  }
} 