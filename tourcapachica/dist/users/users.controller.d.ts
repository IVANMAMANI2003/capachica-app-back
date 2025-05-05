import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UsersService } from './users.service';
import { Request as ExpressRequest } from 'express';
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
        usuariosRoles: ({
            rol: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            usuarioId: number;
        })[];
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
        usuariosRoles: ({
            rol: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            usuarioId: number;
        })[];
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
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
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
        usuariosRoles: ({
            rol: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            usuarioId: number;
        })[];
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
    }[]>;
    getProfile(req: RequestWithUser): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
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
        usuariosRoles: ({
            rol: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            usuarioId: number;
        })[];
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
    }>;
    findOne(id: string, req: RequestWithUser): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
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
        usuariosRoles: ({
            rol: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            usuarioId: number;
        })[];
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
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
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
        usuariosRoles: ({
            rol: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            usuarioId: number;
        })[];
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    assignRole(userId: string, roleId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rolId: number;
        usuarioId: number;
    }>;
    removeRole(userId: string, roleId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
export {};
