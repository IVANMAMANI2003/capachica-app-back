declare class ImageDto {
    url: string;
}
export declare class CreateEmprendimientoDto {
    nombre: string;
    descripcion?: string;
    tipo: string;
    direccion?: string;
    coordenadas?: string;
    contactoTelefono?: string;
    contactoEmail?: string;
    sitioWeb?: string;
    redesSociales?: any;
    estado?: string;
    imagenes?: ImageDto[];
}
export {};
