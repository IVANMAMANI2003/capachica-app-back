import { Controller, Get, Post, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ItinerariosLugarService } from './itinerarios-lugar.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('itinerarios-lugar')
@Controller('itinerarios-lugar')
export class ItinerariosLugarController {
  constructor(private readonly itinerariosLugarService: ItinerariosLugarService) {}

  @Post(':itinerarioId/lugar/:lugarTuristicoId')
  @ApiOperation({ summary: 'Agregar un lugar turístico a un itinerario' })
  @ApiParam({ name: 'itinerarioId', description: 'ID del itinerario' })
  @ApiParam({ name: 'lugarTuristicoId', description: 'ID del lugar turístico' })
  @ApiResponse({ status: 201, description: 'Lugar turístico agregado al itinerario exitosamente' })
  @ApiResponse({ status: 404, description: 'Itinerario o lugar turístico no encontrado' })
  create(
    @Param('itinerarioId', ParseIntPipe) itinerarioId: number,
    @Param('lugarTuristicoId', ParseIntPipe) lugarTuristicoId: number,
  ) {
    return this.itinerariosLugarService.create(itinerarioId, lugarTuristicoId);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las relaciones entre itinerarios y lugares turísticos' })
  @ApiResponse({ status: 200, description: 'Lista de relaciones obtenida exitosamente' })
  findAll() {
    return this.itinerariosLugarService.findAll();
  }

  @Get('itinerario/:itinerarioId')
  @ApiOperation({ summary: 'Obtener todos los lugares turísticos de un itinerario' })
  @ApiParam({ name: 'itinerarioId', description: 'ID del itinerario' })
  @ApiResponse({ status: 200, description: 'Lista de lugares turísticos obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'Itinerario no encontrado' })
  findByItinerario(@Param('itinerarioId', ParseIntPipe) itinerarioId: number) {
    return this.itinerariosLugarService.findByItinerario(itinerarioId);
  }

  @Get('lugar/:lugarTuristicoId')
  @ApiOperation({ summary: 'Obtener todos los itinerarios que incluyen un lugar turístico' })
  @ApiParam({ name: 'lugarTuristicoId', description: 'ID del lugar turístico' })
  @ApiResponse({ status: 200, description: 'Lista de itinerarios obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'Lugar turístico no encontrado' })
  findByLugarTuristico(@Param('lugarTuristicoId', ParseIntPipe) lugarTuristicoId: number) {
    return this.itinerariosLugarService.findByLugarTuristico(lugarTuristicoId);
  }

  @Delete(':itinerarioId/lugar/:lugarTuristicoId')
  @ApiOperation({ summary: 'Eliminar un lugar turístico de un itinerario' })
  @ApiParam({ name: 'itinerarioId', description: 'ID del itinerario' })
  @ApiParam({ name: 'lugarTuristicoId', description: 'ID del lugar turístico' })
  @ApiResponse({ status: 200, description: 'Lugar turístico eliminado del itinerario exitosamente' })
  @ApiResponse({ status: 404, description: 'Relación no encontrada' })
  remove(
    @Param('itinerarioId', ParseIntPipe) itinerarioId: number,
    @Param('lugarTuristicoId', ParseIntPipe) lugarTuristicoId: number,
  ) {
    return this.itinerariosLugarService.remove(itinerarioId, lugarTuristicoId);
  }

  @Delete('itinerario/:itinerarioId')
  @ApiOperation({ summary: 'Eliminar todos los lugares turísticos de un itinerario' })
  @ApiParam({ name: 'itinerarioId', description: 'ID del itinerario' })
  @ApiResponse({ status: 200, description: 'Lugares turísticos eliminados del itinerario exitosamente' })
  @ApiResponse({ status: 404, description: 'Itinerario no encontrado' })
  removeByItinerario(@Param('itinerarioId', ParseIntPipe) itinerarioId: number) {
    return this.itinerariosLugarService.removeByItinerario(itinerarioId);
  }
} 