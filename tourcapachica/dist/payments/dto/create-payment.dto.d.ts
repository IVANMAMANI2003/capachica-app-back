import { CreatePagoDetalleDto } from './create-pago-detalle.dto';
export declare class CreatePaymentDto {
    reservaId: number;
    paymentGateway: string;
    transactionId: string;
    montoTotal: string;
    moneda: string;
    estado: string;
    fechaPago?: Date;
    datosMetodoPago?: Record<string, any>;
    metadata?: Record<string, any>;
    detalles: CreatePagoDetalleDto[];
}
