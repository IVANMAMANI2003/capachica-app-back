"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RolesService = class RolesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRoleDto) {
        return this.prisma.role.create({
            data: createRoleDto,
        });
    }
    async findAll() {
        return this.prisma.role.findMany({
            include: {
                rolesPermisos: {
                    include: {
                        permiso: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const role = await this.prisma.role.findUnique({
            where: { id },
            include: {
                rolesPermisos: {
                    include: {
                        permiso: true,
                    },
                },
            },
        });
        if (!role) {
            throw new common_1.NotFoundException(`Rol con ID ${id} no encontrado`);
        }
        return role;
    }
    async update(id, updateRoleDto) {
        try {
            return await this.prisma.role.update({
                where: { id },
                data: updateRoleDto,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Rol con ID ${id} no encontrado`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.role.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Rol con ID ${id} no encontrado`);
        }
    }
    async assignPermission(id, assignPermissionDto) {
        try {
            return await this.prisma.rolesPermisos.create({
                data: {
                    rolId: id,
                    permisoId: assignPermissionDto.permisoId,
                },
                include: {
                    permiso: true,
                    rol: true,
                },
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.NotFoundException('El permiso ya está asignado a este rol');
            }
            throw new common_1.NotFoundException(`Rol con ID ${id} no encontrado`);
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
//# sourceMappingURL=roles.service.js.map