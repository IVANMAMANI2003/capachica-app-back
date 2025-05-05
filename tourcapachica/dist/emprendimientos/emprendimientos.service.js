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
exports.EmprendimientosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("../supabase/supabase.service");
let EmprendimientosService = class EmprendimientosService {
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
        this.IMAGEABLE_TYPE = 'Emprendimiento';
    }
    async create(createEmprendimientoDto, files) {
        const { imagenes } = createEmprendimientoDto, emprendimientoData = __rest(createEmprendimientoDto, ["imagenes"]);
        const emprendimiento = await this.prisma.emprendimiento.create({
            data: {
                usuarioId: emprendimientoData.usuarioId,
                nombre: emprendimientoData.nombre,
                descripcion: emprendimientoData.descripcion,
                tipo: emprendimientoData.tipo,
                direccion: emprendimientoData.direccion,
                coordenadas: emprendimientoData.coordenadas,
                contactoTelefono: emprendimientoData.contactoTelefono,
                contactoEmail: emprendimientoData.contactoEmail,
                sitioWeb: emprendimientoData.sitioWeb,
                redesSociales: emprendimientoData.redesSociales,
                estado: emprendimientoData.estado || 'pendiente',
                fechaAprobacion: emprendimientoData.fechaAprobacion,
            },
        });
        if (files && files.length > 0) {
            for (const file of files) {
                const imageUrl = await this.supabaseService.uploadFile(file, this.IMAGEABLE_TYPE, emprendimiento.id);
                const imagen = await this.prisma.image.create({
                    data: {
                        url: imageUrl
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagen.id,
                        imageable_id: emprendimiento.id,
                        imageable_type: this.IMAGEABLE_TYPE
                    }
                });
            }
        }
        return this.findOne(emprendimiento.id);
    }
    async findAll() {
        const emprendimientos = await this.prisma.emprendimiento.findMany({
            include: {
                usuario: {
                    include: {
                        persona: true
                    }
                }
            }
        });
        const emprendimientosWithImages = await Promise.all(emprendimientos.map(async (emprendimiento) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: emprendimiento.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, emprendimiento), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return emprendimientosWithImages;
    }
    async findOne(id) {
        const emprendimiento = await this.prisma.emprendimiento.findUnique({
            where: { id },
            include: {
                usuario: {
                    include: {
                        persona: true
                    }
                }
            }
        });
        if (!emprendimiento) {
            return null;
        }
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: emprendimiento.id,
            },
            include: {
                image: true
            }
        });
        return Object.assign(Object.assign({}, emprendimiento), { imagenes: imageables.map(imageable => ({
                id: imageable.image.id,
                url: imageable.image.url
            })) });
    }
    async findByUsuario(usuarioId) {
        const emprendimientos = await this.prisma.emprendimiento.findMany({
            where: { usuarioId },
            include: {
                usuario: {
                    include: {
                        persona: true
                    }
                }
            }
        });
        const emprendimientosWithImages = await Promise.all(emprendimientos.map(async (emprendimiento) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: emprendimiento.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, emprendimiento), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return emprendimientosWithImages;
    }
    async update(id, updateEmprendimientoDto, files) {
        const { imagenes } = updateEmprendimientoDto, emprendimientoData = __rest(updateEmprendimientoDto, ["imagenes"]);
        await this.prisma.emprendimiento.update({
            where: { id },
            data: {
                nombre: emprendimientoData.nombre,
                descripcion: emprendimientoData.descripcion,
                tipo: emprendimientoData.tipo,
                direccion: emprendimientoData.direccion,
                coordenadas: emprendimientoData.coordenadas,
                contactoTelefono: emprendimientoData.contactoTelefono,
                contactoEmail: emprendimientoData.contactoEmail,
                sitioWeb: emprendimientoData.sitioWeb,
                redesSociales: emprendimientoData.redesSociales,
                estado: emprendimientoData.estado,
                fechaAprobacion: emprendimientoData.fechaAprobacion,
            },
        });
        if (files && files.length > 0) {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: id,
                },
                include: {
                    image: true
                }
            });
            for (const imageable of imageables) {
                const fileName = imageable.image.url.split('/').pop();
                await this.supabaseService.deleteFile(this.IMAGEABLE_TYPE, id, fileName);
                await this.prisma.imageable.delete({
                    where: { id: imageable.id }
                });
                await this.prisma.image.delete({
                    where: { id: imageable.image.id }
                });
            }
            for (const file of files) {
                const imageUrl = await this.supabaseService.uploadFile(file, this.IMAGEABLE_TYPE, id);
                const imagen = await this.prisma.image.create({
                    data: {
                        url: imageUrl
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagen.id,
                        imageable_id: id,
                        imageable_type: this.IMAGEABLE_TYPE
                    }
                });
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: id,
            },
            include: {
                image: true
            }
        });
        for (const imageable of imageables) {
            const fileName = imageable.image.url.split('/').pop();
            await this.supabaseService.deleteFile(this.IMAGEABLE_TYPE, id, fileName);
            await this.prisma.imageable.delete({
                where: { id: imageable.id }
            });
            await this.prisma.image.delete({
                where: { id: imageable.image.id }
            });
        }
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], EmprendimientosService);
//# sourceMappingURL=emprendimientos.service.js.map