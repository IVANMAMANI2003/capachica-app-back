declare class ImageDto {
    url: string;
}
export declare class CreateServicioDto {
    tipoServicioId: number;
    nombre: string;
    descripcion?: string;
    precioBase: number;
    moneda: string;
    estado?: string;
    detallesServicio?: string;
    imagenes?: ImageDto[];
}
export {};
