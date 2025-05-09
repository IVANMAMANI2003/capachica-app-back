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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        var _a;
        const usuario = await this.prisma.usuario.findUnique({
            where: { email: loginDto.email },
            include: {
                persona: true,
                usuariosRoles: {
                    include: {
                        rol: true
                    }
                },
                emprendimientos: true
            }
        });
        if (!usuario) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const primerEmp = (_a = usuario.emprendimientos[0]) !== null && _a !== void 0 ? _a : { id: null };
        if (!primerEmp) {
            throw new common_1.UnauthorizedException('El usuario no tiene un emprendimiento asignado');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, usuario.passwordHash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const payload = {
            sub: usuario.id,
            email: usuario.email,
            roles: usuario.usuariosRoles.map(ur => ur.rol.nombre),
            emprendimientoId: primerEmp.id
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
            usuario: {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.persona.nombre,
                apellidos: usuario.persona.apellidos,
                roles: usuario.usuariosRoles.map(ur => ur.rol.nombre),
                emprendimientoId: primerEmp.id
            }
        };
    }
    async refreshToken(user) {
        var _a, _b;
        const payload = {
            email: user.email,
            sub: user.id,
            roles: (_b = (_a = user.usuariosRoles) === null || _a === void 0 ? void 0 : _a.map((ur) => ur.rol.nombre)) !== null && _b !== void 0 ? _b : []
        };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map