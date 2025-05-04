import { UsuarioResponseDto } from './usuario-response.dto';
export declare class ResenaResponseDto {
    id: number;
    usuarioId: number;
    tipoObjeto: string;
    objetoId: number;
    calificacion: number;
    comentario: string;
    usuario: UsuarioResponseDto;
    createdAt: Date;
    updatedAt: Date;
}
