export declare class CreateComprobanteDto {
    pagoId: number;
    tipoComprobante: string;
    rucCliente?: string;
    razonSocial?: string;
    subtotal: number;
    igv: number;
    total: number;
    estado: string;
    fechaEmision: Date;
}
