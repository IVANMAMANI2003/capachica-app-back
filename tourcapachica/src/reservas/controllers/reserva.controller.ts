import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
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
  @ApiOperation({
    summary: 'Obtener estado de pago de una reserva',
    description:
      'Devuelve cuánto ya se pagó, cuánto falta pagar y los pagos realizados para una reserva.',
  })
  @ApiParam({
    name: 'reservaId',
    type: Number,
    description: 'ID de la reserva',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Estado de pago retornado correctamente',
    schema: {
      example: {
        reservaId: 1,
        precioTotal: 200.0,
        totalPagado: 100.0,
        restante: 100.0,
        pagos: [
          {
            id: 10,
            montoTotal: 100.0,
            fechaPago: '2025-05-14T12:00:00.000Z',
            estado: 'COMPLETADO',
          },
        ],
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Reserva no encontrada' })
  async getEstadoPago(@Param('reservaId', ParseIntPipe) reservaId: number) {
    return this.reservaService.getEstadoPagoReserva(reservaId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una reserva' })
  @ApiResponse({ status: 200, description: 'Reserva actualizada exitosamente.' })
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservaService.update(+id, updateReservaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una reserva' })
  @ApiResponse({ status: 200, description: 'Reserva eliminada exitosamente.' })
  remove(@Param('id') id: string) {
    return this.reservaService.remove(+id);
  }
}