import { UsuarioResponseDto } from './usuario-response.dto';
import { ItinerarioResponseDto } from './itinerario-response.dto';
export declare class ReservaResponseDto {
    id: number;
    codigoReserva: string;
    estado: string;
    moneda: string;
    monto: number;
    tipoReserva: string;
    fechaReserva: Date;
    fechaInicio: Date;
    fechaFin: Date;
    cantidadPersonas: number;
    notas: string;
    usuario: UsuarioResponseDto;
    itinerario: ItinerarioResponseDto[];
    createdAt: Date;
    updatedAt: Date;
}
