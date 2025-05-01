export declare class EmprendimientoEntity {
    id: number;
    usuarioId: number;
    nombre: string;
    descripcion?: string;
    tipo: string;
    direccion?: string;
    coordenadas?: string;
    contactoTelefono?: string;
    contactoEmail?: string;
    sitioWeb?: string;
    redesSociales?: any;
    estado: string;
    fechaAprobacion?: Date;
    createdAt: Date;
    updatedAt: Date;
}
