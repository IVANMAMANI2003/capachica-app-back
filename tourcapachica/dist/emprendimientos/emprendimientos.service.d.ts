import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
export declare class EmprendimientosService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createEmprendimientoDto: CreateEmprendimientoDto, files?: Express.Multer.File[]): Promise<{
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
    findOne(id: number): Promise<{
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
    findByUsuario(usuarioId: number): Promise<{
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
    update(id: number, updateEmprendimientoDto: UpdateEmprendimientoDto, files?: Express.Multer.File[]): Promise<{
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
    remove(id: number): Promise<{
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
    updateEstado(id: number, estado: string): Promise<{
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
    addFavorito(usuarioId: number, createFavoritoDto: CreateFavoritoDto): Promise<{
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
    removeFavorito(usuarioId: number, emprendimientoId: number): Promise<{
        estado: string;
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    getFavoritos(usuarioId: number): Promise<({
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
    isFavorito(usuarioId: number, emprendimientoId: number): Promise<boolean>;
}
