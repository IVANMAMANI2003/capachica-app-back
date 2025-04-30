import { PartialType } from '@nestjs/swagger';
import { CreatePagoDetalleDto } from './create-pago-detalle.dto';

export class UpdatePagoDetalleDto extends PartialType(CreatePagoDetalleDto) {} 