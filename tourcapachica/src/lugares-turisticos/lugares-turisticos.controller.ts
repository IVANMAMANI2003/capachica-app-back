import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { LugaresTuristicosService } from './lugares-turisticos.service';
import { CreateLugarTuristicoDto } from './dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from './dto/update-lugar-turistico.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('lugares-turisticos')
@Controller('lugares-turisticos')
export class LugaresTuristicosController {
  constructor(private readonly lugaresTuristicosService: LugaresTuristicosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'files', maxCount: 5 }
  ]))
  @ApiOperation({ summary: 'Crear un nuevo lugar turístico' })
  @ApiResponse({ status: 201, description: 'Lugar turístico creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(
    @Body() createLugarTuristicoDto: CreateLugarTuristicoDto,
    @UploadedFiles() files: { files?: Express.Multer.File[] }
  ) {
    return this.lugaresTuristicosService.create(createLugarTuristicoDto, files?.files);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los lugares turísticos' })
  @ApiResponse({ status: 200, description: 'Lista de lugares turísticos' })
  findAll() {
    return this.lugaresTuristicosService.findAll();
  }

  @Get('destacados')
  @ApiOperation({ summary: 'Obtener lugares turísticos destacados' })
  @ApiResponse({ status: 200, description: 'Lista de lugares turísticos destacados' })
  findDestacados() {
    return this.lugaresTuristicosService.findDestacados();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un lugar turístico por ID' })
  @ApiResponse({ status: 200, description: 'Lugar turístico encontrado' })
  @ApiResponse({ status: 404, description: 'Lugar turístico no encontrado' })
  async findOne(@Param('id') id: string) {
    const lugar = await this.lugaresTuristicosService.findOne(+id);
    if (!lugar) {
      throw new HttpException('Lugar turístico no encontrado', HttpStatus.NOT_FOUND);
    }
    return lugar;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'files', maxCount: 5 }
  ]))
  @ApiOperation({ summary: 'Actualizar un lugar turístico por ID' })
  @ApiResponse({ status: 200, description: 'Lugar turístico actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async update(
    @Param('id') id: string,
    @Body() updateLugarTuristicoDto: UpdateLugarTuristicoDto,
    @UploadedFiles() files: { files?: Express.Multer.File[] }
  ) {
    const lugar = await this.lugaresTuristicosService.findOne(+id);
    if (!lugar) {
      throw new HttpException('Lugar turístico no encontrado', HttpStatus.NOT_FOUND);
    }
    return this.lugaresTuristicosService.update(+id, updateLugarTuristicoDto, files?.files);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un lugar turístico por ID' })
  @ApiResponse({ status: 200, description: 'Lugar turístico eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Lugar turístico no encontrado' })
  async remove(@Param('id') id: string) {
    const lugar = await this.lugaresTuristicosService.findOne(+id);
    if (!lugar) {
      throw new HttpException('Lugar turístico no encontrado', HttpStatus.NOT_FOUND);
    }
    return this.lugaresTuristicosService.remove(+id);
  }
} 