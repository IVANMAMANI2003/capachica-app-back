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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaquetesTuristicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PaquetesTuristicosService = class PaquetesTuristicosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPaqueteTuristicoDto) {
        try {
            const { imagenes } = createPaqueteTuristicoDto, paqueteData = __rest(createPaqueteTuristicoDto, ["imagenes"]);
            const paquete = await this.prisma.paqueteTuristico.create({
                data: Object.assign(Object.assign({}, paqueteData), { estado: paqueteData.estado.toLowerCase() }),
                include: {
                    servicios: {
                        include: {
                            servicio: true,
                        },
                    },
                },
            });
            if (imagenes && imagenes.length > 0) {
                const imagenesPromises = imagenes.map(async (imagen) => {
                    return this.prisma.image.create({
                        data: {
                            url: imagen.url,
                            imageableId: paquete.id,
                            imageableType: 'PaqueteTuristico',
                        },
                    });
                });
                await Promise.all(imagenesPromises);
            }
            const paqueteConImagenes = await this.prisma.paqueteTuristico.findUnique({
                where: { id: paquete.id },
                include: {
                    servicios: {
                        include: {
                            servicio: true,
                        },
                    },
                },
            });
            const imagenesAsociadas = await this.prisma.image.findMany({
                where: {
                    imageableId: paquete.id,
                    imageableType: 'PaqueteTuristico',
                },
            });
            return Object.assign(Object.assign({}, paqueteConImagenes), { imagenes: imagenesAsociadas });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al crear el paquete turístico: ' + error.message);
        }
    }
    async findAll() {
        return this.prisma.paqueteTuristico.findMany({
            include: {
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
                disponibilidad: true,
            },
        });
    }
    async findOne(id) {
        const result = await this.prisma.paqueteTuristico.findUnique({
            where: { id },
            include: {
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
                disponibilidad: true,
            },
        });
        if (!result) {
            throw new common_1.NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
        }
        return result;
    }
    async update(id, updatePaqueteTuristicoDto) {
        await this.findOne(id);
        return this.prisma.paqueteTuristico.update({
            where: { id },
            data: updatePaqueteTuristicoDto,
            include: {
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.paqueteTuristico.delete({
            where: { id },
        });
    }
    async addServicios(id, addServiciosDto, userId) {
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para modificar este paquete');
        }
        const servicios = await this.prisma.servicio.findMany({
            where: {
                id: {
                    in: addServiciosDto.servicios.map(s => s.servicioId),
                },
            },
        });
        if (servicios.length !== addServiciosDto.servicios.length) {
            throw new common_1.BadRequestException('Uno o más servicios no existen');
        }
        return this.prisma.paqueteTuristico.update({
            where: { id },
            data: {
                servicios: {
                    create: addServiciosDto.servicios.map(s => ({
                        servicioId: s.servicioId,
                        orden: s.orden,
                    })),
                },
            },
            include: {
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
    }
    async removeServicio(id, servicioId, userId) {
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para modificar este paquete');
        }
        const servicioPaquete = await this.prisma.servicioPaquete.findFirst({
            where: {
                paqueteTuristicoId: id,
                servicioId,
            },
        });
        if (!servicioPaquete) {
            throw new common_1.NotFoundException(`El servicio con ID ${servicioId} no está en este paquete`);
        }
        return this.prisma.servicioPaquete.delete({
            where: {
                id: servicioPaquete.id,
            },
        });
    }
    async getEstadisticas(id, userId) {
        var _a;
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para ver las estadísticas de este paquete');
        }
        const reservas = await this.prisma.reserva.findMany({
            where: {
                itinerarios: {
                    some: {
                        servicio: {
                            serviciosPaquetes: {
                                some: {
                                    paqueteTuristicoId: id,
                                },
                            },
                        },
                    },
                },
            },
            include: {
                itinerarios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
        const resenas = await this.prisma.resena.findMany({
            where: {
                tipoObjeto: 'PAQUETE_TURISTICO',
            },
        });
        const totalReservas = reservas.length;
        const totalIngresos = reservas.reduce((sum, reserva) => sum + Number(reserva.precioTotal), 0);
        const promedioCalificacion = resenas.length > 0
            ? resenas.reduce((sum, resena) => sum + resena.calificacion, 0) / resenas.length
            : 0;
        const serviciosPopulares = await this.prisma.servicioPaquete.groupBy({
            by: ['servicioId'],
            where: {
                paqueteTuristicoId: id,
            },
            _count: {
                servicioId: true,
            },
            orderBy: {
                _count: {
                    servicioId: 'desc',
                },
            },
            take: 5,
        });
        const estadisticasMensuales = await this.prisma.reserva.groupBy({
            by: ['fechaReserva'],
            where: {
                itinerarios: {
                    some: {
                        servicio: {
                            serviciosPaquetes: {
                                some: {
                                    paqueteTuristicoId: id,
                                },
                            },
                        },
                    },
                },
            },
            _count: {
                id: true,
            },
            _sum: {
                precioTotal: true,
            },
        });
        return {
            totalReservas,
            totalIngresos,
            promedioCalificacion,
            totalResenas: resenas.length,
            tasaOcupacion: totalReservas > 0 ? (totalReservas / (((_a = paquete.disponibilidad[0]) === null || _a === void 0 ? void 0 : _a.cuposMaximos) || 0)) * 100 : 0,
            serviciosPopulares: await Promise.all(serviciosPopulares.map(async (sp) => {
                const servicio = await this.prisma.servicio.findUnique({
                    where: { id: sp.servicioId },
                });
                return {
                    servicioId: sp.servicioId,
                    nombre: servicio.nombre,
                    cantidadReservas: sp._count.servicioId,
                };
            })),
            estadisticasMensuales: estadisticasMensuales.map(em => ({
                mes: em.fechaReserva,
                totalReservas: em._count.id,
                totalIngresos: Number(em._sum.precioTotal || 0),
            })),
        };
    }
    async exportarDatos(id, userId) {
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para exportar los datos de este paquete');
        }
        const reservas = await this.prisma.reserva.findMany({
            where: {
                itinerarios: {
                    some: {
                        servicio: {
                            serviciosPaquetes: {
                                some: {
                                    paqueteTuristicoId: id,
                                },
                            },
                        },
                    },
                },
            },
            include: {
                itinerarios: {
                    include: {
                        servicio: true,
                    },
                },
                turista: {
                    include: {
                        usuario: true,
                    },
                },
            },
        });
        const resenas = await this.prisma.resena.findMany({
            where: {
                tipoObjeto: 'PAQUETE_TURISTICO',
            },
            include: {
                usuario: true,
            },
        });
        return {
            paquete,
            reservas,
            resenas,
        };
    }
    async createDisponibilidad(id, createDisponibilidadDto) {
        await this.findOne(id);
        return this.prisma.disponibilidadPaquete.create({
            data: Object.assign(Object.assign({}, createDisponibilidadDto), { paqueteId: id }),
        });
    }
    async getDisponibilidadesPaquete(id) {
        await this.findOne(id);
        return this.prisma.disponibilidadPaquete.findMany({
            where: {
                paqueteId: id,
            },
        });
    }
    async getDisponibilidad(id) {
        const result = await this.prisma.disponibilidadPaquete.findUnique({
            where: { id },
        });
        if (!result) {
            throw new common_1.NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
        }
        return result;
    }
    async updateDisponibilidad(id, updateDisponibilidadDto) {
        await this.getDisponibilidad(id);
        return this.prisma.disponibilidadPaquete.update({
            where: { id },
            data: updateDisponibilidadDto,
        });
    }
    async deleteDisponibilidad(id) {
        await this.getDisponibilidad(id);
        return this.prisma.disponibilidadPaquete.delete({
            where: { id },
        });
    }
};
exports.PaquetesTuristicosService = PaquetesTuristicosService;
exports.PaquetesTuristicosService = PaquetesTuristicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaquetesTuristicosService);
//# sourceMappingURL=paquetes-turisticos.service.js.map