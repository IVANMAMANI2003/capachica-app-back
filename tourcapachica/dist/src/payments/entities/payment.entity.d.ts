import { PaymentDetails } from './payment-detail.entity';
export declare class Payment {
    id: number;
    reservaId: number;
    paymentGateway: string;
    transactionId: string;
    montoTotal: number;
    moneda: string;
    estado: string;
    fechaPago?: Date;
    datosMetodoPago?: Record<string, any>;
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
    comprobante?: any;
    detalles: PaymentDetails[];
    reserva: any;
}
