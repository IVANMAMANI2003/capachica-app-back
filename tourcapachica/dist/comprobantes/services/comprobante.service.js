"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteService = void 0;
const common_1 = require("@nestjs/common");
let ComprobanteService = class ComprobanteService {
    constructor() {
        this.comprobantes = [];
    }
    create(comprobanteDto) {
        const newComprobante = Object.assign(Object.assign({ id: this.comprobantes.length + 1 }, comprobanteDto), { createdAt: new Date(), updatedAt: new Date() });
        this.comprobantes.push(newComprobante);
        return newComprobante;
    }
    findAll() {
        return this.comprobantes;
    }
    findOne(id) {
        return this.comprobantes.find(comprobante => comprobante.id === id);
    }
    update(id, updateComprobanteDto) {
        const comprobante = this.findOne(id);
        if (comprobante) {
            Object.assign(comprobante, updateComprobanteDto, { updatedAt: new Date() });
        }
        return comprobante;
    }
    remove(id) {
        this.comprobantes = this.comprobantes.filter(comprobante => comprobante.id !== id);
    }
};
exports.ComprobanteService = ComprobanteService;
exports.ComprobanteService = ComprobanteService = __decorate([
    (0, common_1.Injectable)()
], ComprobanteService);
//# sourceMappingURL=comprobante.service.js.map