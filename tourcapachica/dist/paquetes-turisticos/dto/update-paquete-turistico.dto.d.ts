import { CreatePaqueteTuristicoDto } from './create-paquete-turistico.dto';
import { ImageDto } from './create-paquete-turistico.dto';
declare const UpdatePaqueteTuristicoDto_base: import("@nestjs/common").Type<Partial<CreatePaqueteTuristicoDto>>;
export declare class UpdatePaqueteTuristicoDto extends UpdatePaqueteTuristicoDto_base {
    emprendimientoId?: number;
    nombre?: string;
    descripcion?: string;
    precio?: number;
    estado?: string;
    servicios?: number[];
    imagenes?: ImageDto[];
}
export {};
