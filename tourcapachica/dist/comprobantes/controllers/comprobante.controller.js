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
exports.ComprobanteController = void 0;
const common_1 = require("@nestjs/common");
const comprobante_service_1 = require("../services/comprobante.service");
const comprobante_dto_1 = require("../dto/comprobante.dto");
let ComprobanteController = class ComprobanteController {
    constructor(comprobanteService) {
        this.comprobanteService = comprobanteService;
    }
    create(comprobanteDto) {
        return this.comprobanteService.create(comprobanteDto);
    }
    findAll() {
        return this.comprobanteService.findAll();
    }
    findOne(id) {
        return this.comprobanteService.findOne(+id);
    }
    update(id, comprobanteDto) {
        return this.comprobanteService.update(+id, comprobanteDto);
    }
    remove(id) {
        return this.comprobanteService.remove(+id);
    }
};
exports.ComprobanteController = ComprobanteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comprobante_dto_1.ComprobanteDto]),
    __metadata("design:returntype", void 0)
], ComprobanteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComprobanteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComprobanteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comprobante_dto_1.ComprobanteDto]),
    __metadata("design:returntype", void 0)
], ComprobanteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComprobanteController.prototype, "remove", null);
exports.ComprobanteController = ComprobanteController = __decorate([
    (0, common_1.Controller)('comprobantes'),
    __metadata("design:paramtypes", [comprobante_service_1.ComprobanteService])
], ComprobanteController);
//# sourceMappingURL=comprobante.controller.js.map