import { PartialType } from '@nestjs/swagger';
import { CreatePaymentDetailDto } from './payment-detail.dto';

export class UpdatePaymentDetailDto extends PartialType(CreatePaymentDetailDto) {}