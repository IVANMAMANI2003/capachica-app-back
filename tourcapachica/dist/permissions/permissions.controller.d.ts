import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updatePermissionDto: UpdatePermissionDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        nombre: string;
    }>;
}
