export declare class CreateComprobanteDto {
    pagoId: number;
    serie: string;
    numero: number;
    tipo: string;
    rucCliente?: string;
    razonSocial?: string;
    direccionCliente?: string;
    subtotal: number;
    igv?: number;
    total: number;
    moneda?: string;
    estado?: string;
    codigoSunat?: string;
    codigoHash?: string;
    xmlUrl?: string;
    pdfUrl?: string;
    notas?: string;
}
