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
    create(req: RequestWithUser, createEmprendimientoDto: CreateEmprendimientoDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
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
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
        fechaAprobacion: Date | null;
    }[]>;
    findMyEmprendimientos(req: RequestWithUser): Promise<({
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
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
        fechaAprobacion: Date | null;
    })[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
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
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
        fechaAprobacion: Date | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
        fechaAprobacion: Date | null;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        nombre: string;
        descripcion: string | null;
        direccion: string | null;
        tipo: string;
        coordenadas: string | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        estado: string;
        fechaAprobacion: Date | null;
    }>;
    addFavorito(req: RequestWithUser, createFavoritoDto: CreateFavoritoDto): Promise<{
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            direccion: string | null;
            tipo: string;
            coordenadas: string | null;
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
        usuarioId: number;
        estado: string;
        emprendimientoId: number;
    }>;
    removeFavorito(req: RequestWithUser, id: string): Promise<{
        id: number;
        createdAt: Date;
        usuarioId: number;
        estado: string;
        emprendimientoId: number;
    }>;
    getFavoritos(req: RequestWithUser): Promise<({
        emprendimiento: {
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
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            direccion: string | null;
            tipo: string;
            coordenadas: string | null;
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
        usuarioId: number;
        estado: string;
        emprendimientoId: number;
    })[]>;
    isFavorito(req: RequestWithUser, id: string): Promise<boolean>;
}
export {};
