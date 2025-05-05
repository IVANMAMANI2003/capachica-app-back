import { CreateServicioDto } from './create-servicio.dto';
import { ImageDto } from './create-servicio.dto';
declare const UpdateServicioDto_base: import("@nestjs/common").Type<Partial<CreateServicioDto>>;
export declare class UpdateServicioDto extends UpdateServicioDto_base {
    tipoServicioId?: number;
    nombre?: string;
    descripcion?: string;
    precioBase?: number;
    moneda?: string;
    estado?: string;
    detallesServicio?: Record<string, any>;
    imagenes?: ImageDto[];
}
export {};
