import { ComprobanteResponseDto } from './comprobante-response.dto';
export declare class PagoResponseDto {
    id: number;
    reservaId: number;
    monto: number;
    metodoPago: string;
    estado: string;
    fechaPago: Date;
    notas?: string;
    comprobante?: ComprobanteResponseDto;
    createdAt: Date;
    updatedAt: Date;
}
