import { ServicioResponseDto } from './servicio-response.dto';
export declare class PaqueteResponseDto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    duracion: number;
    imagenUrl: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    servicios: ServicioResponseDto[];
}
