export declare class PaymentDetailDto {
    tipoPagoId: number;
    concepto: string;
    monto: number;
    porcentajeImpuesto?: number;
    cantidad?: number;
    descripcion?: string;
}
export declare class CreatePaymentDto {
    reservaId: number;
    codigoTransaccion: string;
    montoTotal: number;
    moneda: string;
    estado: string;
    fechaPago: string;
    datosMetodoPago?: string;
    metadata?: string;
    detalles: PaymentDetailDto[];
}
