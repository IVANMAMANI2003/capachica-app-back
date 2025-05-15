import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ItinerarioReservaService } from '../services/itinerario-reserva.service';
import { CreateItinerarioReservaDto } from '../dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from '../dto/update-itinerario-reserva.dto';
class CreateItinerariosForReservaDto {
  reservaId: number;
  itinerarios: CreateItinerarioReservaDto[];
}

@ApiTags('itinerarios')
@Controller('itinerarios')
export class ItinerarioReservaController {
  constructor(private readonly itinerarioReservaService: ItinerarioReservaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nuevos itinerarios para una reserva' })
  @ApiResponse({ status: 201, description: 'Itinerarios creados exitosamente.' })
  createMany(@Body() dto: CreateItinerariosForReservaDto) {
    return this.itinerarioReservaService.createMany(dto.reservaId, dto.itinerarios);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los itinerarios' })
  @ApiResponse({ status: 200, description: 'Lista de itinerarios.' })
  findAll() {
    return this.itinerarioReservaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un itinerario por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del itinerario.' })
  findOne(@Param('id') id: string) {
    return this.itinerarioReservaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un itinerario' })
  @ApiResponse({ status: 200, description: 'Itinerario actualizado exitosamente.' })
  update(@Param('id') id: string, @Body() updateItinerarioReservaDto: UpdateItinerarioReservaDto) {
    return this.itinerarioReservaService.update(+id, updateItinerarioReservaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un itinerario' })
  @ApiResponse({ status: 200, description: 'Itinerario eliminado exitosamente.' })
  remove(@Param('id') id: string) {
    return this.itinerarioReservaService.remove(+id);
  }
}