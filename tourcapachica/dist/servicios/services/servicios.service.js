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
exports.ServiciosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ServiciosService = class ServiciosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(emprendimientoId, createServicioDto) {
        const tipoServicio = await this.prisma.tipoServicio.findUnique({
            where: { id: createServicioDto.tipoServicioId },
        });
        if (!tipoServicio) {
            throw new common_1.NotFoundException(`Tipo de servicio con ID ${createServicioDto.tipoServicioId} no encontrado`);
        }
        const servicio = await this.prisma.servicio.create({
            data: Object.assign(Object.assign({}, createServicioDto), { serviciosEmprendedores: {
                    create: {
                        emprendimientoId,
                    },
                } }),
            include: {
                tipoServicio: true,
                serviciosEmprendedores: {
                    include: {
                        emprendimiento: true,
                    },
                },
            },
        });
        return servicio;
    }
    async findAll() {
        return this.prisma.servicio.findMany({
            include: {
                tipoServicio: true,
                serviciosEmprendedores: {
                    include: {
                        emprendimiento: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id },
            include: {
                tipoServicio: true,
                serviciosEmprendedores: {
                    include: {
                        emprendimiento: true,
                    },
                },
            },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${id} no encontrado`);
        }
        return servicio;
    }
    async findByEmprendimiento(emprendimientoId) {
        return this.prisma.servicio.findMany({
            where: {
                serviciosEmprendedores: {
                    some: {
                        emprendimientoId,
                    },
                },
            },
            include: {
                tipoServicio: true,
                serviciosEmprendedores: {
                    include: {
                        emprendimiento: true,
                    },
                },
            },
        });
    }
    async update(id, updateServicioDto) {
        try {
            if (updateServicioDto.tipoServicioId) {
                const tipoServicio = await this.prisma.tipoServicio.findUnique({
                    where: { id: updateServicioDto.tipoServicioId },
                });
                if (!tipoServicio) {
                    throw new common_1.NotFoundException(`Tipo de servicio con ID ${updateServicioDto.tipoServicioId} no encontrado`);
                }
            }
            return await this.prisma.servicio.update({
                where: { id },
                data: updateServicioDto,
                include: {
                    tipoServicio: true,
                    serviciosEmprendedores: {
                        include: {
                            emprendimiento: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Servicio con ID ${id} no encontrado`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.servicio.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Servicio con ID ${id} no encontrado`);
        }
    }
    async updateEstado(id, estado) {
        if (!['activo', 'inactivo'].includes(estado)) {
            throw new common_1.BadRequestException('Estado inválido. Debe ser "activo" o "inactivo"');
        }
        try {
            return await this.prisma.servicio.update({
                where: { id },
                data: { estado },
                include: {
                    tipoServicio: true,
                    serviciosEmprendedores: {
                        include: {
                            emprendimiento: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Servicio con ID ${id} no encontrado`);
        }
    }
    async createDisponibilidad(createDisponibilidadDto) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: createDisponibilidadDto.servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${createDisponibilidadDto.servicioId} no encontrado`);
        }
        return this.prisma.servicioDisponibilidad.create({
            data: {
                servicioId: createDisponibilidadDto.servicioId,
                fecha: new Date(createDisponibilidadDto.fecha),
                cuposDisponibles: createDisponibilidadDto.cuposDisponibles,
                precioEspecial: createDisponibilidadDto.precioEspecial,
            },
        });
    }
    async createDisponibilidades(disponibilidades) {
        const servicioIds = [...new Set(disponibilidades.map(d => d.servicioId))];
        const servicios = await this.prisma.servicio.findMany({
            where: { id: { in: servicioIds } },
        });
        if (servicios.length !== servicioIds.length) {
            const serviciosEncontrados = servicios.map(s => s.id);
            const serviciosNoEncontrados = servicioIds.filter(id => !serviciosEncontrados.includes(id));
            throw new common_1.NotFoundException(`Servicios con IDs ${serviciosNoEncontrados.join(', ')} no encontrados`);
        }
        return this.prisma.servicioDisponibilidad.createMany({
            data: disponibilidades.map(d => ({
                servicioId: d.servicioId,
                fecha: new Date(d.fecha),
                cuposDisponibles: d.cuposDisponibles,
                precioEspecial: d.precioEspecial,
            })),
        });
    }
    async getDisponibilidad(servicioId) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
        }
        return this.prisma.servicioDisponibilidad.findMany({
            where: { servicioId },
            orderBy: { fecha: 'asc' },
        });
    }
    async getDisponibilidadByFecha(servicioId, fecha) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
        }
        const disponibilidad = await this.prisma.servicioDisponibilidad.findFirst({
            where: {
                servicioId,
                fecha: new Date(fecha),
            },
        });
        if (!disponibilidad) {
            throw new common_1.NotFoundException(`No hay disponibilidad para el servicio ${servicioId} en la fecha ${fecha}`);
        }
        return disponibilidad;
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map