import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
    create(createPermissionDto: CreatePermissionDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        rolesPermisos: ({
            rol: {
                id: number;
                nombre: string;
                descripcion: string | null;
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
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        rolesPermisos: ({
            rol: {
                id: number;
                nombre: string;
                descripcion: string | null;
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
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updatePermissionDto: UpdatePermissionDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
