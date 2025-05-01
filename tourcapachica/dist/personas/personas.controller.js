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
exports.PersonasController = void 0;
const common_1 = require("@nestjs/common");
const personas_service_1 = require("./personas.service");
const create_persona_dto_1 = require("./dto/create-persona.dto");
const update_persona_dto_1 = require("./dto/update-persona.dto");
const swagger_1 = require("@nestjs/swagger");
let PersonasController = class PersonasController {
    constructor(personasService) {
        this.personasService = personasService;
    }
    create(createPersonaDto) {
        return this.personasService.create(createPersonaDto);
    }
    findAll() {
        return this.personasService.findAll();
    }
    findOne(id) {
        return this.personasService.findOne(+id);
    }
    update(id, updatePersonaDto) {
        return this.personasService.update(+id, updatePersonaDto);
    }
    remove(id) {
        return this.personasService.remove(+id);
    }
};
exports.PersonasController = PersonasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva persona' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Persona creada exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_persona_dto_1.CreatePersonaDto]),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las personas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de personas obtenida exitosamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una persona por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Persona encontrada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Persona no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una persona' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Persona actualizada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Persona no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_persona_dto_1.UpdatePersonaDto]),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una persona' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Persona eliminada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Persona no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "remove", null);
exports.PersonasController = PersonasController = __decorate([
    (0, swagger_1.ApiTags)('personas'),
    (0, common_1.Controller)('personas'),
    __metadata("design:paramtypes", [personas_service_1.PersonasService])
], PersonasController);
//# sourceMappingURL=personas.controller.js.map