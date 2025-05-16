import { Request as ExpressRequest } from 'express';
import { EmprendimientosService } from './emprendimientos.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito-emprendimiento.dto';
interface RequestWithUser extends ExpressRequest {
    user: {
        id: number;
    };
}
export declare class EmprendimientosController {
    private readonly emprendimientosService;
    constructor(emprendimientosService: EmprendimientosService);
    create(createEmprendimientoDto: CreateEmprendimientoDto, req: RequestWithUser): Promise<{
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
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            email: string;
            id: number;
            personaId: number;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        lugarTuristicoId: number | null;
        tipo: string;
        direccion: string | null;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
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
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            email: string;
            id: number;
            personaId: number;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        lugarTuristicoId: number | null;
        tipo: string;
        direccion: string | null;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
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
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            email: string;
            id: number;
            personaId: number;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        lugarTuristicoId: number | null;
        tipo: string;
        direccion: string | null;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
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
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            email: string;
            id: number;
            personaId: number;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        lugarTuristicoId: number | null;
        tipo: string;
        direccion: string | null;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
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
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            email: string;
            id: number;
            personaId: number;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        lugarTuristicoId: number | null;
        tipo: string;
        direccion: string | null;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
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
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            email: string;
            id: number;
            personaId: number;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        lugarTuristicoId: number | null;
        tipo: string;
        direccion: string | null;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
        fechaAprobacion: Date | null;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    addFavorito(req: RequestWithUser, createFavoritoDto: CreateFavoritoDto): Promise<{
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            lugarTuristicoId: number | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
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
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            email: string;
            id: number;
            personaId: number;
            passwordHash: string;
            recoveryToken: string | null;
            recoveryTokenExpiresAt: Date | null;
            emailVerificationToken: string | null;
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        lugarTuristicoId: number | null;
        tipo: string;
        direccion: string | null;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
        fechaAprobacion: Date | null;
    }[]>;
    isFavorito(req: RequestWithUser, id: string): Promise<boolean>;
}
export {};
