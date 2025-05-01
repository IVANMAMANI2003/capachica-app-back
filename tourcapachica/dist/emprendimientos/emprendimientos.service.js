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
exports.EmprendimientosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmprendimientosService = class EmprendimientosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(usuarioId, createEmprendimientoDto) {
        const { imagenes, ...emprendimientoData } = createEmprendimientoDto;
        const emprendimiento = await this.prisma.emprendimiento.create({
            data: {
                ...emprendimientoData,
                usuarioId,
            },
        });
        if (imagenes && imagenes.length > 0) {
            await this.prisma.image.createMany({
                data: imagenes.map(img => ({
                    url: img.url,
                    imageableId: emprendimiento.id,
                    imageableType: 'Emprendimiento',
                })),
            });
        }
        return this.findOne(emprendimiento.id);
    }
    async findAll() {
        const emprendimientos = await this.prisma.emprendimiento.findMany({
            include: {
                usuario: {
                    include: {
                        persona: true,
                    },
                },
            },
        });
        const emprendimientosWithImages = await Promise.all(emprendimientos.map(async (emprendimiento) => {
            const imagenes = await this.prisma.image.findMany({
                where: {
                    imageableId: emprendimiento.id,
                    imageableType: 'Emprendimiento',
                },
            });
            return { ...emprendimiento, imagenes };
        }));
        return emprendimientosWithImages;
    }
    async findOne(id) {
        const emprendimiento = await this.prisma.emprendimiento.findUnique({
            where: { id },
            include: {
                usuario: {
                    include: {
                        persona: true,
                    },
                },
            },
        });
        if (!emprendimiento) {
            return null;
        }
        const imagenes = await this.prisma.image.findMany({
            where: {
                imageableId: emprendimiento.id,
                imageableType: 'Emprendimiento',
            },
        });
        return { ...emprendimiento, imagenes };
    }
    async findByUsuario(usuarioId) {
        return this.prisma.emprendimiento.findMany({
            where: { usuarioId },
            include: {
                usuario: {
                    include: {
                        persona: true,
                    },
                },
            },
        });
    }
    async update(id, updateEmprendimientoDto) {
        const { imagenes, ...emprendimientoData } = updateEmprendimientoDto;
        const emprendimiento = await this.prisma.emprendimiento.update({
            where: { id },
            data: emprendimientoData,
        });
        if (imagenes) {
            await this.prisma.image.deleteMany({
                where: {
                    imageableId: id,
                    imageableType: 'Emprendimiento',
                },
            });
            if (imagenes.length > 0) {
                await this.prisma.image.createMany({
                    data: imagenes.map(img => ({
                        url: img.url,
                        imageableId: id,
                        imageableType: 'Emprendimiento',
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
                imageableType: 'Emprendimiento',
            },
        });
        return this.prisma.emprendimiento.delete({
            where: { id },
        });
    }
    async updateEstado(id, estado) {
        try {
            return await this.prisma.emprendimiento.update({
                where: { id },
                data: {
                    estado,
                    fechaAprobacion: estado === 'aprobado' ? new Date() : null,
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
        }
    }
    async addFavorito(usuarioId, createFavoritoDto) {
        const emprendimiento = await this.prisma.emprendimiento.findUnique({
            where: { id: createFavoritoDto.emprendimientoId },
        });
        if (!emprendimiento) {
            throw new common_1.NotFoundException(`Emprendimiento con ID ${createFavoritoDto.emprendimientoId} no encontrado`);
        }
        const favoritoExistente = await this.prisma.favorito.findFirst({
            where: {
                emprendimientoId: createFavoritoDto.emprendimientoId,
                usuarioId: usuarioId,
            },
        });
        if (favoritoExistente) {
            throw new common_1.BadRequestException('Este emprendimiento ya está marcado como favorito');
        }
        return this.prisma.favorito.create({
            data: {
                emprendimientoId: createFavoritoDto.emprendimientoId,
                usuarioId: usuarioId,
                estado: 'activo',
            },
            include: {
                emprendimiento: true,
            },
        });
    }
    async removeFavorito(usuarioId, emprendimientoId) {
        const favorito = await this.prisma.favorito.findFirst({
            where: {
                emprendimientoId,
                usuarioId: usuarioId,
            },
        });
        if (!favorito) {
            throw new common_1.NotFoundException(`No se encontró un favorito para el emprendimiento con ID ${emprendimientoId}`);
        }
        return this.prisma.favorito.delete({
            where: {
                id: favorito.id,
            },
        });
    }
    async getFavoritos(usuarioId) {
        return this.prisma.favorito.findMany({
            where: {
                usuarioId: usuarioId,
            },
            include: {
                emprendimiento: {
                    include: {
                        usuario: {
                            include: {
                                persona: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async isFavorito(usuarioId, emprendimientoId) {
        const favorito = await this.prisma.favorito.findFirst({
            where: {
                emprendimientoId,
                usuarioId: usuarioId,
            },
        });
        return !!favorito;
    }
};
exports.EmprendimientosService = EmprendimientosService;
exports.EmprendimientosService = EmprendimientosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmprendimientosService);
//# sourceMappingURL=emprendimientos.service.js.map