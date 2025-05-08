import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { FilterResenasDto } from './dto/filter-resenas.dto';
import { PromedioResponseDto } from './dto/promedio-response.dto';
import { ResenasService } from './resenas.service';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';

@ApiTags('resenas')
@Controller('resenas')
export class ResenasController {
  constructor(private readonly resenasService: ResenasService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin', 'User')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear una nueva reseña' })
  @ApiResponse({ status: 201, description: 'Reseña creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createResenaDto: CreateResenaDto) {
    try {
      return this.resenasService.create(createResenaDto);
    } catch (error) {
      throw new HttpException('Error al crear la reseña', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las reseñas' })
  @ApiResponse({ status: 200, description: 'Lista de reseñas obtenida exitosamente' })
  findAll() {
    return this.resenasService.findAll();
  }

  @Get('/servicio/:servicioId')
  @ApiOperation({ summary: 'Obtener  reseñas por el id del servicio' })
  @ApiResponse({ status: 200, description: 'Lista de reseñas por servicio obtenida exitosamente' })
  findByServicio(@Param('servicioId') servicioId: string) {
    return this.resenasService.findAll().then(resenas => resenas.filter(r => r.servicioId === Number(servicioId)));
  }

  

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una reseña por ID' })
  @ApiResponse({ status: 200, description: 'Reseña encontrada' })
  @ApiResponse({ status: 404, description: 'Reseña no encontrada' })
  async findOne(@Param('id') id: string) {
    const resena = await this.resenasService.findOne(Number(id));
    if (!resena) {
      throw new HttpException('Reseña no encontrada', HttpStatus.NOT_FOUND);
    }
    return resena;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin', 'User')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar una reseña por ID' })
  @ApiResponse({ status: 200, description: 'Reseña actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Reseña no encontrada' })
  async update(@Param('id') id: string, @Body() updateResenaDto: UpdateResenaDto) {
    const resena = await this.resenasService.findOne(Number(id));
    if (!resena) {
      throw new HttpException('Reseña no encontrada', HttpStatus.NOT_FOUND);
    }
    return this.resenasService.update(Number(id), updateResenaDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Emprendedor', 'SuperAdmin', 'User')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar una reseña por ID' })
  @ApiResponse({ status: 200, description: 'Reseña eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Reseña no encontrada' })
  async remove(@Param('id') id: string) {
    const resena = await this.resenasService.findOne(Number(id));
    if (!resena) {
      throw new HttpException('Reseña no encontrada', HttpStatus.NOT_FOUND);
    }
    return this.resenasService.remove(Number(id));
  }

  @Get('/promedio/:servicioId')
  @ApiOperation({ summary: 'Obtener el promedio de calificación por servicio' })
  @ApiResponse({ status: 200, description: 'Promedio de calificación obtenido exitosamente' })
  async promedio(@Param('servicioId') servicioId: string): Promise<PromedioResponseDto> {
    return this.resenasService.promedioCalificacionPorServicio(Number(servicioId));
  }
}