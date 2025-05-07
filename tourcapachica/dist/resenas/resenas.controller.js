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
const create_resena_dto_1 = require("./dto/create-resena.dto");
const update_resena_dto_1 = require("./dto/update-resena.dto");
const filter_resenas_dto_1 = require("./dto/filter-resenas.dto");
const resenas_service_1 = require("./resenas.service");
let ResenasController = class ResenasController {
    constructor(resenasService) {
        this.resenasService = resenasService;
    }
    create(createResenaDto) {
        return this.resenasService.create(createResenaDto);
    }
    findAll(filter) {
        if (filter.servicioId) {
            return this.resenasService.findAll().then(resenas => resenas.filter(r => r.servicioId === filter.servicioId));
        }
        return this.resenasService.findAll();
    }
    findOne(id) {
        return this.resenasService.findOne(Number(id));
    }
    update(id, updateResenaDto) {
        return this.resenasService.update(Number(id), updateResenaDto);
    }
    remove(id) {
        return this.resenasService.remove(Number(id));
    }
    promedio(servicioId) {
        return this.resenasService.promedioCalificacionPorServicio(Number(servicioId));
    }
};
exports.ResenasController = ResenasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resena_dto_1.CreateResenaDto]),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_resenas_dto_1.FilterResenasDto]),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_resena_dto_1.UpdateResenaDto]),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResenasController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/promedio/:servicioId'),
    __param(0, (0, common_1.Param)('servicioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResenasController.prototype, "promedio", null);
exports.ResenasController = ResenasController = __decorate([
    (0, common_1.Controller)('resenas'),
    __metadata("design:paramtypes", [resenas_service_1.ResenasService])
], ResenasController);
//# sourceMappingURL=resenas.controller.js.map