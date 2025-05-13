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
const estado_reserva_enum_1 = require("./enums/estado-reserva.enum");
let ReservasService = class ReservasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createReservaDto) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: createReservaDto.usuarioId },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`usuario con ID ${createReservaDto.usuarioId} no encontrado`);
        }
        return this.prisma.reserva.create({
            data: {
                usuarioId: createReservaDto.usuarioId,
                codigoReserva: createReservaDto.codigoReserva,
                tipoReserva: createReservaDto.tipoReserva,
                fechaReserva: createReservaDto.fechaReserva,
                fechaInicio: createReservaDto.fechaInicio,
                hora: createReservaDto.hora,
                fechaFin: createReservaDto.fechaFin,
                cantidadPersonas: createReservaDto.cantidadPersonas,
                estado: createReservaDto.estado || estado_reserva_enum_1.EstadoReserva.PENDIENTE,
                precioTotal: createReservaDto.precioTotal,
                moneda: createReservaDto.moneda,
                metodoPago: createReservaDto.metodoPago,
                datosPago: createReservaDto.datosPago,
                notas: createReservaDto.notas,
                motivoCancelacion: createReservaDto.motivoCancelacion,
                fechaCancelacion: createReservaDto.fechaCancelacion,
            },
            include: {
                usuario: true,
                pagos: true,
            },
        });
    }
    async findAll() {
        return this.prisma.reserva.findMany({
            include: {
                usuario: true,
                pagos: true,
            },
        });
    }
    async findOne(id) {
        const reserva = await this.prisma.reserva.findUnique({
            where: { id },
            include: {
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
        if (updateReservaDto.usuarioId) {
            const usuario = await this.prisma.usuario.findUnique({
                where: { id: updateReservaDto.usuarioId },
            });
            if (!usuario) {
                throw new common_1.NotFoundException(`Usuario con ID ${updateReservaDto.usuarioId} no encontrado`);
            }
        }
        return this.prisma.reserva.update({
            where: { id },
            data: updateReservaDto,
            include: {
                usuario: true,
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
    async findByUsuario(usuarioId) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${usuarioId} no encontrado`);
        }
        return this.prisma.reserva.findMany({
            where: { usuarioId },
            include: {
                usuario: true,
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
                usuario: true,
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