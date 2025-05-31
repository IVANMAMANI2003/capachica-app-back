export declare class PaymentDetails {
    id: number;
    pagoId: number;
    tipoPagoId: number;
    concepto: string;
    monto: number;
    porcentajeImpuesto: number;
    cantidad: number;
    descripcion?: string;
    createdAt: Date;
    updatedAt: Date;
    pago: any;
    tipoPago: any;
}
