"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasModule = void 0;
const common_1 = require("@nestjs/common");
const reserva_service_1 = require("./services/reserva.service");
const itinerario_reserva_service_1 = require("./services/itinerario-reserva.service");
const prisma_module_1 = require("../prisma/prisma.module");
const supabase_module_1 = require("../supabase/supabase.module");
const reserva_controller_1 = require("./controllers/reserva.controller");
const itinerario_reserva_controller_1 = require("./controllers/itinerario-reserva.controller");
let ReservasModule = class ReservasModule {
};
exports.ReservasModule = ReservasModule;
exports.ReservasModule = ReservasModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, supabase_module_1.SupabaseModule],
        controllers: [reserva_controller_1.ReservaController, itinerario_reserva_controller_1.ItinerarioReservaController],
        providers: [reserva_service_1.ReservaService, itinerario_reserva_service_1.ItinerarioReservaService],
        exports: [reserva_service_1.ReservaService, itinerario_reserva_service_1.ItinerarioReservaService],
    })
], ReservasModule);
//# sourceMappingURL=reservas.module.js.map