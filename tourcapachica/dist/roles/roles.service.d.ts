import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignPermissionDto } from '../permissions/dto/assing-permission.dto';
export declare class RolesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        rolesPermisos: ({
            permiso: {
                nombre: string;
                descripcion: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            permisoId: number;
        })[];
    } & {
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        rolesPermisos: ({
            permiso: {
                nombre: string;
                descripcion: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            permisoId: number;
        })[];
    } & {
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    assignPermission(id: number, assignPermissionDto: AssignPermissionDto): Promise<{
        permiso: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        rol: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rolId: number;
        permisoId: number;
    }>;
}
