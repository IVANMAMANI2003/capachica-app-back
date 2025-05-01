declare class ImageDto {
    url: string;
}
export declare class CreateLugarTuristicoDto {
    nombre: string;
    descripcion: string;
    direccion: string;
    coordenadas: string;
    imagenUrl?: string;
    esDestacado?: boolean;
    estado?: string;
    horarioApertura?: Date;
    horarioCierre?: Date;
    costoEntrada?: number;
    recomendaciones?: string;
    restricciones?: string;
    imagenes?: ImageDto[];
}
export {};
