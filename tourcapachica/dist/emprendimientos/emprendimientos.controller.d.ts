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
    create(createEmprendimientoDto: CreateEmprendimientoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                apellidos: string;
                telefono: string | null;
                direccion: string | null;
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
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                apellidos: string;
                telefono: string | null;
                direccion: string | null;
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
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }[]>;
    findMyEmprendimientos(req: RequestWithUser): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                apellidos: string;
                telefono: string | null;
                direccion: string | null;
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
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }[]>;
    findByUsuario(usuarioId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                apellidos: string;
                telefono: string | null;
                direccion: string | null;
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
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                apellidos: string;
                telefono: string | null;
                direccion: string | null;
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
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }>;
    update(id: string, updateEmprendimientoDto: UpdateEmprendimientoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                apellidos: string;
                telefono: string | null;
                direccion: string | null;
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
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }>;
    addFavorito(req: RequestWithUser, createFavoritoDto: CreateFavoritoDto): Promise<{
        emprendimiento: {
            id: number;
            usuarioId: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            direccion: string | null;
            tipo: string;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
    } & {
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    removeFavorito(req: RequestWithUser, id: string): Promise<{
        message: string;
    }>;
    getFavoritos(req: RequestWithUser): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                apellidos: string;
                telefono: string | null;
                direccion: string | null;
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
        id: number;
        usuarioId: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }[]>;
    isFavorito(req: RequestWithUser, id: string): Promise<boolean>;
}
export {};
