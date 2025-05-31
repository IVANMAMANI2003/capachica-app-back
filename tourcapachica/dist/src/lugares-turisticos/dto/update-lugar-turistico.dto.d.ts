import { CreateLugarTuristicoDto } from './create-lugar-turistico.dto';
import { ImageDto } from './create-lugar-turistico.dto';
import { Prisma } from '@prisma/client';
declare const UpdateLugarTuristicoDto_base: import("@nestjs/common").Type<Partial<CreateLugarTuristicoDto>>;
export declare class UpdateLugarTuristicoDto extends UpdateLugarTuristicoDto_base {
    nombre?: string;
    descripcion?: string;
    direccion?: string;
    latitud?: number;
    longitud?: number;
    estado?: string;
    esDestacado?: boolean;
    horarioApertura?: Date;
    horarioCierre?: Date;
    costoEntrada?: Prisma.Decimal;
    recomendaciones?: string;
    restricciones?: string;
    imagenes?: ImageDto[];
}
export {};
