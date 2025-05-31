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
exports.SlidersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("../supabase/supabase.service");
let SlidersService = class SlidersService {
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
        this.IMAGEABLE_TYPE = 'Slider';
        this.BUCKET_NAME = 'sliders';
    }
    async create(createSliderDto) {
        const { imagenes } = createSliderDto, sliderData = __rest(createSliderDto, ["imagenes"]);
        const slider = await this.prisma.slider.create({
            data: {
                nombre: sliderData.nombre,
                description: sliderData.description,
                estado: sliderData.estado,
            },
        });
        if (imagenes && imagenes.length > 0) {
            for (const imagen of imagenes) {
                const filePath = `${slider.id}/${Date.now()}-${imagen.url.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, imagen.url);
                if (error) {
                    throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
                }
                const imagenDb = await this.prisma.image.create({
                    data: {
                        url: data.path
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagenDb.id,
                        imageable_id: slider.id,
                        imageable_type: this.IMAGEABLE_TYPE
                    }
                });
            }
        }
        return this.findOne(slider.id);
    }
    async findAll() {
        const sliders = await this.prisma.slider.findMany();
        const slidersWithImages = await Promise.all(sliders.map(async (slider) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: slider.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, slider), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return slidersWithImages;
    }
    async findOne(id) {
        const slider = await this.prisma.slider.findUnique({
            where: { id },
        });
        if (!slider) {
            return null;
        }
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: slider.id,
            },
            include: {
                image: true
            }
        });
        return Object.assign(Object.assign({}, slider), { imagenes: imageables.map(imageable => ({
                id: imageable.image.id,
                url: imageable.image.url
            })) });
    }
    async update(id, updateSliderDto) {
        const { imagenes } = updateSliderDto, sliderData = __rest(updateSliderDto, ["imagenes"]);
        await this.prisma.slider.update({
            where: { id },
            data: {
                nombre: sliderData.nombre,
                description: sliderData.descripcion,
                estado: sliderData.estado,
            },
        });
        if (imagenes) {
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
                const imagenDb = await this.prisma.image.create({
                    data: {
                        url: data.path
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagenDb.id,
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
        return this.prisma.slider.delete({
            where: { id },
        });
    }
};
exports.SlidersService = SlidersService;
exports.SlidersService = SlidersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], SlidersService);
//# sourceMappingURL=sliders.service.js.map