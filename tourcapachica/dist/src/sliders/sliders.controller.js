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
exports.SlidersController = void 0;
const common_1 = require("@nestjs/common");
const sliders_service_1 = require("./sliders.service");
const create_slider_dto_1 = require("./dto/create-slider.dto");
const update_slider_dto_1 = require("./dto/update-slider.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let SlidersController = class SlidersController {
    constructor(slidersService) {
        this.slidersService = slidersService;
    }
    create(createSliderDto) {
        return this.slidersService.create(createSliderDto);
    }
    findAll() {
        return this.slidersService.findAll();
    }
    async findOne(id) {
        const slider = await this.slidersService.findOne(+id);
        if (!slider) {
            throw new common_1.HttpException('Slider no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return slider;
    }
    async update(id, updateSliderDto) {
        const slider = await this.slidersService.findOne(+id);
        if (!slider) {
            throw new common_1.HttpException('Slider no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return this.slidersService.update(+id, updateSliderDto);
    }
    async remove(id) {
        const slider = await this.slidersService.findOne(+id);
        if (!slider) {
            throw new common_1.HttpException('Slider no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return this.slidersService.remove(+id);
    }
};
exports.SlidersController = SlidersController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo slider' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Slider creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_slider_dto_1.CreateSliderDto]),
    __metadata("design:returntype", void 0)
], SlidersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los sliders' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de sliders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SlidersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un slider por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Slider encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Slider no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SlidersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un slider por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Slider actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_slider_dto_1.UpdateSliderDto]),
    __metadata("design:returntype", Promise)
], SlidersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un slider por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Slider eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Slider no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SlidersController.prototype, "remove", null);
exports.SlidersController = SlidersController = __decorate([
    (0, common_1.Controller)('sliders'),
    (0, swagger_1.ApiTags)('sliders'),
    __metadata("design:paramtypes", [sliders_service_1.SlidersService])
], SlidersController);
//# sourceMappingURL=sliders.controller.js.map