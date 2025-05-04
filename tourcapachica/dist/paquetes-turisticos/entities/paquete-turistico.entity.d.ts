import { EstadoPaquete } from '../enums/estado-paquete.enum';
declare class ImageEntity {
    id: number;
    url: string;
    imageableId: number;
    imageableType: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class PaqueteTuristicoEntity {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    estado: EstadoPaquete;
    emprendimientoId: number;
    createdAt: Date;
    updatedAt: Date;
    images?: ImageEntity[];
}
export {};
