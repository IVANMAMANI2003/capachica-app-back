import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
export declare class PersonasController {
    private readonly personasService;
    constructor(personasService: PersonasService);
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
    } & {
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
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        subdivision: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            countryId: number;
        };
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
    } & {
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
    }>;
    update(id: string, updatePersonaDto: UpdatePersonaDto): Promise<{
        subdivision: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            countryId: number;
        };
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
    } & {
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
