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
exports.ResenasService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ResenasService = class ResenasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createResenaDto) {
        return this.prisma.resena.create({ data: createResenaDto });
    }
    async findAll() {
        return this.prisma.resena.findMany();
    }
    async findOne(id) {
        const resena = await this.prisma.resena.findUnique({ where: { id } });
        if (!resena)
            throw new common_1.NotFoundException('Reseña no encontrada');
        return resena;
    }
    async update(id, updateResenaDto) {
        await this.findOne(id);
        return this.prisma.resena.update({ where: { id }, data: updateResenaDto });
    }
    async updateEstado(id, estado) {
        await this.findOne(id);
        return this.prisma.resena.update({ where: { id }, data: { estado } });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.resena.delete({ where: { id } });
    }
    async promedioCalificacionPorServicio(servicioId) {
        const resenas = await this.prisma.resena.findMany({ where: { servicioId } });
        const totalResenas = resenas.length;
        const promedioCalificacion = totalResenas > 0 ? resenas.reduce((sum, r) => sum + r.calificacion, 0) / totalResenas : 0;
        return { promedioCalificacion, totalResenas };
    }
};
exports.ResenasService = ResenasService;
exports.ResenasService = ResenasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ResenasService);
//# sourceMappingURL=resenas.service.js.map