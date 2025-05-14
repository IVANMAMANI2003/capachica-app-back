export declare class CreateComprobanteDto {
    pagoId: number;
    tipoComprobante: string;
    serie: string;
    numero: number;
    rucCliente?: string;
    razonSocial?: string;
    subtotal: number;
    igv: number;
    total: number;
    estado: string;
    fechaEmision: Date;
}
