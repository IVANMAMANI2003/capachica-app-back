import { ServicioResponseDto } from './servicio-response.dto';
export declare class ItinerarioResponseDto {
    id: number;
    reservaId: number;
    servicioId: number;
    fecha: Date;
    horaInicio: string;
    horaFin: string;
    cantidadPersonas: number;
    precioUnitario: number;
    precioTotal: number;
    notas: string;
    servicio: ServicioResponseDto;
    createdAt: Date;
    updatedAt: Date;
}
