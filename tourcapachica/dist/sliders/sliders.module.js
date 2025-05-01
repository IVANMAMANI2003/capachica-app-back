"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlidersModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const sliders_controller_1 = require("./sliders.controller");
const sliders_service_1 = require("./sliders.service");
let SlidersModule = class SlidersModule {
};
exports.SlidersModule = SlidersModule;
exports.SlidersModule = SlidersModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [sliders_controller_1.SlidersController],
        providers: [sliders_service_1.SlidersService],
        exports: [sliders_service_1.SlidersService],
    })
], SlidersModule);
//# sourceMappingURL=sliders.module.js.map