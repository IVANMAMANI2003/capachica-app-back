import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignPermissionDto } from '../permissions/dto/assing-permission.dto';
export declare class RolesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
    findAll(): Promise<({
        rolesPermisos: ({
            permiso: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            permisoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    })[]>;
    findOne(id: number): Promise<{
        rolesPermisos: ({
            permiso: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rolId: number;
            permisoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
    assignPermission(id: number, assignPermissionDto: AssignPermissionDto): Promise<{
        permiso: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
        };
        rol: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            nombre: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rolId: number;
        permisoId: number;
    }>;
}
