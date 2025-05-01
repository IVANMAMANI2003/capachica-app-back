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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("../supabase/supabase.service");
let ImagesService = class ImagesService {
    constructor(prisma, supabase) {
        this.prisma = prisma;
        this.supabase = supabase;
    }
    async uploadImage(file, imageableId, imageableType) {
        const bucket = 'images';
        const path = `${imageableType.toLowerCase()}/${imageableId}`;
        const publicUrl = await this.supabase.uploadFile(bucket, file, path);
        await this.prisma.image.create({
            data: {
                url: publicUrl,
                imageableId,
                imageableType,
            },
        });
        return publicUrl;
    }
    async deleteImage(id) {
        const image = await this.prisma.image.findUnique({
            where: { id },
        });
        if (!image) {
            return;
        }
        const url = new URL(image.url);
        const path = url.pathname.split('/').slice(3).join('/');
        await this.supabase.deleteFile('images', path);
        await this.prisma.image.delete({
            where: { id },
        });
    }
    async getImages(imageableId, imageableType) {
        return this.prisma.image.findMany({
            where: {
                imageableId,
                imageableType,
            },
        });
    }
};
exports.ImagesService = ImagesService;
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], ImagesService);
//# sourceMappingURL=images.service.js.map