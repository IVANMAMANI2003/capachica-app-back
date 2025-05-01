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
exports.PersonasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PersonasService = class PersonasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPersonaDto) {
        return this.prisma.persona.create({
            data: createPersonaDto,
            include: {
                subdivision: true,
                usuario: true,
            },
        });
    }
    async findAll() {
        return this.prisma.persona.findMany({
            include: {
                subdivision: true,
                usuario: true,
            },
        });
    }
    async findOne(id) {
        const persona = await this.prisma.persona.findUnique({
            where: { id },
            include: {
                subdivision: true,
                usuario: true,
            },
        });
        if (!persona) {
            throw new common_1.NotFoundException(`Persona con ID ${id} no encontrada`);
        }
        return persona;
    }
    async update(id, updatePersonaDto) {
        try {
            return await this.prisma.persona.update({
                where: { id },
                data: updatePersonaDto,
                include: {
                    subdivision: true,
                    usuario: true,
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Persona con ID ${id} no encontrada`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.persona.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Persona con ID ${id} no encontrada`);
        }
    }
};
exports.PersonasService = PersonasService;
exports.PersonasService = PersonasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PersonasService);
//# sourceMappingURL=personas.service.js.map