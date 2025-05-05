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
        this.BUCKET_NAME = 'emprendimientos';
    }
    async create(createEmprendimientoDto) {
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
        if (imagenes && imagenes.length > 0) {
            for (const imagen of imagenes) {
                const filePath = `${emprendimiento.id}/${Date.now()}-${imagen.url.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, imagen.url);
                if (error) {
                    throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
                }
                const image = await this.prisma.image.create({
                    data: {
                        url: data.path
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: image.id,
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
    async update(id, updateEmprendimientoDto) {
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
        if (imagenes && imagenes.length > 0) {
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
                const { error } = await this.supabaseService.deleteFile(this.BUCKET_NAME, imageable.image.url);
                if (error) {
                    console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
                }
                await this.prisma.imageable.delete({
                    where: { id: imageable.id }
                });
                await this.prisma.image.delete({
                    where: { id: imageable.image.id }
                });
            }
            for (const imagen of imagenes) {
                const filePath = `${id}/${Date.now()}-${imagen.url.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, imagen.url);
                if (error) {
                    throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
                }
                const image = await this.prisma.image.create({
                    data: {
                        url: data.path
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: image.id,
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
            const { error } = await this.supabaseService.deleteFile(this.BUCKET_NAME, imageable.image.url);
            if (error) {
                console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
            }
            await this.prisma.imageable.delete({
                where: { id: imageable.id }
            });
            await this.prisma.image.delete({
                where: { id: imageable.image.id }
            });
        }
        await this.prisma.emprendimiento.delete({
            where: { id }
        });
        return { message: 'Emprendimiento eliminado exitosamente' };
    }
    async updateEstado(id, estado) {
        const emprendimiento = await this.prisma.emprendimiento.update({
            where: { id },
            data: {
                estado,
                fechaAprobacion: estado === 'aprobado' ? new Date() : null
            }
        });
        if (!emprendimiento) {
            throw new common_1.NotFoundException(`Emprendimiento con ID ${id} no encontrado`);
        }
        return emprendimiento;
    }
    async addFavorito(usuarioId, createFavoritoDto) {
        const { emprendimientoId } = createFavoritoDto;
        const emprendimiento = await this.prisma.emprendimiento.findUnique({
            where: { id: emprendimientoId }
        });
        if (!emprendimiento) {
            throw new common_1.NotFoundException(`Emprendimiento con ID ${emprendimientoId} no encontrado`);
        }
        const favoritoExistente = await this.prisma.favorito.findFirst({
            where: {
                usuarioId,
                emprendimientoId
            }
        });
        if (favoritoExistente) {
            throw new common_1.BadRequestException('El emprendimiento ya está marcado como favorito');
        }
        const favorito = await this.prisma.favorito.create({
            data: {
                usuarioId,
                emprendimientoId
            },
            include: {
                emprendimiento: true
            }
        });
        return favorito;
    }
    async removeFavorito(usuarioId, emprendimientoId) {
        const favorito = await this.prisma.favorito.findFirst({
            where: {
                usuarioId,
                emprendimientoId
            }
        });
        if (!favorito) {
            throw new common_1.NotFoundException('Favorito no encontrado');
        }
        await this.prisma.favorito.delete({
            where: { id: favorito.id }
        });
        return { message: 'Favorito eliminado exitosamente' };
    }
    async getFavoritos(usuarioId) {
        const favoritos = await this.prisma.favorito.findMany({
            where: { usuarioId },
            include: {
                emprendimiento: {
                    include: {
                        usuario: {
                            include: {
                                persona: true
                            }
                        }
                    }
                }
            }
        });
        const favoritosWithImages = await Promise.all(favoritos.map(async (favorito) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: favorito.emprendimiento.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, favorito.emprendimiento), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return favoritosWithImages;
    }
    async isFavorito(usuarioId, emprendimientoId) {
        const favorito = await this.prisma.favorito.findFirst({
            where: {
                usuarioId,
                emprendimientoId
            }
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