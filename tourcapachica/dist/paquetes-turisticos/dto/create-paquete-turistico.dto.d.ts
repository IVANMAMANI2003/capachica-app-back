export declare class ImageDto {
    url: string;
}
export declare class CreatePaqueteTuristicoDto {
    emprendimientoId: number;
    nombre: string;
    descripcion: string;
    precio: number;
    estado?: string;
    servicios?: number[];
    imagenes?: ImageDto[];
}
