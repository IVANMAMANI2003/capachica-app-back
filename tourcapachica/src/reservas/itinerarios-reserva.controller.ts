import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ItinerariosReservaService } from './itinerarios-reserva.service';
import { CreateItinerarioReservaDto } from './dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from './dto/update-itinerario-reserva.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('itinerarios-reserva')
@Controller('itinerarios-reserva')
export class ItinerariosReservaController {
  constructor(private readonly itinerariosReservaService: ItinerariosReservaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo itinerario de reserva' })
  @ApiResponse({ status: 201, description: 'Itinerario creado exitosamente' })
  @ApiResponse({ status: 404, description: 'Reserva, servicio o lugar turístico no encontrado' })
  create(@Body() createItinerarioReservaDto: CreateItinerarioReservaDto) {
    return this.itinerariosReservaService.create(createItinerarioReservaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los itinerarios de reserva' })
  @ApiResponse({ status: 200, description: 'Lista de itinerarios obtenida exitosamente' })
  findAll() {
    return this.itinerariosReservaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un itinerario de reserva por ID' })
  @ApiParam({ name: 'id', description: 'ID del itinerario' })
  @ApiResponse({ status: 200, description: 'Itinerario encontrado exitosamente' })
  @ApiResponse({ status: 404, description: 'Itinerario no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itinerariosReservaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un itinerario de reserva' })
  @ApiParam({ name: 'id', description: 'ID del itinerario' })
  @ApiResponse({ status: 200, description: 'Itinerario actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Itinerario, reserva o servicio no encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateItinerarioReservaDto: UpdateItinerarioReservaDto,
  ) {
    return this.itinerariosReservaService.update(id, updateItinerarioReservaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un itinerario de reserva' })
  @ApiParam({ name: 'id', description: 'ID del itinerario' })
  @ApiResponse({ status: 200, description: 'Itinerario eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Itinerario no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.itinerariosReservaService.remove(id);
  }

  @Get('reserva/:reservaId')
  @ApiOperation({ summary: 'Obtener todos los itinerarios de una reserva' })
  @ApiParam({ name: 'reservaId', description: 'ID de la reserva' })
  @ApiResponse({ status: 200, description: 'Lista de itinerarios obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'Reserva no encontrada' })
  findByReserva(@Param('reservaId', ParseIntPipe) reservaId: number) {
    return this.itinerariosReservaService.findByReserva(reservaId);
  }
} 