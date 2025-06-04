import { PrismaService } from '../prisma/prisma.service';
import { CreateEmprendimientoDto } from './dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from './dto/update-emprendimiento.dto';
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
        nombre: string;
        direccion: string | null;
        usuarioId: number;
        descripcion: string | null;
        estado: string;
        lugarTuristicoId: number | null;
        tipo: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string | null;
        usuarioId: number;
        descripcion: string | null;
        estado: string;
        lugarTuristicoId: number | null;
        tipo: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string | null;
        usuarioId: number;
        descripcion: string | null;
        estado: string;
        lugarTuristicoId: number | null;
        tipo: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string | null;
        usuarioId: number;
        descripcion: string | null;
        estado: string;
        lugarTuristicoId: number | null;
        tipo: string;
        latitud: number | null;
        longitud: number | null;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string | null;
        usuarioId: number;
        descripcion: string | null;
        estado: string;
        lugarTuristicoId: number | null;
        tipo: string;
        latitud: number | null;
        longitud: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string | null;
        usuarioId: number;
        descripcion: string | null;
        estado: string;
        lugarTuristicoId: number | null;
        tipo: string;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }>;
    addFavorito(usuarioId: number, emprendimientoId: number): Promise<{
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            direccion: string | null;
            usuarioId: number;
            descripcion: string | null;
            estado: string;
            lugarTuristicoId: number | null;
            tipo: string;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
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
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        direccion: string | null;
        usuarioId: number;
        descripcion: string | null;
        estado: string;
        lugarTuristicoId: number | null;
        tipo: string;
        latitud: number | null;
        longitud: number | null;
        contactoTelefono: string | null;
        contactoEmail: string | null;
        sitioWeb: string | null;
        redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
        fechaAprobacion: Date | null;
    }[]>;
    isFavorito(usuarioId: number, emprendimientoId: number): Promise<boolean>;
}
