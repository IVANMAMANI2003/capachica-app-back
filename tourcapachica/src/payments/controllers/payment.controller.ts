import { Controller, Post, Body, Patch, Param, Get, Delete } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiOperation({ summary: 'Iniciar un nuevo pago' })
  @ApiResponse({ status: 201, description: 'Pago iniciado exitosamente' })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar el estado de un pago' })
  @ApiParam({ name: 'id', description: 'ID del pago' })
  @ApiResponse({ status: 200, description: 'Estado del pago actualizado exitosamente' })
  update(
    @Param('id') id: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pagos' })
  @ApiResponse({ status: 200, description: 'Lista de pagos' })
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del pago' })
  @ApiResponse({ status: 200, description: 'Pago encontrado' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pago' })
  @ApiParam({ name: 'id', description: 'ID del pago' })
  @ApiResponse({ status: 200, description: 'Pago eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }


}