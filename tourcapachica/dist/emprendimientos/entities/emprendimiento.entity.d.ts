export declare class EmprendimientoEntity {
    id: number;
    usuarioId: number;
    nombre: string;
    descripcion?: string;
    tipo: string;
    direccion?: string;
    latitud?: number;
    longitud?: number;
    contactoTelefono?: string;
    contactoEmail?: string;
    sitioWeb?: string;
    redesSociales?: any;
    estado: string;
    fechaAprobacion?: Date;
    createdAt: Date;
    updatedAt: Date;
}
