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
exports.ResenasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_resena_dto_1 = require("./dto/create-resena.dto");
const update_resena_dto_1 = require("./dto/update-resena.dto");
const resenas_service_1 = require("./resenas.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let ResenasController = class ResenasController {
    constructor(resenasService) {
        this.resenasService = resenasService;
    }
    create(createResenaDto) {
        try {
            return this.resenasService.create(createResenaDto);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear la reseña', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll() {
        return this.resenasService.findAll();
    }
    findByServicio(servicioId) {
        return this.resenasService.findAll().then(resenas => resenas.filter(r => r.servicioId === Number(servicioId)));
    }
    async findOne(id) {
        const resena = await this.resenasService.findOne(Number(id));
        if (!resena) {
            throw new common_1.HttpException('Reseña no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        return resena;
    }
    async partialUpdate(id, updateResenaDto) {
        const resena = await this.resenasService.findOne(Number(id));
        if (!resena) {
            throw new common_1.HttpException('Reseña no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        return this.resenasService.update(Number(id), updateResenaDto);
    }
    async remove(id) {
        const resena = await this.resenasService.findOne(Number(id));
        if (!resena) {
            throw new common_1.HttpException('Reseña no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        return this.resenasService.remove(Number(id));
    }
    async promedio(servicioId) {
        return this.resenasService.promedioCalificacionPorServicio(Number(servicioId));
    }
};
exports.ResenasController = ResenasController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin', 'User'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva reseña' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Reseña creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resena_dto_1.CreateResenaDto]),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las reseñas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de reseñas obtenida exitosamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/servicio/:servicioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener  reseñas por el id del servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de reseñas por servicio obtenida exitosamente' }),
    __param(0, (0, common_1.Param)('servicioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "findByServicio", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una reseña por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reseña encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reseña no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResenasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin', 'User'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una reseña por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reseña actualizada exitosamente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_resena_dto_1.UpdateResenaDto]),
    __metadata("design:returntype", Promise)
], ResenasController.prototype, "partialUpdate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin', 'User'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una reseña por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reseña eliminada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reseña no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResenasController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/promedio/:servicioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener el promedio de calificación por servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Promedio de calificación obtenido exitosamente' }),
    __param(0, (0, common_1.Param)('servicioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResenasController.prototype, "promedio", null);
exports.ResenasController = ResenasController = __decorate([
    (0, swagger_1.ApiTags)('resenas'),
    (0, common_1.Controller)('resenas'),
    __metadata("design:paramtypes", [resenas_service_1.ResenasService])
], ResenasController);
//# sourceMappingURL=resenas.controller.js.map