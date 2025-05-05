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
    horarioApertura?: Date;
    horarioCierre?: Date;
    costoEntrada?: number;
    recomendaciones?: string;
    restricciones?: string;
    imagenes?: ImageDto[];
}
export {};
