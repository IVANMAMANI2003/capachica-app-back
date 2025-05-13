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
    async validateDisponibilidad(carrito) {
        for (const item of carrito) {
            if (item.tipo === 'servicio') {
                const disponibilidad = await this.prisma.servicioDisponibilidad.findMany({
                    where: {
                        servicioId: item.id,
                        fechaInicio: item.fechaInicio,
                        fechaFin: item.fechaFin,
                        cuposDisponibles: {
                            gte: item.cantidadPersonas,
                        },
                    },
                });
                if (disponibilidad.length === 0) {
                    throw new common_1.BadRequestException(`No hay disponibilidad para el servicio con ID ${item.id}`);
                }
            }
            else if (item.tipo === 'paquete') {
                const disponibilidad = await this.prisma.disponibilidadPaquete.findMany({
                    where: {
                        paqueteId: item.id,
                        fechaInicio: item.fechaInicio,
                        fechaFin: item.fechaFin,
                        cuposDisponibles: {
                            gte: item.cantidadPersonas,
                        },
                    },
                });
                if (disponibilidad.length === 0) {
                    throw new common_1.BadRequestException(`No hay disponibilidad para el paquete con ID ${item.id}`);
                }
            }
        }
    }
    async recalculatePrices(carrito) {
        let precioTotal = 0;
        for (const item of carrito) {
            if (item.tipo === 'servicio') {
                const servicio = await this.prisma.servicio.findUnique({
                    where: { id: item.id },
                });
                if (!servicio) {
                    throw new common_1.NotFoundException(`Servicio con ID ${item.id} no encontrado`);
                }
                precioTotal = Number(precioTotal) + (Number(servicio.precioBase) * Number(item.cantidadPersonas));
            }
            else if (item.tipo === 'paquete') {
                const paquete = await this.prisma.paqueteTuristico.findUnique({
                    where: { id: item.id },
                });
                if (!paquete) {
                    throw new common_1.NotFoundException(`Paquete con ID ${item.id} no encontrado`);
                }
                precioTotal = Number(precioTotal) + (Number(paquete.precio) * Number(item.cantidadPersonas));
            }
        }
        const impuestos = precioTotal * 0.18;
        const comisiones = precioTotal * 0.05;
        return precioTotal + impuestos + comisiones;
    }
    async createItinerarioVinculado(reservaId, itinerarios) {
        for (const itinerario of itinerarios) {
            await this.prisma.itinerarioReserva.create({
                data: {
                    reservaId,
                    fecha: itinerario.fecha,
                    horarioCierre: itinerario.horarioCierre,
                    tipoEvento: itinerario.tipoEvento,
                    descripcion: itinerario.descripcion,
                    notas: itinerario.notas,
                    duracion: itinerario.duracion,
                    servicioId: itinerario.servicioId,
                },
            });
        }
    }
};
exports.ReservasService = ReservasService;
exports.ReservasService = ReservasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservasService);
//# sourceMappingURL=reservas.service.js.map