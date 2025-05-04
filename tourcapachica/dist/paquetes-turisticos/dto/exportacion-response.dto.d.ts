import { PaqueteResponseDto } from './paquete-response.dto';
import { DisponibilidadResponseDto } from './disponibilidad-response.dto';
import { ReservaResponseDto } from './reserva-response.dto';
import { ResenaResponseDto } from './resena-response.dto';
export declare class ExportacionResponseDto {
    paquete: PaqueteResponseDto;
    disponibilidades: DisponibilidadResponseDto[];
    reservas: ReservaResponseDto[];
    resenas: ResenaResponseDto[];
    fechaGeneracion: Date;
}
