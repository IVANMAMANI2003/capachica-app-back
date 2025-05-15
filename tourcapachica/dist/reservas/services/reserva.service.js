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
exports.ReservaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const itinerario_reserva_service_1 = require("./itinerario-reserva.service");
let ReservaService = class ReservaService {
    constructor(prisma, itinerarioReservaService) {
        this.prisma = prisma;
        this.itinerarioReservaService = itinerarioReservaService;
    }
    generarCodigoReserva() {
        const prefix = 'RES';
        const date = new Date();
        const yyyyMMdd = date.toISOString().slice(0, 10).replace(/-/g, '');
        const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
            String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const numbers = Math.floor(1000 + Math.random() * 9000).toString();
        return `${prefix}-${yyyyMMdd}-${letters}${numbers}`;
    }
    async create(createReservaDto) {
        const codigoReserva = this.generarCodigoReserva();
        const reserva = await this.prisma.reserva.create({
            data: Object.assign(Object.assign({}, createReservaDto), { codigoReserva, fechaReserva: new Date(createReservaDto.fechaReserva), fechaInicio: new Date(createReservaDto.fechaInicio), fechaFin: new Date(createReservaDto.fechaFin), fechaCancelacion: new Date(createReservaDto.fechaCancelacion) }),
        });
        return reserva;
    }
    async getEstadoPagoReserva(reservaId) {
        const reserva = await this.prisma.reserva.findUnique({
            where: { id: reservaId },
            include: { pagos: true },
        });
        if (!reserva) {
            throw new common_1.NotFoundException('Reserva no encontrada');
        }
        const totalPagado = reserva.pagos.reduce((acc, pago) => acc + Number(pago.montoTotal), 0);
        const restante = Number(reserva.precioTotal) - totalPagado;
        return {
            reservaId: reserva.id,
            precioTotal: Number(reserva.precioTotal),
            totalPagado,
            restante,
            pagos: reserva.pagos.map((pago) => ({
                id: pago.id,
                montoTotal: Number(pago.montoTotal),
                fechaPago: pago.fechaPago,
                estado: pago.estado,
            })),
        };
    }
    findAll() {
        return this.prisma.reserva.findMany();
    }
    findOne(id) {
        return this.prisma.reserva.findUnique({
            where: { id },
        });
    }
    update(id, updateReservaDto) {
        return this.prisma.reserva.update({
            where: { id },
            data: updateReservaDto,
        });
    }
    remove(id) {
        return this.prisma.reserva.delete({
            where: { id },
        });
    }
};
exports.ReservaService = ReservaService;
exports.ReservaService = ReservaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        itinerario_reserva_service_1.ItinerarioReservaService])
], ReservaService);
//# sourceMappingURL=reserva.service.js.map