import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignPermissionDto } from '../permissions/dto/assing-permission.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<{
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
    assignPermission(id: string, assignPermissionDto: AssignPermissionDto): Promise<{
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
