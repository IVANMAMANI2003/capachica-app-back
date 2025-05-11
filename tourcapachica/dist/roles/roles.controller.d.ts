import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignPermissionDto } from '../permissions/dto/assing-permission.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        rolesPermisos: ({
            permiso: {
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
            permiso: {
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
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<{
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
    assignPermission(id: string, assignPermissionDto: AssignPermissionDto): Promise<{
        permiso: {
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
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
    }>;
}
