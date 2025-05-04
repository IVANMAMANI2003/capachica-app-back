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
exports.TiposServicioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TiposServicioService = class TiposServicioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTipoServicioDto) {
        return this.prisma.tipoServicio.create({
            data: {
                nombre: createTipoServicioDto.nombre,
                descripcion: createTipoServicioDto.descripcion,
                requiereCupo: createTipoServicioDto.requiereCupo,
            },
        });
    }
    async findAll() {
        return this.prisma.tipoServicio.findMany({
            include: {
                servicios: true,
            },
        });
    }
    async findOne(id) {
        const tipoServicio = await this.prisma.tipoServicio.findUnique({
            where: { id },
            include: {
                servicios: true,
            },
        });
        if (!tipoServicio) {
            throw new common_1.NotFoundException(`Tipo de servicio con ID ${id} no encontrado`);
        }
        return tipoServicio;
    }
    async remove(id) {
        try {
            return await this.prisma.tipoServicio.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Tipo de servicio con ID ${id} no encontrado`);
        }
    }
};
exports.TiposServicioService = TiposServicioService;
exports.TiposServicioService = TiposServicioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TiposServicioService);
//# sourceMappingURL=tipos-servicio.service.js.map