import { CreatePaymentDetailDto } from './create-payment-detail.dto';
export declare class CreatePaymentDto {
    reservaId: number;
    paymentGateway: string;
    moneda?: string;
    datosMetodoPago?: any;
    metadata?: any;
    detalles?: CreatePaymentDetailDto[];
}
