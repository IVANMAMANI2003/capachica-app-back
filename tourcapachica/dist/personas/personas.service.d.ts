import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
export declare class PersonasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPersonaDto: CreatePersonaDto): Promise<{
        subdivision: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            countryId: number;
        };
        usuario: {
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
        nombre: string;
        apellidos: string;
        telefono: string | null;
        direccion: string | null;
        fotoPerfilUrl: string | null;
        fechaNacimiento: Date | null;
        subdivisionId: number;
    }>;
    findAll(): Promise<({
        subdivision: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            countryId: number;
        };
        usuario: {
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
        nombre: string;
        apellidos: string;
        telefono: string | null;
        direccion: string | null;
        fotoPerfilUrl: string | null;
        fechaNacimiento: Date | null;
        subdivisionId: number;
    })[]>;
    findOne(id: number): Promise<{
        subdivision: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            countryId: number;
        };
        usuario: {
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
        nombre: string;
        apellidos: string;
        telefono: string | null;
        direccion: string | null;
        fotoPerfilUrl: string | null;
        fechaNacimiento: Date | null;
        subdivisionId: number;
    }>;
    update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<{
        subdivision: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            countryId: number;
        };
        usuario: {
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
        nombre: string;
        apellidos: string;
        telefono: string | null;
        direccion: string | null;
        fotoPerfilUrl: string | null;
        fechaNacimiento: Date | null;
        subdivisionId: number;
    }>;
    remove(id: number): Promise<{
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
    }>;
}
