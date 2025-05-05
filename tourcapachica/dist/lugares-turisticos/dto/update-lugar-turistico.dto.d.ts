import { CreateLugarTuristicoDto } from './create-lugar-turistico.dto';
import { ImageDto } from './create-lugar-turistico.dto';
declare const UpdateLugarTuristicoDto_base: import("@nestjs/common").Type<Partial<CreateLugarTuristicoDto>>;
export declare class UpdateLugarTuristicoDto extends UpdateLugarTuristicoDto_base {
    nombre?: string;
    descripcion?: string;
    direccion?: string;
    coordenadas?: string;
    estado?: string;
    esDestacado?: boolean;
    horarioApertura?: Date;
    horarioCierre?: Date;
    costoEntrada?: number;
    recomendaciones?: string;
    restricciones?: string;
    imagenes?: ImageDto[];
}
export {};
