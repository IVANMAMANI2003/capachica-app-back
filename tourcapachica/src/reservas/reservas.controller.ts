import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { EstadoReserva } from './dto/create-reserva.dto';

@ApiTags('reservas')
@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva reserva' })
  @ApiResponse({ status: 201, description: 'Reserva creada exitosamente' })
  @ApiResponse({ status: 404, description: 'Turista no encontrado' })
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las reservas' })
  @ApiResponse({ status: 200, description: 'Lista de reservas obtenida exitosamente' })
  findAll() {
    return this.reservasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una reserva por ID' })
  @ApiParam({ name: 'id', description: 'ID de la reserva' })
  @ApiResponse({ status: 200, description: 'Reserva encontrada exitosamente' })
  @ApiResponse({ status: 404, description: 'Reserva no encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una reserva' })
  @ApiParam({ name: 'id', description: 'ID de la reserva' })
  @ApiResponse({ status: 200, description: 'Reserva actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Reserva o turista no encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReservaDto: UpdateReservaDto,
  ) {
    return this.reservasService.update(id, updateReservaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una reserva' })
  @ApiParam({ name: 'id', description: 'ID de la reserva' })
  @ApiResponse({ status: 200, description: 'Reserva eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Reserva no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reservasService.remove(id);
  }

  @Get('turista/:turistaId')
  @ApiOperation({ summary: 'Obtener todas las reservas de un turista' })
  @ApiParam({ name: 'turistaId', description: 'ID del turista' })
  @ApiResponse({ status: 200, description: 'Lista de reservas obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'Turista no encontrado' })
  findByTurista(@Param('turistaId', ParseIntPipe) turistaId: number) {
    return this.reservasService.findByTurista(turistaId);
  }

  @Patch(':id/estado')
  @ApiOperation({ summary: 'Actualizar el estado de una reserva' })
  @ApiParam({ name: 'id', description: 'ID de la reserva' })
  @ApiResponse({ status: 200, description: 'Estado de la reserva actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Reserva no encontrada' })
  updateEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body('estado') estado: EstadoReserva,
  ) {
    return this.reservasService.updateEstado(id, estado);
  }
} 