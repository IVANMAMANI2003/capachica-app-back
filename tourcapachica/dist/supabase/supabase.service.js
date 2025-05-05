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
exports.SupabaseService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const supabase_config_1 = require("../config/supabase.config");
let SupabaseService = class SupabaseService {
    constructor(configService) {
        this.configService = configService;
        this.BUCKET_NAME = 'images';
        this.supabase = (0, supabase_config_1.createSupabaseClient)(this.configService);
    }
    async uploadFile(file, imageableType, imageableId) {
        try {
            const folderPath = this.getFolderPath(imageableType, imageableId);
            const fileExt = file.originalname.split('.').pop();
            const fileName = `${folderPath}/${Date.now()}.${fileExt}`;
            const { data, error } = await this.supabase.storage
                .from(this.BUCKET_NAME)
                .upload(fileName, file.buffer, {
                contentType: file.mimetype,
                upsert: true
            });
            if (error) {
                throw new Error(`Error uploading file to Supabase: ${error.message}`);
            }
            const { data: { publicUrl } } = this.supabase.storage
                .from(this.BUCKET_NAME)
                .getPublicUrl(fileName);
            return publicUrl;
        }
        catch (error) {
            throw new Error(`Error in uploadFile: ${error.message}`);
        }
    }
    async deleteFile(imageableType, imageableId, fileName) {
        try {
            const folderPath = this.getFolderPath(imageableType, imageableId);
            const filePath = `${folderPath}/${fileName}`;
            const { error } = await this.supabase.storage
                .from(this.BUCKET_NAME)
                .remove([filePath]);
            if (error) {
                throw new Error(`Error deleting file from Supabase: ${error.message}`);
            }
        }
        catch (error) {
            throw new Error(`Error in deleteFile: ${error.message}`);
        }
    }
    getFolderPath(imageableType, imageableId) {
        const typePath = imageableType.toLowerCase().replace(/\s+/g, '-');
        return `${typePath}/${imageableId}`;
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map