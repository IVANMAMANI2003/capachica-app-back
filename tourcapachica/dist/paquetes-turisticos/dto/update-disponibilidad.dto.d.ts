import { EstadoDisponibilidad } from './create-disponibilidad.dto';
export declare class UpdateDisponibilidadDto {
    fechaInicio?: Date;
    fechaFin?: Date;
    cuposDisponibles?: number;
    cuposMaximos?: number;
    precioEspecial?: number;
    estado?: EstadoDisponibilidad;
    diasSemana?: number[];
    notas?: string;
}
