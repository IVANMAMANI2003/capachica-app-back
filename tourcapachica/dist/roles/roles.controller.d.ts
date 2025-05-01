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
        nombre: string;
        descripcion: string | null;
    }>;
    findAll(): Promise<({
        rolesPermisos: ({
            permiso: {
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
            permisoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
    })[]>;
    findOne(id: string): Promise<{
        rolesPermisos: ({
            permiso: {
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
            permisoId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
    }>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string | null;
    }>;
    assignPermission(id: string, assignPermissionDto: AssignPermissionDto): Promise<{
        rol: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
        };
        permiso: {
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
        permisoId: number;
    }>;
}
