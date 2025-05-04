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
exports.ItinerariosReservaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ItinerariosReservaService = class ItinerariosReservaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createItinerarioReservaDto) {
        var _a, _b;
        const reserva = await this.prisma.reserva.findUnique({
            where: { id: createItinerarioReservaDto.reservaId },
        });
        if (!reserva) {
            throw new common_1.NotFoundException(`Reserva con ID ${createItinerarioReservaDto.reservaId} no encontrada`);
        }
        if (createItinerarioReservaDto.servicioId) {
            const servicio = await this.prisma.servicio.findUnique({
                where: { id: createItinerarioReservaDto.servicioId },
            });
            if (!servicio) {
                throw new common_1.NotFoundException(`Servicio con ID ${createItinerarioReservaDto.servicioId} no encontrado`);
            }
        }
        if ((_a = createItinerarioReservaDto.lugaresTuristicosIds) === null || _a === void 0 ? void 0 : _a.length) {
            for (const lugarId of createItinerarioReservaDto.lugaresTuristicosIds) {
                const lugar = await this.prisma.lugarTuristico.findUnique({
                    where: { id: lugarId },
                });
                if (!lugar) {
                    throw new common_1.NotFoundException(`Lugar turístico con ID ${lugarId} no encontrado`);
                }
            }
        }
        const itinerario = await this.prisma.itinerarioReserva.create({
            data: {
                reservaId: createItinerarioReservaDto.reservaId,
                fecha: createItinerarioReservaDto.fecha,
                hora: createItinerarioReservaDto.hora,
                tipoEvento: createItinerarioReservaDto.tipoEvento,
                descripcion: createItinerarioReservaDto.descripcion,
                notas: createItinerarioReservaDto.notas,
                duracion: createItinerarioReservaDto.duracion,
                servicioId: createItinerarioReservaDto.servicioId,
            },
            include: {
                reserva: true,
                servicio: true,
                itinerarioLugares: {
                    include: {
                        lugarTuristico: true,
                    },
                },
            },
        });
        if ((_b = createItinerarioReservaDto.lugaresTuristicosIds) === null || _b === void 0 ? void 0 : _b.length) {
            await Promise.all(createItinerarioReservaDto.lugaresTuristicosIds.map((lugarId) => this.prisma.itinerarioLugar.create({
                data: {
                    itinerarioReservaId: itinerario.id,
                    lugarTuristicoId: lugarId,
                },
            })));
        }
        return this.findOne(itinerario.id);
    }
    async findAll() {
        return this.prisma.itinerarioReserva.findMany({
            include: {
                reserva: true,
                servicio: true,
                itinerarioLugares: {
                    include: {
                        lugarTuristico: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const itinerario = await this.prisma.itinerarioReserva.findUnique({
            where: { id },
            include: {
                reserva: true,
                servicio: true,
                itinerarioLugares: {
                    include: {
                        lugarTuristico: true,
                    },
                },
            },
        });
        if (!itinerario) {
            throw new common_1.NotFoundException(`Itinerario con ID ${id} no encontrado`);
        }
        return itinerario;
    }
    async update(id, updateItinerarioReservaDto) {
        await this.findOne(id);
        if (updateItinerarioReservaDto.reservaId) {
            const reserva = await this.prisma.reserva.findUnique({
                where: { id: updateItinerarioReservaDto.reservaId },
            });
            if (!reserva) {
                throw new common_1.NotFoundException(`Reserva con ID ${updateItinerarioReservaDto.reservaId} no encontrada`);
            }
        }
        if (updateItinerarioReservaDto.servicioId) {
            const servicio = await this.prisma.servicio.findUnique({
                where: { id: updateItinerarioReservaDto.servicioId },
            });
            if (!servicio) {
                throw new common_1.NotFoundException(`Servicio con ID ${updateItinerarioReservaDto.servicioId} no encontrado`);
            }
        }
        const itinerario = await this.prisma.itinerarioReserva.update({
            where: { id },
            data: {
                reservaId: updateItinerarioReservaDto.reservaId,
                fecha: updateItinerarioReservaDto.fecha,
                hora: updateItinerarioReservaDto.hora,
                tipoEvento: updateItinerarioReservaDto.tipoEvento,
                descripcion: updateItinerarioReservaDto.descripcion,
                notas: updateItinerarioReservaDto.notas,
                duracion: updateItinerarioReservaDto.duracion,
                servicioId: updateItinerarioReservaDto.servicioId,
            },
            include: {
                reserva: true,
                servicio: true,
                itinerarioLugares: {
                    include: {
                        lugarTuristico: true,
                    },
                },
            },
        });
        if (updateItinerarioReservaDto.lugaresTuristicosIds) {
            await this.prisma.itinerarioLugar.deleteMany({
                where: { itinerarioReservaId: id },
            });
            await Promise.all(updateItinerarioReservaDto.lugaresTuristicosIds.map((lugarId) => this.prisma.itinerarioLugar.create({
                data: {
                    itinerarioReservaId: id,
                    lugarTuristicoId: lugarId,
                },
            })));
        }
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.itinerarioLugar.deleteMany({
            where: { itinerarioReservaId: id },
        });
        return this.prisma.itinerarioReserva.delete({
            where: { id },
        });
    }
    async findByReserva(reservaId) {
        const reserva = await this.prisma.reserva.findUnique({
            where: { id: reservaId },
        });
        if (!reserva) {
            throw new common_1.NotFoundException(`Reserva con ID ${reservaId} no encontrada`);
        }
        return this.prisma.itinerarioReserva.findMany({
            where: { reservaId },
            include: {
                reserva: true,
                servicio: true,
                itinerarioLugares: {
                    include: {
                        lugarTuristico: true,
                    },
                },
            },
        });
    }
};
exports.ItinerariosReservaService = ItinerariosReservaService;
exports.ItinerariosReservaService = ItinerariosReservaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItinerariosReservaService);
//# sourceMappingURL=itinerarios-reserva.service.js.map