import { ServicioResponseDto } from './servicio-response.dto';
export declare class PaqueteResponseDto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    estado: string;
    emprendimientoId: number;
    imagenUrl: string;
    activo: boolean;
    cuposMaximos: number;
    duracion: number;
    imagenes: string[];
    servicios: ServicioResponseDto[];
    createdAt: Date;
    updatedAt: Date;
}
