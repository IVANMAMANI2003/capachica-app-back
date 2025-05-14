import { CreatePaymentDetailDto } from './create-payment-detail.dto';
export declare class CreatePaymentDto {
    reservaId: number;
    paymentGateway: string;
    transactionId: string;
    moneda?: string;
    datosMetodoPago?: any;
    metadata?: any;
    detalles?: CreatePaymentDetailDto[];
}
