export declare class ServicioEntity {
    id: number;
    tipoServicioId: number;
    nombre: string;
    descripcion?: string;
    precioBase: number;
    moneda: string;
    estado: string;
    imagenUrl: string;
    detallesServicio: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
    tipoServicio?: any;
    disponibilidad?: any[];
}
