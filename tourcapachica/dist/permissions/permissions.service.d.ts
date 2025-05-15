import { PrismaService } from '../prisma/prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class PermissionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPermissionDto: CreatePermissionDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
    findAll(): Promise<({
        rolesPermisos: ({
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
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
    update(id: number, updatePermissionDto: UpdatePermissionDto): Promise<{
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
}
