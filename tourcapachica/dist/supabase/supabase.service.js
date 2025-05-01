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
const supabase_js_1 = require("@supabase/supabase-js");
const config_1 = require("@nestjs/config");
let SupabaseService = class SupabaseService {
    constructor(configService) {
        this.configService = configService;
        const supabaseUrl = this.configService.get('SUPABASE_URL');
        const supabaseKey = this.configService.get('SUPABASE_SERVICE_ROLE_KEY');
        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Supabase URL and Key must be provided');
        }
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
    }
    async uploadFile(bucket, file, path) {
        const fileExt = file.originalname.split('.').pop();
        const fileName = `${path}/${Date.now()}.${fileExt}`;
        const { data, error } = await this.supabase.storage
            .from(bucket)
            .upload(fileName, file.buffer, {
            contentType: file.mimetype,
            upsert: true
        });
        if (error) {
            throw new Error(`Error uploading file to Supabase: ${error.message}`);
        }
        const { data: { publicUrl } } = this.supabase.storage
            .from(bucket)
            .getPublicUrl(fileName);
        return publicUrl;
    }
    async deleteFile(bucket, path) {
        const { error } = await this.supabase.storage
            .from(bucket)
            .remove([path]);
        if (error) {
            throw new Error(`Error deleting file from Supabase: ${error.message}`);
        }
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map