import { CreateEmprendimientoDto } from './create-emprendimiento.dto';
import { ImageDto } from './create-emprendimiento.dto';
declare const UpdateEmprendimientoDto_base: import("@nestjs/common").Type<Partial<CreateEmprendimientoDto>>;
export declare class UpdateEmprendimientoDto extends UpdateEmprendimientoDto_base {
    usuarioId?: number;
    lugarTuristicoIdId?: number;
    nombre?: string;
    descripcion?: string;
    tipo?: string;
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
export {};
