import { PrismaService } from '../prisma/prisma.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { SupabaseService } from '../supabase/supabase.service';
export declare class EmprendimientosService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    private readonly BUCKET_NAME;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
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
    findOne(id: number): Promise<{
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
    findByUsuario(usuarioId: number): Promise<{
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
    update(id: number, updateEmprendimientoDto: UpdateEmprendimientoDto): Promise<{
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
    remove(id: number): Promise<{
        message: string;
    }>;
    updateEstado(id: number, estado: string): Promise<{
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
    addFavorito(usuarioId: number, createFavoritoDto: CreateFavoritoDto): Promise<{
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
    removeFavorito(usuarioId: number, emprendimientoId: number): Promise<{
        message: string;
    }>;
    getFavoritos(usuarioId: number): Promise<{
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
    isFavorito(usuarioId: number, emprendimientoId: number): Promise<boolean>;
}
