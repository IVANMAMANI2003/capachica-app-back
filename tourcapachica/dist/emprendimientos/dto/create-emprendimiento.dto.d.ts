declare class ImageDto {
    url: string;
}
export declare class CreateEmprendimientoDto {
    usuarioId: number;
    nombre: string;
    descripcion?: string;
    tipo: string;
    direccion?: string;
    coordenadas?: string;
    contactoTelefono?: string;
    contactoEmail?: string;
    sitioWeb?: string;
    redesSociales?: string;
    estado?: string;
    fechaAprobacion?: Date;
    imagenes?: ImageDto[];
}
export {};
