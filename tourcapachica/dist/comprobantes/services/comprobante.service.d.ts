import { PrismaService } from '../../prisma/prisma.service';
export declare class ComprobanteService {
    private prisma;
    constructor(prisma: PrismaService);
    createComprobante(pagoId: number, total: number, rucCliente?: string): Promise<{
        id: number;
        pagoId: number;
        tipoComprobante: string;
        serie: string;
        numero: number;
        fechaEmision: Date;
        rucCliente: string | null;
        razonSocial: string | null;
        direccionCliente: string | null;
        subtotal: import(".prisma/client/runtime/library").Decimal;
        igv: import(".prisma/client/runtime/library").Decimal;
        total: import(".prisma/client/runtime/library").Decimal;
        moneda: string;
        estado: string;
        codigoSunat: string | null;
        codigoHash: string | null;
        xmlUrl: string | null;
        pdfUrl: string | null;
        qrCodeUrl: string | null;
        tokenSunat: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateComprobanteUniqueness(serie: string, numero: number): Promise<void>;
}
