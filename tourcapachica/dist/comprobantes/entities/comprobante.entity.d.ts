export declare class Comprobante {
    id: number;
    pagoId: number;
    tipoComprobante: string;
    serie: string;
    numero: number;
    fechaEmision: Date;
    rucCliente?: string;
    razonSocial?: string;
    direccionCliente?: string;
    subtotal: number;
    igv: number;
    total: number;
    moneda: string;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
}
