"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const sliders_module_1 = require("./sliders/sliders.module");
const emprendimientos_module_1 = require("./emprendimientos/emprendimientos.module");
const lugares_turisticos_module_1 = require("./lugares-turisticos/lugares-turisticos.module");
const servicios_module_1 = require("./servicios/servicios.module");
const paquetes_turisticos_module_1 = require("./paquetes-turisticos/paquetes-turisticos.module");
const images_module_1 = require("./images/images.module");
const supabase_module_1 = require("./supabase/supabase.module");
const payments_module_1 = require("./payments/payments.module");
const reservas_module_1 = require("./reservas/reservas.module");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const permissions_module_1 = require("./permissions/permissions.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule,
            sliders_module_1.SlidersModule,
            emprendimientos_module_1.EmprendimientosModule,
            lugares_turisticos_module_1.LugaresTuristicosModule,
            servicios_module_1.ServiciosModule,
            paquetes_turisticos_module_1.PaquetesTuristicosModule,
            images_module_1.ImagesModule,
            supabase_module_1.SupabaseModule,
            payments_module_1.PaymentsModule,
            reservas_module_1.ReservasModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map