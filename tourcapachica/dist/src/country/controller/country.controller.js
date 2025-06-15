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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const country_service_1 = require("../services/country.service");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    async findAll() {
        return this.countryService.findAll();
    }
    async findById(id) {
        return this.countryService.findById(id);
    }
    async findByName(name) {
        return this.countryService.findByName(name);
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los países y sus subdivisiones' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de países y subdivisiones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un país y sus subdivisiones por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del país' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'País encontrado con sus subdivisiones' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'País no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('name/:name'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un país y sus subdivisiones por nombre' }),
    (0, swagger_1.ApiParam)({ name: 'name', description: 'Nombre del país' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'País encontrado con sus subdivisiones' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'País no encontrado' }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findByName", null);
exports.CountryController = CountryController = __decorate([
    (0, swagger_1.ApiTags)('countries'),
    (0, common_1.Controller)('countries'),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map