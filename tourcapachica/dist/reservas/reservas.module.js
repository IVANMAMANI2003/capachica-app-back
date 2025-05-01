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
const reservas_service_1 = require("./reservas.service");
const reservas_controller_1 = require("./reservas.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const itinerarios_reserva_service_1 = require("./itinerarios-reserva.service");
const itinerarios_reserva_controller_1 = require("./itinerarios-reserva.controller");
const itinerarios_lugar_service_1 = require("./itinerarios-lugar.service");
const itinerarios_lugar_controller_1 = require("./itinerarios-lugar.controller");
let ReservasModule = class ReservasModule {
};
exports.ReservasModule = ReservasModule;
exports.ReservasModule = ReservasModule = __decorate([
    (0, common_1.Module)({
        controllers: [reservas_controller_1.ReservasController, itinerarios_reserva_controller_1.ItinerariosReservaController, itinerarios_lugar_controller_1.ItinerariosLugarController],
        providers: [reservas_service_1.ReservasService, itinerarios_reserva_service_1.ItinerariosReservaService, itinerarios_lugar_service_1.ItinerariosLugarService, prisma_service_1.PrismaService],
        exports: [reservas_service_1.ReservasService, itinerarios_reserva_service_1.ItinerariosReservaService, itinerarios_lugar_service_1.ItinerariosLugarService],
    })
], ReservasModule);
//# sourceMappingURL=reservas.module.js.map