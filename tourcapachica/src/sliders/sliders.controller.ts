import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { SlidersService } from './sliders.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiConsumes } from '@nestjs/swagger';

@Controller('sliders')
@ApiTags('sliders')
export class SlidersController {
  constructor(private readonly slidersService: SlidersService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'files', maxCount: 5 }
  ]))
  @ApiOperation({ summary: 'Crear un nuevo slider' })
  @ApiResponse({ status: 201, description: 'Slider creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(
    @Body() createSliderDto: CreateSliderDto,
    @UploadedFiles() files: { files?: Express.Multer.File[] }
  ) {
    return this.slidersService.create(createSliderDto, files?.files);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los sliders' })
  @ApiResponse({ status: 200, description: 'Lista de sliders' })
  findAll() {
    return this.slidersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un slider por ID' })
  @ApiResponse({ status: 200, description: 'Slider encontrado' })
  @ApiResponse({ status: 404, description: 'Slider no encontrado' })
  async findOne(@Param('id') id: string) {
    const slider = await this.slidersService.findOne(+id);
    if (!slider) {
      throw new HttpException('Slider no encontrado', HttpStatus.NOT_FOUND);
    }
    return slider;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'files', maxCount: 5 }
  ]))
  @ApiOperation({ summary: 'Actualizar un slider por ID' })
  @ApiResponse({ status: 200, description: 'Slider actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async update(
    @Param('id') id: string,
    @Body() updateSliderDto: UpdateSliderDto,
    @UploadedFiles() files: { files?: Express.Multer.File[] }
  ) {
    const slider = await this.slidersService.findOne(+id);
    if (!slider) {
      throw new HttpException('Slider no encontrado', HttpStatus.NOT_FOUND);
    }
    return this.slidersService.update(+id, updateSliderDto, files?.files);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('emprendedor', 'SuperAdmin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un slider por ID' })
  @ApiResponse({ status: 200, description: 'Slider eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Slider no encontrado' })
  async remove(@Param('id') id: string) {
    const slider = await this.slidersService.findOne(+id);
    if (!slider) {
      throw new HttpException('Slider no encontrado', HttpStatus.NOT_FOUND);
    }
    return this.slidersService.remove(+id);
  }
} 