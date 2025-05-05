import { Request as ExpressRequest } from 'express';
import { EmprendimientosService } from './emprendimientos.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
interface RequestWithUser extends ExpressRequest {
    user: {
        id: number;
    };
}
export declare class EmprendimientosController {
    private readonly emprendimientosService;
    constructor(emprendimientosService: EmprendimientosService);
    create(createEmprendimientoDto: CreateEmprendimientoDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                id: number;
                direccion: string | null;
                createdAt: Date;
                updatedAt: Date;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            personaId: number;
            email: string;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean;
            estaActivo: boolean;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                id: number;
                direccion: string | null;
                createdAt: Date;
                updatedAt: Date;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            personaId: number;
            email: string;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean;
            estaActivo: boolean;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findMyEmprendimientos(req: RequestWithUser): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                id: number;
                direccion: string | null;
                createdAt: Date;
                updatedAt: Date;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            personaId: number;
            email: string;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean;
            estaActivo: boolean;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findByUsuario(usuarioId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                id: number;
                direccion: string | null;
                createdAt: Date;
                updatedAt: Date;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            personaId: number;
            email: string;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean;
            estaActivo: boolean;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                id: number;
                direccion: string | null;
                createdAt: Date;
                updatedAt: Date;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            personaId: number;
            email: string;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean;
            estaActivo: boolean;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateEmprendimientoDto: UpdateEmprendimientoDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                id: number;
                direccion: string | null;
                createdAt: Date;
                updatedAt: Date;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            personaId: number;
            email: string;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean;
            estaActivo: boolean;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue;
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        nombre: string;
        descripcion: string | null;
        estado: string;
        id: number;
        usuarioId: number;
        tipo: string;
        direccion: string | null;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addFavorito(req: RequestWithUser, createFavoritoDto: CreateFavoritoDto): Promise<{
        emprendimiento: {
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        estado: string;
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    removeFavorito(req: RequestWithUser, id: string): Promise<{
        estado: string;
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    getFavoritos(req: RequestWithUser): Promise<({
        emprendimiento: {
            usuario: {
                persona: {
                    nombre: string;
                    id: number;
                    direccion: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    apellidos: string;
                    telefono: string | null;
                    fotoPerfilUrl: string | null;
                    fechaNacimiento: Date | null;
                    subdivisionId: number;
                };
            } & {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                personaId: number;
                email: string;
                passwordHash: string;
                recoveryToken: string | null;
                recoveryTokenExpiresAt: Date | null;
                emailVerificationToken: string | null;
                emailVerified: boolean;
                estaActivo: boolean;
                ultimoAcceso: Date | null;
                preferencias: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        estado: string;
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    })[]>;
    isFavorito(req: RequestWithUser, id: string): Promise<boolean>;
}
export {};
