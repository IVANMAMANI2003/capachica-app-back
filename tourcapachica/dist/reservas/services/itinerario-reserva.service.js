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
exports.ItinerarioReservaService = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ItinerarioReservaService = class ItinerarioReservaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMany(reservaId, itinerarios) {
        const data = itinerarios.map(itinerario => ({
            reservaId,
            servicioId: itinerario.servicioId,
            fechaInicioActividad: new Date(itinerario.fechaInicioActividad),
            fechaFinActividad: new Date(itinerario.fechaFinActividad),
            lugarEncuentro: itinerario.lugarEncuentro,
            observaciones: itinerario.observaciones,
            tipoEvento: itinerario.tipoEvento,
            descripcion: itinerario.descripcion,
        }));
        return this.prisma.itinerarioReserva.createMany({
            data,
        });
    }
    findAll() {
        return this.prisma.itinerarioReserva.findMany();
    }
    findOne(id) {
        return this.prisma.itinerarioReserva.findUnique({
            where: { id },
        });
    }
    update(id, updateItinerarioReservaDto) {
        return this.prisma.itinerarioReserva.update({
            where: { id },
            data: updateItinerarioReservaDto,
        });
    }
    remove(id) {
        return this.prisma.itinerarioReserva.delete({
            where: { id },
        });
    }
};
exports.ItinerarioReservaService = ItinerarioReservaService;
exports.ItinerarioReservaService = ItinerarioReservaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItinerarioReservaService);
//# sourceMappingURL=itinerario-reserva.service.js.map