"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsModule = void 0;
const common_1 = require("@nestjs/common");
const payments_service_1 = require("./payments.service");
const payments_controller_1 = require("./payments.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const tipos_pago_service_1 = require("./tipos-pago.service");
const tipos_pago_controller_1 = require("./tipos-pago.controller");
const pago_detalle_service_1 = require("./pago-detalle.service");
const pago_detalle_controller_1 = require("./pago-detalle.controller");
const comprobantes_service_1 = require("./comprobantes.service");
const comprobantes_controller_1 = require("./comprobantes.controller");
const reservas_module_1 = require("../reservas/reservas.module");
let PaymentsModule = class PaymentsModule {
};
exports.PaymentsModule = PaymentsModule;
exports.PaymentsModule = PaymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [reservas_module_1.ReservasModule],
        controllers: [payments_controller_1.PaymentsController, tipos_pago_controller_1.TipoPagoController, pago_detalle_controller_1.PagoDetalleController, comprobantes_controller_1.ComprobantesController],
        providers: [payments_service_1.PaymentsService, tipos_pago_service_1.TipoPagoService, pago_detalle_service_1.PagoDetalleService, comprobantes_service_1.ComprobantesService, prisma_service_1.PrismaService],
        exports: [payments_service_1.PaymentsService, tipos_pago_service_1.TipoPagoService, pago_detalle_service_1.PagoDetalleService, comprobantes_service_1.ComprobantesService],
    })
], PaymentsModule);
//# sourceMappingURL=payments.module.js.map