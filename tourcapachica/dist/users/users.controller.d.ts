import { CreateUserDto } from './dto/create-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UsersService } from './users.service';
import { Request as ExpressRequest } from 'express';
import { UpdateUserWithPersonaDto } from './dto/update-user-with-persona.dto';
interface RequestWithUser extends ExpressRequest {
    user: {
        id: number;
    };
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(registerUserDto: RegisterUserDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        persona: {
            id: number;
            nombre: string;
            direccion: string | null;
            createdAt: Date;
            updatedAt: Date;
            apellidos: string;
            telefono: string | null;
            fotoPerfilUrl: string | null;
            fechaNacimiento: Date | null;
            subdivisionId: number;
        };
        usuariosRoles: ({
            rol: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            usuarioId: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
        })[];
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
    }>;
    requestPasswordReset(requestPasswordResetDto: RequestPasswordResetDto): Promise<{
        message: string;
        token?: undefined;
    } | {
        message: string;
        token: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    adminResetPassword(id: string, newPassword: string): Promise<{
        message: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        persona: {
            id: number;
            nombre: string;
            direccion: string | null;
            createdAt: Date;
            updatedAt: Date;
            apellidos: string;
            telefono: string | null;
            fotoPerfilUrl: string | null;
            fechaNacimiento: Date | null;
            subdivisionId: number;
        };
        usuariosRoles: ({
            rol: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            usuarioId: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
        })[];
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
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        persona: {
            id: number;
            nombre: string;
            direccion: string | null;
            createdAt: Date;
            updatedAt: Date;
            apellidos: string;
            telefono: string | null;
            fotoPerfilUrl: string | null;
            fechaNacimiento: Date | null;
            subdivisionId: number;
        };
        usuariosRoles: ({
            rol: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            usuarioId: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
        })[];
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
    }[]>;
    findOne(id: string, req: RequestWithUser): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        persona: {
            id: number;
            nombre: string;
            direccion: string | null;
            createdAt: Date;
            updatedAt: Date;
            apellidos: string;
            telefono: string | null;
            fotoPerfilUrl: string | null;
            fechaNacimiento: Date | null;
            subdivisionId: number;
        };
        usuariosRoles: ({
            rol: {
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            usuarioId: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
        })[];
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
    }>;
    update(id: number, updateUserWithPersonaDto: UpdateUserWithPersonaDto): Promise<{
        persona: {
            id: number;
            nombre: string;
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
        emailVerified: boolean | null;
        estaActivo: boolean | null;
        ultimoAcceso: Date | null;
        preferencias: import(".prisma/client/runtime/library").JsonValue | null;
    }>;
    remove(id: string): Promise<{
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
    }>;
    assignRole(userId: string, roleId: string): Promise<{
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        rolId: number;
    }>;
    removeRole(userId: string, roleId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
export {};
