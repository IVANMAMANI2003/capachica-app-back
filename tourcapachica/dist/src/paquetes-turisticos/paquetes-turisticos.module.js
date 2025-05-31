"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaquetesTuristicosModule = void 0;
const common_1 = require("@nestjs/common");
const paquetes_turisticos_service_1 = require("./paquetes-turisticos.service");
const paquetes_turisticos_controller_1 = require("./paquetes-turisticos.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const supabase_module_1 = require("../supabase/supabase.module");
let PaquetesTuristicosModule = class PaquetesTuristicosModule {
};
exports.PaquetesTuristicosModule = PaquetesTuristicosModule;
exports.PaquetesTuristicosModule = PaquetesTuristicosModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, supabase_module_1.SupabaseModule],
        controllers: [paquetes_turisticos_controller_1.PaquetesTuristicosController],
        providers: [paquetes_turisticos_service_1.PaquetesTuristicosService],
        exports: [paquetes_turisticos_service_1.PaquetesTuristicosService],
    })
], PaquetesTuristicosModule);
//# sourceMappingURL=paquetes-turisticos.module.js.map