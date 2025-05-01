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
exports.DisponibilidadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let DisponibilidadService = class DisponibilidadService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDisponibilidadDto) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: createDisponibilidadDto.servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${createDisponibilidadDto.servicioId} no encontrado`);
        }
        const disponibilidadExistente = await this.prisma.servicioDisponibilidad.findUnique({
            where: {
                servicioId_fecha: {
                    servicioId: createDisponibilidadDto.servicioId,
                    fecha: createDisponibilidadDto.fecha,
                },
            },
        });
        if (disponibilidadExistente) {
            throw new common_1.BadRequestException('Ya existe disponibilidad registrada para esta fecha');
        }
        return this.prisma.servicioDisponibilidad.create({
            data: createDisponibilidadDto,
        });
    }
    async findAll() {
        return this.prisma.servicioDisponibilidad.findMany({
            include: {
                servicio: true,
            },
        });
    }
    async findByServicio(servicioId) {
        return this.prisma.servicioDisponibilidad.findMany({
            where: { servicioId },
            include: {
                servicio: true,
            },
        });
    }
    async findOne(id) {
        const disponibilidad = await this.prisma.servicioDisponibilidad.findUnique({
            where: { id },
            include: {
                servicio: true,
            },
        });
        if (!disponibilidad) {
            throw new common_1.NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
        }
        return disponibilidad;
    }
    async update(id, updateData) {
        try {
            return await this.prisma.servicioDisponibilidad.update({
                where: { id },
                data: updateData,
                include: {
                    servicio: true,
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.servicioDisponibilidad.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
        }
    }
};
exports.DisponibilidadService = DisponibilidadService;
exports.DisponibilidadService = DisponibilidadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DisponibilidadService);
//# sourceMappingURL=disponibilidad.service.js.map