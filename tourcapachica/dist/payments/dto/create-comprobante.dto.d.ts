export declare class CreateComprobanteDto {
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
    codigoSunat?: string;
    codigoHash?: string;
    xmlUrl?: string;
    pdfUrl?: string;
    qrCodeUrl?: string;
    tokenSunat?: string;
}
