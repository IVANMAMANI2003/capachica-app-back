import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
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
    } & {
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
    })[]>;
    findByEmail(email: string): Promise<{
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
    } & {
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
    findById(id: number): Promise<{
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
    } & {
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
    register(data: RegisterUserDto): Promise<{
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
    create(data: CreateUserDto): Promise<{
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
    update(id: number, data: UpdateUserDto): Promise<{
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
    delete(id: number): Promise<{
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
    assignRole(userId: number, roleId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rolId: number;
        usuarioId: number;
    }>;
    removeRole(userId: number, roleId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    requestPasswordReset(data: RequestPasswordResetDto): Promise<{
        message: string;
        token?: undefined;
    } | {
        message: string;
        token: string;
    }>;
    resetPassword(data: ResetPasswordDto): Promise<{
        message: string;
    }>;
    adminResetPassword(userId: number, newPassword: string): Promise<{
        message: string;
    }>;
}
