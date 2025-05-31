import { Prisma } from '@prisma/client';
export declare class ImageDto {
    url: string;
}
export declare class CreateLugarTuristicoDto {
    nombre: string;
    descripcion: string;
    direccion: string;
    latitud: number;
    longitud: number;
    estado?: string;
    esDestacado?: boolean;
    horarioApertura?: Date;
    horarioCierre?: Date;
    costoEntrada: Prisma.Decimal;
    recomendaciones?: string;
    restricciones?: string;
    imagenes?: ImageDto[];
}
