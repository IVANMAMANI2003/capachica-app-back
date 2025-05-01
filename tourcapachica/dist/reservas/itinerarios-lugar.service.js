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
exports.ItinerariosLugarService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ItinerariosLugarService = class ItinerariosLugarService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(itinerarioId, lugarTuristicoId) {
        const itinerario = await this.prisma.itinerarioReserva.findUnique({
            where: { id: itinerarioId },
        });
        if (!itinerario) {
            throw new common_1.NotFoundException(`Itinerario con ID ${itinerarioId} no encontrado`);
        }
        const lugarTuristico = await this.prisma.lugarTuristico.findUnique({
            where: { id: lugarTuristicoId },
        });
        if (!lugarTuristico) {
            throw new common_1.NotFoundException(`Lugar turístico con ID ${lugarTuristicoId} no encontrado`);
        }
        return this.prisma.itinerarioLugar.create({
            data: {
                itinerarioReservaId: itinerarioId,
                lugarTuristicoId: lugarTuristicoId,
            },
            include: {
                itinerarioReserva: true,
                lugarTuristico: true,
            },
        });
    }
    async findAll() {
        return this.prisma.itinerarioLugar.findMany({
            include: {
                itinerarioReserva: true,
                lugarTuristico: true,
            },
        });
    }
    async findByItinerario(itinerarioId) {
        const itinerario = await this.prisma.itinerarioReserva.findUnique({
            where: { id: itinerarioId },
        });
        if (!itinerario) {
            throw new common_1.NotFoundException(`Itinerario con ID ${itinerarioId} no encontrado`);
        }
        return this.prisma.itinerarioLugar.findMany({
            where: { itinerarioReservaId: itinerarioId },
            include: {
                itinerarioReserva: true,
                lugarTuristico: true,
            },
        });
    }
    async findByLugarTuristico(lugarTuristicoId) {
        const lugarTuristico = await this.prisma.lugarTuristico.findUnique({
            where: { id: lugarTuristicoId },
        });
        if (!lugarTuristico) {
            throw new common_1.NotFoundException(`Lugar turístico con ID ${lugarTuristicoId} no encontrado`);
        }
        return this.prisma.itinerarioLugar.findMany({
            where: { lugarTuristicoId },
            include: {
                itinerarioReserva: true,
                lugarTuristico: true,
            },
        });
    }
    async remove(itinerarioId, lugarTuristicoId) {
        const itinerarioLugar = await this.prisma.itinerarioLugar.findFirst({
            where: {
                itinerarioReservaId: itinerarioId,
                lugarTuristicoId: lugarTuristicoId,
            },
        });
        if (!itinerarioLugar) {
            throw new common_1.NotFoundException(`Relación entre itinerario ${itinerarioId} y lugar turístico ${lugarTuristicoId} no encontrada`);
        }
        return this.prisma.itinerarioLugar.delete({
            where: {
                id: itinerarioLugar.id,
            },
        });
    }
    async removeByItinerario(itinerarioId) {
        const itinerario = await this.prisma.itinerarioReserva.findUnique({
            where: { id: itinerarioId },
        });
        if (!itinerario) {
            throw new common_1.NotFoundException(`Itinerario con ID ${itinerarioId} no encontrado`);
        }
        return this.prisma.itinerarioLugar.deleteMany({
            where: { itinerarioReservaId: itinerarioId },
        });
    }
};
exports.ItinerariosLugarService = ItinerariosLugarService;
exports.ItinerariosLugarService = ItinerariosLugarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItinerariosLugarService);
//# sourceMappingURL=itinerarios-lugar.service.js.map