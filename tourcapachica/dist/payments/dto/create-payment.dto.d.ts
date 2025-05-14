export declare class CreatePaymentDto {
    reservaId: number;
    paymentGateway: string;
    transactionId: string;
    montoTotal: number;
    moneda?: string;
    estado?: string;
    fechaPago?: Date;
    datosMetodoPago?: any;
    metadata?: any;
}
