import { EstadoPaquete } from '../enums/estado-paquete.enum';
export declare class CreatePaqueteTuristicoDto {
    nombre: string;
    descripcion: string;
    precio: number;
    estado: EstadoPaquete;
    emprendimientoId: number;
    imagenUrl?: string;
    cuposMaximos?: number;
    duracion?: number;
    imagenes?: string[];
}
