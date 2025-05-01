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
exports.PaquetesTuristicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_disponibilidad_dto_1 = require("./dto/create-disponibilidad.dto");
let PaquetesTuristicosService = class PaquetesTuristicosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createDisponibilidad(paqueteId, createDisponibilidadDto) {
        const paquete = await this.prisma.paqueteTuristico.findUnique({
            where: { id: paqueteId }
        });
        if (!paquete) {
            throw new common_1.NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
        }
        if (createDisponibilidadDto.fechaInicio >= createDisponibilidadDto.fechaFin) {
            throw new common_1.BadRequestException('La fecha de inicio debe ser anterior a la fecha de fin');
        }
        if (createDisponibilidadDto.cuposDisponibles > createDisponibilidadDto.cuposMaximos) {
            throw new common_1.BadRequestException('Los cupos disponibles no pueden exceder los cupos máximos');
        }
        const existingDisponibilidad = await this.prisma.disponibilidadPaquete.findFirst({
            where: {
                paqueteId,
                OR: [
                    {
                        AND: [
                            { fechaInicio: { lte: createDisponibilidadDto.fechaInicio } },
                            { fechaFin: { gte: createDisponibilidadDto.fechaInicio } }
                        ]
                    },
                    {
                        AND: [
                            { fechaInicio: { lte: createDisponibilidadDto.fechaFin } },
                            { fechaFin: { gte: createDisponibilidadDto.fechaFin } }
                        ]
                    }
                ]
            }
        });
        if (existingDisponibilidad) {
            throw new common_1.BadRequestException('Ya existe disponibilidad para el paquete en el rango de fechas especificado');
        }
        return this.prisma.disponibilidadPaquete.create({
            data: {
                ...createDisponibilidadDto,
                paqueteId,
                estado: createDisponibilidadDto.estado || create_disponibilidad_dto_1.EstadoDisponibilidad.ACTIVO
            }
        });
    }
    async updateDisponibilidad(id, updateDisponibilidadDto) {
        const disponibilidad = await this.prisma.disponibilidadPaquete.findUnique({
            where: { id }
        });
        if (!disponibilidad) {
            throw new common_1.NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
        }
        if (updateDisponibilidadDto.fechaInicio || updateDisponibilidadDto.fechaFin) {
            const fechaInicio = updateDisponibilidadDto.fechaInicio || disponibilidad.fechaInicio;
            const fechaFin = updateDisponibilidadDto.fechaFin || disponibilidad.fechaFin;
            if (fechaInicio >= fechaFin) {
                throw new common_1.BadRequestException('La fecha de inicio debe ser anterior a la fecha de fin');
            }
            const existingDisponibilidad = await this.prisma.disponibilidadPaquete.findFirst({
                where: {
                    paqueteId: disponibilidad.paqueteId,
                    id: { not: id },
                    OR: [
                        {
                            AND: [
                                { fechaInicio: { lte: fechaInicio } },
                                { fechaFin: { gte: fechaInicio } }
                            ]
                        },
                        {
                            AND: [
                                { fechaInicio: { lte: fechaFin } },
                                { fechaFin: { gte: fechaFin } }
                            ]
                        }
                    ]
                }
            });
            if (existingDisponibilidad) {
                throw new common_1.BadRequestException('Ya existe disponibilidad para el paquete en el rango de fechas especificado');
            }
        }
        if (updateDisponibilidadDto.cuposDisponibles !== undefined || updateDisponibilidadDto.cuposMaximos !== undefined) {
            const cuposDisponibles = updateDisponibilidadDto.cuposDisponibles ?? disponibilidad.cuposDisponibles;
            const cuposMaximos = updateDisponibilidadDto.cuposMaximos ?? disponibilidad.cuposMaximos;
            if (cuposDisponibles > cuposMaximos) {
                throw new common_1.BadRequestException('Los cupos disponibles no pueden exceder los cupos máximos');
            }
        }
        return this.prisma.disponibilidadPaquete.update({
            where: { id },
            data: updateDisponibilidadDto
        });
    }
    async deleteDisponibilidad(id) {
        const disponibilidad = await this.prisma.disponibilidadPaquete.findUnique({
            where: { id }
        });
        if (!disponibilidad) {
            throw new common_1.NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
        }
        return this.prisma.disponibilidadPaquete.delete({
            where: { id }
        });
    }
    async getDisponibilidadesPaquete(paqueteId) {
        const paquete = await this.prisma.paqueteTuristico.findUnique({
            where: { id: paqueteId }
        });
        if (!paquete) {
            throw new common_1.NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
        }
        return this.prisma.disponibilidadPaquete.findMany({
            where: { paqueteId },
            orderBy: { fechaInicio: 'asc' }
        });
    }
    async getDisponibilidad(id) {
        const disponibilidad = await this.prisma.disponibilidadPaquete.findUnique({
            where: { id }
        });
        if (!disponibilidad) {
            throw new common_1.NotFoundException(`Disponibilidad con ID ${id} no encontrada`);
        }
        return disponibilidad;
    }
    async create(createPaqueteTuristicoDto) {
        const { imagenes, ...paqueteData } = createPaqueteTuristicoDto;
        const paquete = await this.prisma.paqueteTuristico.create({
            data: paqueteData,
        });
        if (imagenes && imagenes.length > 0) {
            await this.prisma.image.createMany({
                data: imagenes.map(img => ({
                    url: img.url,
                    imageableId: paquete.id,
                    imageableType: 'PaqueteTuristico',
                })),
            });
        }
        return this.findOne(paquete.id);
    }
    async findAll() {
        const paquetes = await this.prisma.paqueteTuristico.findMany({
            include: {
                emprendimiento: true,
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
        const paquetesWithImages = await Promise.all(paquetes.map(async (paquete) => {
            const imagenes = await this.prisma.image.findMany({
                where: {
                    imageableId: paquete.id,
                    imageableType: 'PaqueteTuristico',
                },
            });
            return { ...paquete, imagenes };
        }));
        return paquetesWithImages;
    }
    async findOne(id) {
        const paquete = await this.prisma.paqueteTuristico.findUnique({
            where: { id },
            include: {
                emprendimiento: true,
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
        if (!paquete) {
            return null;
        }
        const imagenes = await this.prisma.image.findMany({
            where: {
                imageableId: paquete.id,
                imageableType: 'PaqueteTuristico',
            },
        });
        return { ...paquete, imagenes };
    }
    async update(id, updatePaqueteTuristicoDto) {
        const { imagenes, ...paqueteData } = updatePaqueteTuristicoDto;
        const paquete = await this.prisma.paqueteTuristico.update({
            where: { id },
            data: paqueteData,
        });
        if (imagenes) {
            await this.prisma.image.deleteMany({
                where: {
                    imageableId: id,
                    imageableType: 'PaqueteTuristico',
                },
            });
            if (imagenes.length > 0) {
                await this.prisma.image.createMany({
                    data: imagenes.map(img => ({
                        url: img.url,
                        imageableId: id,
                        imageableType: 'PaqueteTuristico',
                    })),
                });
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        await this.prisma.image.deleteMany({
            where: {
                imageableId: id,
                imageableType: 'PaqueteTuristico',
            },
        });
        return this.prisma.paqueteTuristico.delete({
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