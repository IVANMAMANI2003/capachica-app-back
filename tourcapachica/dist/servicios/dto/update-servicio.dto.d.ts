export declare class ImageDto {
    url?: string;
}
export declare class UpdateServicioDto {
    tipoServicioId?: number;
    nombre?: string;
    descripcion?: string;
    latitud?: number;
    longitud?: number;
    precioBase?: number;
    moneda?: string;
    estado?: string;
    detallesServicio?: Record<string, any>;
    imagenes?: ImageDto[];
}
export declare class UpdateServicioPayloadDto {
    servicio: UpdateServicioDto;
    emprendimientoId?: number;
}
