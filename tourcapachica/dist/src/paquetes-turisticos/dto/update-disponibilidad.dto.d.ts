import { EstadoDisponibilidad } from '../enums/estado-disponibilidad.enum';
export declare class UpdateDisponibilidadDto {
    fechaInicio?: string;
    fechaFin?: string;
    cuposDisponibles?: number;
    cuposMaximos?: number;
    precioEspecial?: number;
    notas?: string;
    estado?: EstadoDisponibilidad;
}
