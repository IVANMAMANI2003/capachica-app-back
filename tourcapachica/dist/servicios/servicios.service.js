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
const prisma_service_1 = require("../prisma/prisma.service");
let ServiciosService = class ServiciosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createServicioDto) {
        const { imagenes, ...servicioData } = createServicioDto;
        const servicio = await this.prisma.servicio.create({
            data: servicioData,
        });
        if (imagenes && imagenes.length > 0) {
            await this.prisma.image.createMany({
                data: imagenes.map(img => ({
                    url: img.url,
                    imageableId: servicio.id,
                    imageableType: 'Servicio',
                })),
            });
        }
        return this.findOne(servicio.id);
    }
    async findAll() {
        const servicios = await this.prisma.servicio.findMany({
            include: {
                tipoServicio: true,
            },
        });
        const serviciosWithImages = await Promise.all(servicios.map(async (servicio) => {
            const imagenes = await this.prisma.image.findMany({
                where: {
                    imageableId: servicio.id,
                    imageableType: 'Servicio',
                },
            });
            return { ...servicio, imagenes };
        }));
        return serviciosWithImages;
    }
    async findOne(id) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id },
            include: {
                tipoServicio: true,
            },
        });
        if (!servicio) {
            return null;
        }
        const imagenes = await this.prisma.image.findMany({
            where: {
                imageableId: servicio.id,
                imageableType: 'Servicio',
            },
        });
        return { ...servicio, imagenes };
    }
    async update(id, updateServicioDto) {
        const { imagenes, ...servicioData } = updateServicioDto;
        const servicio = await this.prisma.servicio.update({
            where: { id },
            data: servicioData,
        });
        if (imagenes) {
            await this.prisma.image.deleteMany({
                where: {
                    imageableId: id,
                    imageableType: 'Servicio',
                },
            });
            if (imagenes.length > 0) {
                await this.prisma.image.createMany({
                    data: imagenes.map(img => ({
                        url: img.url,
                        imageableId: id,
                        imageableType: 'Servicio',
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
                imageableType: 'Servicio',
            },
        });
        return this.prisma.servicio.delete({
            where: { id },
        });
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map