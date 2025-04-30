import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('pagos')
@Controller('pagos')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @Roles('User')
  @ApiOperation({ summary: 'Crear un nuevo pago' })
  @ApiResponse({ status: 201, description: 'Pago creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Reserva no encontrada' })
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get()
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Obtener todos los pagos' })
  @ApiResponse({ status: 200, description: 'Lista de pagos' })
  async findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  @Roles('User', 'Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Obtener un pago por ID' })
  @ApiResponse({ status: 200, description: 'Pago encontrado' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  async findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(+id);
  }

  @Get('reserva/:reservaId')
  @ApiOperation({ summary: 'Obtener pagos por ID de reserva' })
  @ApiResponse({ status: 200, description: 'Lista de pagos de la reserva' })
  findByReservaId(@Param('reservaId') reservaId: string) {
    return this.paymentsService.findByReservaId(+reservaId);
  }

  @Patch(':id')
  @Roles('SuperAdmin', 'Admin')
  @ApiOperation({ summary: 'Actualizar un pago' })
  @ApiResponse({ status: 200, description: 'Pago actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(+id, updatePaymentDto);
  }

  @Delete(':id')
  @Roles('SuperAdmin')
  @ApiOperation({ summary: 'Eliminar un pago' })
  @ApiResponse({ status: 200, description: 'Pago eliminado exitosamente' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(+id);
  }

  @Patch(':id/estado')
  @Roles('SuperAdmin', 'Admin')
  @ApiOperation({ summary: 'Actualizar el estado de un pago' })
  @ApiResponse({ status: 200, description: 'Estado del pago actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Estado inválido' })
  @ApiResponse({ status: 403, description: 'No autorizado' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  updateEstado(@Param('id') id: string, @Body('estado') estado: string) {
    return this.paymentsService.updateEstado(+id, estado);
  }
} 