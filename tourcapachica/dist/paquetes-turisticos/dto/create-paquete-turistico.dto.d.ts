import { EstadoPaquete } from '../enums/estado-paquete.enum';
declare class ImageDto {
    url: string;
}
export declare class CreatePaqueteTuristicoDto {
    nombre: string;
    descripcion: string;
    precio: number;
    estado: EstadoPaquete;
    emprendimientoId: number;
    cuposMaximos?: number;
    duracion?: number;
    imagenes?: ImageDto[];
}
export {};
