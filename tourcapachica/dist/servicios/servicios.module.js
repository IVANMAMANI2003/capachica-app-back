"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosModule = void 0;
const common_1 = require("@nestjs/common");
const servicios_service_1 = require("./services/servicios.service");
const servicios_controller_1 = require("./controllers/servicios.controller");
const tipos_servicio_service_1 = require("./services/tipos-servicio.service");
const tipos_servicio_controller_1 = require("./controllers/tipos-servicio.controller");
const disponibilidad_service_1 = require("./services/disponibilidad.service");
const disponibilidad_controller_1 = require("./controllers/disponibilidad.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const supabase_module_1 = require("../supabase/supabase.module");
let ServiciosModule = class ServiciosModule {
};
exports.ServiciosModule = ServiciosModule;
exports.ServiciosModule = ServiciosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            supabase_module_1.SupabaseModule,
        ],
        controllers: [
            servicios_controller_1.ServiciosController,
            tipos_servicio_controller_1.TiposServicioController,
            disponibilidad_controller_1.DisponibilidadController,
        ],
        providers: [
            servicios_service_1.ServiciosService,
            tipos_servicio_service_1.TiposServicioService,
            disponibilidad_service_1.DisponibilidadService,
        ],
        exports: [
            servicios_service_1.ServiciosService,
            tipos_servicio_service_1.TiposServicioService,
            disponibilidad_service_1.DisponibilidadService,
        ],
    })
], ServiciosModule);
//# sourceMappingURL=servicios.module.js.map