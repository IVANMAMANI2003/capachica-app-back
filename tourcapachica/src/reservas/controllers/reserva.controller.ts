import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ReservaService } from '../services/reserva.service';
import { CreateReservaDto } from '../dto/create-reserva.dto';
import { UpdateReservaDto } from '../dto/update-reserva.dto';

@ApiTags('reservas')
@Controller('reservas')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva reserva' })
  @ApiResponse({ status: 201, description: 'Reserva creada exitosamente.' })
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservaService.create(createReservaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las reservas' })
  @ApiResponse({ status: 200, description: 'Lista de reservas.' })
  findAll() {
    return this.reservaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una reserva por ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la reserva.' })
  findOne(@Param('id') id: string) {
    return this.reservaService.findOne(+id);
  }

  @Get(':reservaId/estado-pago')
  @ApiOperation({ summary: 'Obtener el estado general de pago de una reserva' })
  @ApiParam({ name: 'reservaId', type: Number, description: 'ID de la reserva' })
  @ApiResponse({
    status: 200,
    description: 'Estado general del pago de la reserva retornado exitosamente.'
  })
  @ApiResponse({ status: 404, description: 'Reserva no encontrada.' })
  async getEstadoPagoReserva(
    @Param('reservaId', ParseIntPipe) reservaId: number
  ) {
    const reserva = await this.reservaService.getEstadoPagoReserva(reservaId);
    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }
    return reserva;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una reserva' })
  @ApiResponse({ status: 200, description: 'Reserva actualizada exitosamente.' })
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservaService.update(+id, updateReservaDto);
  }

  @Patch(':reservaId/cancelar')
@ApiOperation({ summary: 'Cancelar una reserva' })
@ApiBody({
  schema: {
    example: {
      motivo: 'El cliente no podrá viajar',
    }
  }
})
async cancelarReserva(
  @Param('reservaId', ParseIntPipe) reservaId: number,
  @Body() body: { motivo: string; userId: number }
) {
  return this.reservaService.cancelarReserva(reservaId, body.motivo);
}

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una reserva' })
  @ApiResponse({ status: 200, description: 'Reserva eliminada exitosamente.' })
  remove(@Param('id') id: string) {
    return this.reservaService.remove(+id);
  }
}