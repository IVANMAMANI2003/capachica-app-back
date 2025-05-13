export declare class ImageDto {
    url: string;
}
export declare class CreateEmprendimientoDto {
    usuarioId: number;
    lugarTuristicoId: number;
    nombre: string;
    descripcion?: string;
    tipo: string;
    direccion?: string;
    latitud?: number;
    longitud?: number;
    contactoTelefono?: string;
    contactoEmail?: string;
    sitioWeb?: string;
    redesSociales?: string;
    estado?: string;
    fechaAprobacion?: Date;
    imagenes?: ImageDto[];
}
