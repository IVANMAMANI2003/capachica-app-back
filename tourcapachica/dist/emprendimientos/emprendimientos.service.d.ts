import { PrismaService } from '../prisma/prisma.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
import { CreateFavoritoDto } from './dto/create-favorito-emprendimiento.dto';
import { SupabaseService } from '../supabase/supabase.service';
export declare class EmprendimientosService {
    private prisma;
    private supabaseService;
    private readonly IMAGEABLE_TYPE;
    private readonly BUCKET_NAME;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createEmprendimientoDto: CreateEmprendimientoDto, usuarioId: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                direccion: string | null;
                id: number;
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
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
        };
        usuarioId: number;
        lugarTuristicoId: number | null;
        nombre: string;
        descripcion: string | null;
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
        id: number;
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
                direccion: string | null;
                id: number;
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
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
        };
        usuarioId: number;
        lugarTuristicoId: number | null;
        nombre: string;
        descripcion: string | null;
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
        id: number;
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
                direccion: string | null;
                id: number;
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
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
        };
        usuarioId: number;
        lugarTuristicoId: number | null;
        nombre: string;
        descripcion: string | null;
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
        id: number;
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
                direccion: string | null;
                id: number;
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
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
        };
        usuarioId: number;
        lugarTuristicoId: number | null;
        nombre: string;
        descripcion: string | null;
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: number, updateEmprendimientoDto: UpdateEmprendimientoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        usuario: {
            persona: {
                nombre: string;
                direccion: string | null;
                id: number;
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
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
        };
        usuarioId: number;
        lugarTuristicoId: number | null;
        nombre: string;
        descripcion: string | null;
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        usuarioId: number;
        lugarTuristicoId: number | null;
        nombre: string;
        descripcion: string | null;
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addFavorito(usuarioId: number, createFavoritoDto: CreateFavoritoDto): Promise<{
        emprendimiento: {
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        usuarioId: number;
        id: number;
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
                nombre: string;
                direccion: string | null;
                id: number;
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
            emailVerified: boolean | null;
            estaActivo: boolean | null;
            ultimoAcceso: Date | null;
            preferencias: import(".prisma/client/runtime/library").JsonValue | null;
        };
        usuarioId: number;
        lugarTuristicoId: number | null;
        nombre: string;
        descripcion: string | null;
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    isFavorito(usuarioId: number, emprendimientoId: number): Promise<boolean>;
}
