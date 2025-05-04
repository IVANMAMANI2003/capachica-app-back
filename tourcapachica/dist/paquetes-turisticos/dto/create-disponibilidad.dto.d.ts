import { EstadoDisponibilidad } from '../enums/estado-disponibilidad.enum';
export declare class CreateDisponibilidadDto {
    fechaInicio: Date;
    fechaFin: Date;
    cuposDisponibles: number;
    cuposMaximos: number;
    precioEspecial?: number;
    notas?: string;
    estado?: EstadoDisponibilidad;
    diasSemana?: string[];
}
