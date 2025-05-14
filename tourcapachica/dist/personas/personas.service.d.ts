import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
export declare class PersonasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPersonaDto: CreatePersonaDto): Promise<{
        usuario: {
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
        subdivision: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            countryId: number;
        };
    } & {
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
    }>;
    findAll(): Promise<({
        usuario: {
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
        subdivision: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            countryId: number;
        };
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        usuario: {
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
        subdivision: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            countryId: number;
        };
    } & {
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
    }>;
    update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<{
        usuario: {
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
        subdivision: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            countryId: number;
        };
    } & {
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
