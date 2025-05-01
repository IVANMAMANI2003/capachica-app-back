declare class ImageDto {
    url: string;
}
export declare class CreatePaqueteTuristicoDto {
    nombre: string;
    descripcion: string;
    precio: number;
    estado?: string;
    emprendimientoId: number;
    imagenes?: ImageDto[];
}
export {};
