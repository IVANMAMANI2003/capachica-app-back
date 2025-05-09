export declare class ImageDto {
    url: string;
}
export declare class CreateServicioDto {
    tipoServicioId: number;
    emprendimientoId?: number;
    nombre: string;
    descripcion?: string;
    precioBase: number;
    moneda?: string;
    estado?: string;
    detallesServicio?: Record<string, any>;
    imagenes?: ImageDto[];
}
