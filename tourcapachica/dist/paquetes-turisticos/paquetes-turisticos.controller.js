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
exports.PaquetesTuristicosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paquetes_turisticos_service_1 = require("./paquetes-turisticos.service");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const create_disponibilidad_dto_1 = require("./dto/create-disponibilidad.dto");
const update_disponibilidad_dto_1 = require("./dto/update-disponibilidad.dto");
let PaquetesTuristicosController = class PaquetesTuristicosController {
    constructor(paquetesTuristicosService) {
        this.paquetesTuristicosService = paquetesTuristicosService;
    }
    createDisponibilidad(id, createDisponibilidadDto) {
        return this.paquetesTuristicosService.createDisponibilidad(id, createDisponibilidadDto);
    }
    getDisponibilidadesPaquete(id) {
        return this.paquetesTuristicosService.getDisponibilidadesPaquete(id);
    }
    getDisponibilidad(id) {
        return this.paquetesTuristicosService.getDisponibilidad(id);
    }
    updateDisponibilidad(id, updateDisponibilidadDto) {
        return this.paquetesTuristicosService.updateDisponibilidad(id, updateDisponibilidadDto);
    }
    deleteDisponibilidad(id) {
        return this.paquetesTuristicosService.deleteDisponibilidad(id);
    }
};
exports.PaquetesTuristicosController = PaquetesTuristicosController;
__decorate([
    (0, common_1.Post)(':id/disponibilidad'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear disponibilidad para un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Disponibilidad creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de disponibilidad inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_disponibilidad_dto_1.CreateDisponibilidadDto]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "createDisponibilidad", null);
__decorate([
    (0, common_1.Get)(':id/disponibilidad'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las disponibilidades de un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de disponibilidades' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "getDisponibilidadesPaquete", null);
__decorate([
    (0, common_1.Get)('disponibilidad/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una disponibilidad específica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "getDisponibilidad", null);
__decorate([
    (0, common_1.Patch)('disponibilidad/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una disponibilidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad actualizada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de actualización inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_disponibilidad_dto_1.UpdateDisponibilidadDto]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "updateDisponibilidad", null);
__decorate([
    (0, common_1.Delete)('disponibilidad/:id'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una disponibilidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad eliminada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "deleteDisponibilidad", null);
exports.PaquetesTuristicosController = PaquetesTuristicosController = __decorate([
    (0, swagger_1.ApiTags)('paquetes-turisticos'),
    (0, common_1.Controller)('paquetes-turisticos'),
    __metadata("design:paramtypes", [paquetes_turisticos_service_1.PaquetesTuristicosService])
], PaquetesTuristicosController);
//# sourceMappingURL=paquetes-turisticos.controller.js.map