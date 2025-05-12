import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, Req, HttpException, HttpStatus, BadRequestException, ForbiddenException } from '@nestjs/common';
import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { ServicioEntity } from '../entities/servicio.entity';
import { UpdateEstadoDto } from '../dto/update-estado.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';




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
  @ApiResponse({ status: 403, description: 'Rol no autorizado' })
  async create(@Body() createServicioDto: CreateServicioDto, @Req() req) {
    try {
      const user = req.user; // Obtenemos el usuario autenticado
      const role = user.roles?.[0]; // Suponemos que el usuario tiene un solo rol, pero puedes adaptarlo si es necesario
      let emprendimientoId: number;

      console.log('🧾 Usuario autenticado:', user);
      console.log('📦 DTO recibido:', createServicioDto);
      console.log('✅ Rol obtenido:', role);

      // Lógica de validación según el rol
      if (role === 'SuperAdmin') {
        // Si el usuario es SuperAdmin, el emprendimientoId debe ser obligatorio en el DTO
        if (!createServicioDto.emprendimientoId) {
          throw new BadRequestException('El campo emprendimientoId es obligatorio para SuperAdmin');
        }
        emprendimientoId = createServicioDto.emprendimientoId;
      } else if (role === 'Emprendedor') {
        // Si el usuario es Emprendedor, se toma el emprendimientoId desde el token del usuario
        if (!user.emprendimientoId) {
          throw new BadRequestException('No se pudo obtener el emprendimiento desde el token');
        }
        emprendimientoId = user.emprendimientoId;
      } else {
        // Si el usuario no tiene un rol adecuado, se lanza un error
        throw new ForbiddenException('Rol no autorizado para crear servicios');
      }

      console.log('🔑 Emprendimiento ID:', emprendimientoId);

      // Llamamos al servicio para crear el servicio, pasando el DTO y el emprendimientoId
      const servicio = await this.serviciosService.create(createServicioDto, emprendimientoId);

      // Respondemos con el servicio creado
      return servicio;
      
    } catch (error) {
      console.error('🚨 Error al crear el servicio:', error);

      // Si el error es una excepción de NestJS, la lanzamos directamente
      if (error instanceof HttpException) {
        throw error;
      }

      // En otros casos, lanzamos una excepción genérica
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