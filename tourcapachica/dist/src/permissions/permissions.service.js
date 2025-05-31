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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PermissionsService = class PermissionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPermissionDto) {
        return this.prisma.permiso.create({
            data: createPermissionDto,
        });
    }
    async findAll() {
        return this.prisma.permiso.findMany({
            include: {
                rolesPermisos: {
                    include: {
                        rol: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const permiso = await this.prisma.permiso.findUnique({
            where: { id },
            include: {
                rolesPermisos: {
                    include: {
                        rol: true,
                    },
                },
            },
        });
        if (!permiso) {
            throw new common_1.NotFoundException(`Permiso con ID ${id} no encontrado`);
        }
        return permiso;
    }
    async update(id, updatePermissionDto) {
        try {
            return await this.prisma.permiso.update({
                where: { id },
                data: updatePermissionDto,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Permiso con ID ${id} no encontrado`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.permiso.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Permiso con ID ${id} no encontrado`);
        }
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map