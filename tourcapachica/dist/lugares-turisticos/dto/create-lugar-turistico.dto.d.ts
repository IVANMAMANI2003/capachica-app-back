declare class ImageDto {
    url: string;
}
export declare class CreateLugarTuristicoDto {
    nombre: string;
    descripcion: string;
    direccion: string;
    coordenadas: string;
    estado?: string;
    esDestacado?: boolean;
    horarioApertura?: string;
    horarioCierre?: string;
    costoEntrada?: number;
    recomendaciones?: string;
    restricciones?: string;
    imagenes?: ImageDto[];
}
export {};
