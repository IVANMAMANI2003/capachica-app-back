import { EstadoPago } from '../enums/estado-pago.enum';
import { CreatePaymentDetailDto } from './create-payment-detail.dto';
export declare class CreatePaymentDto {
    reservaId: number;
    paymentGateway: string;
    transactionId: string;
    moneda?: string;
    estado: EstadoPago;
    datosMetodoPago?: any;
    metadata?: any;
    detalles?: CreatePaymentDetailDto[];
}
