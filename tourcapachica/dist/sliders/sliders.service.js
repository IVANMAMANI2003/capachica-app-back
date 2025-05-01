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
exports.SlidersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SlidersService = class SlidersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSliderDto) {
        const { imagenes, ...sliderData } = createSliderDto;
        const slider = await this.prisma.slider.create({
            data: sliderData,
        });
        if (imagenes && imagenes.length > 0) {
            await this.prisma.image.createMany({
                data: imagenes.map(img => ({
                    url: img.url,
                    imageableId: slider.id,
                    imageableType: 'Slider',
                })),
            });
        }
        return this.findOne(slider.id);
    }
    async findAll() {
        const sliders = await this.prisma.slider.findMany();
        const slidersWithImages = await Promise.all(sliders.map(async (slider) => {
            const imagenes = await this.prisma.image.findMany({
                where: {
                    imageableId: slider.id,
                    imageableType: 'Slider',
                },
            });
            return { ...slider, imagenes };
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
        const imagenes = await this.prisma.image.findMany({
            where: {
                imageableId: slider.id,
                imageableType: 'Slider',
            },
        });
        return { ...slider, imagenes };
    }
    async update(id, updateSliderDto) {
        const { imagenes, ...sliderData } = updateSliderDto;
        const slider = await this.prisma.slider.update({
            where: { id },
            data: sliderData,
        });
        if (imagenes) {
            await this.prisma.image.deleteMany({
                where: {
                    imageableId: id,
                    imageableType: 'Slider',
                },
            });
            if (imagenes.length > 0) {
                await this.prisma.image.createMany({
                    data: imagenes.map(img => ({
                        url: img.url,
                        imageableId: id,
                        imageableType: 'Slider',
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
                imageableType: 'Slider',
            },
        });
        return this.prisma.slider.delete({
            where: { id },
        });
    }
};
exports.SlidersService = SlidersService;
exports.SlidersService = SlidersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SlidersService);
//# sourceMappingURL=sliders.service.js.map