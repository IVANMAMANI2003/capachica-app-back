declare class UpdatePersonaDto {
    nombre?: string;
    apellidos?: string;
    telefono?: string;
    direccion?: string;
    fotoPerfilUrl?: string;
    fechaNacimiento?: string;
    subdivisionId?: number;
}
export declare class UpdateUserWithPersonaDto {
    email?: string;
    persona?: UpdatePersonaDto;
}
export {};
