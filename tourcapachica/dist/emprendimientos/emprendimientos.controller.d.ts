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
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
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
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
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
    }>;
    findAll(): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
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
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
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
    }[]>;
    findMyEmprendimientos(req: RequestWithUser): Promise<({
        usuario: {
            persona: {
                nombre: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
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
        };
    } & {
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
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
    })[]>;
    findOne(id: string): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
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
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
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
    }>;
    update(id: string, updateEmprendimientoDto: UpdateEmprendimientoDto): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                direccion: string | null;
                apellidos: string;
                telefono: string | null;
                fotoPerfilUrl: string | null;
                fechaNacimiento: Date | null;
                subdivisionId: number;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
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
        };
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
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
    }>;
    remove(id: string): Promise<{
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
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
    }>;
    updateEstado(id: string, estado: string): Promise<{
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
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
    }>;
    addFavorito(req: RequestWithUser, createFavoritoDto: CreateFavoritoDto): Promise<{
        emprendimiento: {
            nombre: string;
            descripcion: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
        };
    } & {
        estado: string;
        createdAt: Date;
        id: number;
        usuarioId: number;
        emprendimientoId: number;
    }>;
    removeFavorito(req: RequestWithUser, id: string): Promise<{
        estado: string;
        createdAt: Date;
        id: number;
        usuarioId: number;
        emprendimientoId: number;
    }>;
    getFavoritos(req: RequestWithUser): Promise<({
        emprendimiento: {
            usuario: {
                persona: {
                    nombre: string;
                    createdAt: Date;
                    updatedAt: Date;
                    id: number;
                    direccion: string | null;
                    apellidos: string;
                    telefono: string | null;
                    fotoPerfilUrl: string | null;
                    fechaNacimiento: Date | null;
                    subdivisionId: number;
                };
            } & {
                createdAt: Date;
                updatedAt: Date;
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
            };
        } & {
            nombre: string;
            descripcion: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
        };
    } & {
        estado: string;
        createdAt: Date;
        id: number;
        usuarioId: number;
        emprendimientoId: number;
    })[]>;
    isFavorito(req: RequestWithUser, id: string): Promise<boolean>;
}
export {};
