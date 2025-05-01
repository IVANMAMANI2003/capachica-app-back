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
exports.ReservasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_reserva_dto_1 = require("./dto/create-reserva.dto");
let ReservasService = class ReservasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createReservaDto) {
        const turista = await this.prisma.turista.findUnique({
            where: { id: createReservaDto.turistaId },
        });
        if (!turista) {
            throw new common_1.NotFoundException(`Turista con ID ${createReservaDto.turistaId} no encontrado`);
        }
        return this.prisma.reserva.create({
            data: {
                turistaId: createReservaDto.turistaId,
                codigoReserva: createReservaDto.codigoReserva,
                tipoReserva: createReservaDto.tipoReserva,
                fechaReserva: createReservaDto.fechaReserva,
                fechaInicio: createReservaDto.fechaInicio,
                hora: createReservaDto.hora,
                fechaFin: createReservaDto.fechaFin,
                cantidadPersonas: createReservaDto.cantidadPersonas,
                estado: createReservaDto.estado || create_reserva_dto_1.EstadoReserva.PENDIENTE,
                precioTotal: createReservaDto.precioTotal,
                moneda: createReservaDto.moneda,
                metodoPago: createReservaDto.metodoPago,
                datosPago: createReservaDto.datosPago,
                notas: createReservaDto.notas,
                motivoCancelacion: createReservaDto.motivoCancelacion,
                fechaCancelacion: createReservaDto.fechaCancelacion,
            },
            include: {
                turista: true,
                itinerarios: true,
                pagos: true,
            },
        });
    }
    async findAll() {
        return this.prisma.reserva.findMany({
            include: {
                turista: true,
                itinerarios: true,
                pagos: true,
            },
        });
    }
    async findOne(id) {
        const reserva = await this.prisma.reserva.findUnique({
            where: { id },
            include: {
                turista: true,
                itinerarios: {
                    include: {
                        itinerarioLugares: {
                            include: {
                                lugarTuristico: true,
                            },
                        },
                        servicio: true,
                    },
                },
                pagos: true,
            },
        });
        if (!reserva) {
            throw new common_1.NotFoundException(`Reserva con ID ${id} no encontrada`);
        }
        return reserva;
    }
    async update(id, updateReservaDto) {
        await this.findOne(id);
        if (updateReservaDto.turistaId) {
            const turista = await this.prisma.turista.findUnique({
                where: { id: updateReservaDto.turistaId },
            });
            if (!turista) {
                throw new common_1.NotFoundException(`Turista con ID ${updateReservaDto.turistaId} no encontrado`);
            }
        }
        return this.prisma.reserva.update({
            where: { id },
            data: updateReservaDto,
            include: {
                turista: true,
                itinerarios: true,
                pagos: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.reserva.delete({
            where: { id },
        });
    }
    async findByTurista(turistaId) {
        const turista = await this.prisma.turista.findUnique({
            where: { id: turistaId },
        });
        if (!turista) {
            throw new common_1.NotFoundException(`Turista con ID ${turistaId} no encontrado`);
        }
        return this.prisma.reserva.findMany({
            where: { turistaId },
            include: {
                turista: true,
                itinerarios: true,
                pagos: true,
            },
        });
    }
    async updateEstado(id, estado) {
        await this.findOne(id);
        return this.prisma.reserva.update({
            where: { id },
            data: { estado },
            include: {
                turista: true,
                itinerarios: true,
                pagos: true,
            },
        });
    }
};
exports.ReservasService = ReservasService;
exports.ReservasService = ReservasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservasService);
//# sourceMappingURL=reservas.service.js.map