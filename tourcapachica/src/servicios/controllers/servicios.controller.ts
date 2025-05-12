import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, Req, HttpException, HttpStatus, BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ServiciosService } from '../services/servicios.service';
import { CreateServicioDto, CreateServicioPayloadDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto, UpdateServicioPayloadDto } from '../dto/update-servicio.dto';
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
  async create(
    @Body() payload: CreateServicioPayloadDto,
    @Req() req
    ) {
      try {
        const user = req.user;
        const roles = user.roles || [];
        const role = roles[0]; // Asume un solo rol
        let emprendimientoId: number;
    
        console.log('🧾 Usuario autenticado:', user);
        console.log('📦 Payload recibido:', payload);
        console.log('✅ Rol obtenido:', role);
    
        if (role === 'SuperAdmin') {
          if (!payload.emprendimientoId) {
            throw new BadRequestException(
              'El campo emprendimientoId es obligatorio para SuperAdmin'
            );
          }
          emprendimientoId = payload.emprendimientoId;
        } else if (role === 'Emprendedor') {
          if (!user.emprendimientoId) {
            throw new BadRequestException(
              'No se pudo obtener el emprendimientoId desde el token'
            );
          }
          emprendimientoId = user.emprendimientoId;
        } else {
          throw new ForbiddenException('Rol no autorizado para crear servicios');
        }
    
        console.log('🔑 Emprendimiento ID usado:', emprendimientoId);
    
        const servicio = await this.serviciosService.create(
          payload.servicio,
          emprendimientoId
        );
    
        return servicio;
      } catch (error) {
        console.error('🚨 Error al crear el servicio:', error);
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Error interno al crear el servicio',
          HttpStatus.BAD_REQUEST
        );
      }
    }
  

    @Get()
    @ApiOperation({ summary: 'Obtener todos los servicios (público)' })
    @ApiResponse({ status: 200, description: 'Lista de servicios', type: [ServicioEntity] })
    findAll() {
      return this.serviciosService.findAll();
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
    @ApiResponse({ status: 403, description: 'Rol no autorizado' })
    @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
    async update(
      @Param('id') id: string,
      @Body() dto: UpdateServicioPayloadDto,
      @Req() req
        ) {
          try {
            const user = req.user;
            const roles = user.roles || [];
            const role = roles[0]; // Asume un solo rol
            let emprendimientoId: number;

            console.log('🧾 Usuario autenticado:', user);
            console.log('🛠️ Payload recibido para actualización:', dto);
            console.log('✅ Rol obtenido:', role);

            if (role === 'SuperAdmin') {
              if (!dto.emprendimientoId) {
                throw new BadRequestException(
                  'El campo emprendimientoId es obligatorio para SuperAdmin'
                );
              }
              emprendimientoId = dto.emprendimientoId;
            } else if (role === 'Emprendedor') {
              if (!user.emprendimientoId) {
                throw new BadRequestException(
                  'No se pudo obtener el emprendimientoId desde el token'
                );
              }
              emprendimientoId = user.emprendimientoId;
            } else {
              throw new ForbiddenException('Rol no autorizado para actualizar servicios');
            }

            console.log('🔑 Emprendimiento ID usado:', emprendimientoId);

            const servicio = await this.serviciosService.update(
              +id,
              dto.servicio,
              emprendimientoId
            );

            return servicio;
          } catch (error) {
            console.error('🚨 Error al actualizar el servicio:', error);
            if (error instanceof HttpException) {
              throw error;
            }
            throw new HttpException(
              'Error interno al actualizar el servicio',
              HttpStatus.BAD_REQUEST
            );
          }
        }



    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('Emprendedor', 'SuperAdmin')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Eliminar un servicio por ID' })
    @ApiResponse({ status: 200, description: 'Servicio eliminado exitosamente' })
    @ApiResponse({ status: 403, description: 'Rol no autorizado' })
    @ApiResponse({ status: 404, description: 'Servicio no encontrado' })
    async remove(@Param('id') id: string, @Req() req) {
      const user = req.user;
      const roles = user.roles || [];
      const role = roles[0];
      let emprendimientoId: number;

      if (role === 'SuperAdmin') {
        emprendimientoId = null;
      } else if (role === 'Emprendedor') {
        if (!user.emprendimientoId) {
          throw new BadRequestException('No se pudo obtener el emprendimientoId desde el token');
        }
        emprendimientoId = user.emprendimientoId;
      } else {
        throw new ForbiddenException('Rol no autorizado para eliminar servicios');
      }

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