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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LugaresTuristicosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lugares_turisticos_service_1 = require("./lugares-turisticos.service");
const create_lugar_turistico_dto_1 = require("./dto/create-lugar-turistico.dto");
const update_lugar_turistico_dto_1 = require("./dto/update-lugar-turistico.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let LugaresTuristicosController = class LugaresTuristicosController {
    constructor(lugaresTuristicosService) {
        this.lugaresTuristicosService = lugaresTuristicosService;
    }
    create(createLugarTuristicoDto) {
        return this.lugaresTuristicosService.create(createLugarTuristicoDto);
    }
    findAll() {
        return this.lugaresTuristicosService.findAll();
    }
    findDestacados() {
        return this.lugaresTuristicosService.findDestacados();
    }
    async findOne(id) {
        const lugar = await this.lugaresTuristicosService.findOne(+id);
        if (!lugar) {
            throw new common_1.HttpException('Lugar turístico no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return lugar;
    }
    async update(id, updateLugarTuristicoDto) {
        const lugar = await this.lugaresTuristicosService.findOne(+id);
        if (!lugar) {
            throw new common_1.HttpException('Lugar turístico no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return this.lugaresTuristicosService.update(+id, updateLugarTuristicoDto);
    }
    async remove(id) {
        const lugar = await this.lugaresTuristicosService.findOne(+id);
        if (!lugar) {
            throw new common_1.HttpException('Lugar turístico no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return this.lugaresTuristicosService.remove(+id);
    }
    async markAsFavorite(lugarTuristicoId, req) {
        const userId = req.user.id;
        return this.lugaresTuristicosService.markAsFavorite(userId, lugarTuristicoId);
    }
    async unmarkAsFavorite(lugarTuristicoId, req) {
        const userId = req.user.id;
        return this.lugaresTuristicosService.unmarkAsFavorite(userId, lugarTuristicoId);
    }
    async getTopFavoritos() {
        return this.lugaresTuristicosService.getTopFavoritos();
    }
    async countTotalFavoritos() {
        return this.lugaresTuristicosService.countTotalFavoritos();
    }
};
exports.LugaresTuristicosController = LugaresTuristicosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo lugar turístico' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Lugar turístico creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lugar_turistico_dto_1.CreateLugarTuristicoDto]),
    __metadata("design:returntype", void 0)
], LugaresTuristicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los lugares turísticos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de lugares turísticos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LugaresTuristicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('destacados'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lugares turísticos destacados' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de lugares turísticos destacados' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LugaresTuristicosController.prototype, "findDestacados", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un lugar turístico por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lugar turístico encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Lugar turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LugaresTuristicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un lugar turístico por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lugar turístico actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lugar_turistico_dto_1.UpdateLugarTuristicoDto]),
    __metadata("design:returntype", Promise)
], LugaresTuristicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un lugar turístico por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lugar turístico eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Lugar turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LugaresTuristicosController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('favorito/:lugarTuristicoId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Marcar un lugar turístico como favorito' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Lugar turístico marcado como favorito' }),
    __param(0, (0, common_1.Param)('lugarTuristicoId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LugaresTuristicosController.prototype, "markAsFavorite", null);
__decorate([
    (0, common_1.Delete)('favorito/:lugarTuristicoId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Desmarcar un lugar turístico como favorito' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lugar turístico desmarcado como favorito' }),
    __param(0, (0, common_1.Param)('lugarTuristicoId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LugaresTuristicosController.prototype, "unmarkAsFavorite", null);
__decorate([
    (0, common_1.Get)('favoritos/top'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener los 10 lugares turísticos más marcados como favoritos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de los 10 lugares turísticos más favoritos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LugaresTuristicosController.prototype, "getTopFavoritos", null);
__decorate([
    (0, common_1.Get)('favoritos/count'),
    (0, swagger_1.ApiOperation)({ summary: 'Contar el total de favoritos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Total de favoritos contados' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LugaresTuristicosController.prototype, "countTotalFavoritos", null);
exports.LugaresTuristicosController = LugaresTuristicosController = __decorate([
    (0, swagger_1.ApiTags)('lugares-turisticos'),
    (0, common_1.Controller)('lugares-turisticos'),
    __metadata("design:paramtypes", [lugares_turisticos_service_1.LugaresTuristicosService])
], LugaresTuristicosController);
//# sourceMappingURL=lugares-turisticos.controller.js.map