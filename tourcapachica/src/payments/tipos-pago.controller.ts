import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TipoPagoService } from './tipos-pago.service';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('tipos-pago')
@Controller('tipos-pago')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class TipoPagoController {
  constructor(private readonly tipoPagoService: TipoPagoService) {}

  @Post()
  @Roles('SuperAdmin')
  @ApiOperation({ summary: 'Crear un nuevo tipo de pago' })
  @ApiResponse({ status: 201, description: 'Tipo de pago creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  create(@Body() createTipoPagoDto: CreateTipoPagoDto) {
    return this.tipoPagoService.create(createTipoPagoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de pago' })
  @ApiResponse({ status: 200, description: 'Lista de tipos de pago' })
  findAll() {
    return this.tipoPagoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de pago por ID' })
  @ApiResponse({ status: 200, description: 'Tipo de pago encontrado' })
  @ApiResponse({ status: 404, description: 'Tipo de pago no encontrado' })
  findOne(@Param('id') id: string) {
    return this.tipoPagoService.findOne(+id);
  }

  @Patch(':id')
  @Roles('SuperAdmin')
  @ApiOperation({ summary: 'Actualizar un tipo de pago' })
  @ApiResponse({ status: 200, description: 'Tipo de pago actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Tipo de pago no encontrado' })
  update(@Param('id') id: string, @Body() updateTipoPagoDto: UpdateTipoPagoDto) {
    return this.tipoPagoService.update(+id, updateTipoPagoDto);
  }

  @Delete(':id')
  @Roles('SuperAdmin')
  @ApiOperation({ summary: 'Eliminar un tipo de pago' })
  @ApiResponse({ status: 200, description: 'Tipo de pago eliminado exitosamente' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Tipo de pago no encontrado' })
  remove(@Param('id') id: string) {
    return this.tipoPagoService.remove(+id);
  }
} 