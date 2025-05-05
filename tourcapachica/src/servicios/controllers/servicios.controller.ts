import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { ServicioEntity } from '../entities/servicio.entity';

@ApiTags('servicios')
@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'files', maxCount: 5 }
  ]))
  @ApiOperation({ summary: 'Crear un nuevo servicio' })
  @ApiResponse({ status: 201, description: 'Servicio creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(
    @Body() createServicioDto: CreateServicioDto,
    @UploadedFiles() files: { files?: Express.Multer.File[] }
  ) {
    return this.serviciosService.create(createServicioDto, files?.files);
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
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'files', maxCount: 5 }
  ]))
  @ApiOperation({ summary: 'Actualizar un servicio por ID' })
  @ApiResponse({ status: 200, description: 'Servicio actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
  update(
    @Param('id') id: string,
    @Body() updateServicioDto: UpdateServicioDto,
    @UploadedFiles() files: { files?: Express.Multer.File[] }
  ) {
    return this.serviciosService.update(+id, updateServicioDto, files?.files);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un servicio por ID' })
  @ApiResponse({ status: 200, description: 'Servicio eliminado exitosamente' })
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

  @Get('tipo-servicio/:tipoServicioId')
  @ApiOperation({ summary: 'Obtener servicios por tipo de servicio' })
  @ApiResponse({ status: 200, description: 'Lista de servicios del tipo especificado' })
  findByTipoServicio(@Param('tipoServicioId') tipoServicioId: string) {
    return this.serviciosService.findByTipoServicio(+tipoServicioId);
  }
} 