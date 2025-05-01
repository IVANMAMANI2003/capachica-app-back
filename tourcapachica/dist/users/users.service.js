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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = require("bcrypt");
const crypto_1 = require("crypto");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.usuario.findMany({
            include: {
                usuariosRoles: {
                    include: {
                        rol: true
                    }
                }
            }
        });
    }
    async findByEmail(email) {
        return this.prisma.usuario.findUnique({
            where: { email },
            include: {
                usuariosRoles: {
                    include: {
                        rol: true
                    }
                },
                persona: true
            }
        });
    }
    async findById(id) {
        return this.prisma.usuario.findUnique({
            where: { id },
            include: {
                usuariosRoles: {
                    include: {
                        rol: true
                    }
                }
            }
        });
    }
    async register(data) {
        try {
            const subdivision = await this.prisma.subdivision.findUnique({
                where: { id: data.subdivisionId },
            });
            if (!subdivision) {
                throw new common_1.NotFoundException(`Subdivisión con ID ${data.subdivisionId} no encontrada`);
            }
            const existingUser = await this.prisma.usuario.findUnique({
                where: { email: data.email },
            });
            if (existingUser) {
                throw new common_1.BadRequestException(`Ya existe un usuario con el email ${data.email}`);
            }
            const persona = await this.prisma.persona.create({
                data: {
                    nombre: data.nombre,
                    apellidos: data.apellidos,
                    telefono: data.telefono,
                    direccion: data.direccion,
                    fotoPerfilUrl: data.fotoPerfilUrl,
                    fechaNacimiento: data.fechaNacimiento,
                    subdivisionId: data.subdivisionId,
                },
            });
            const hashedPassword = await (0, bcrypt_1.hash)(data.password, 10);
            const usuario = await this.prisma.usuario.create({
                data: {
                    email: data.email,
                    passwordHash: hashedPassword,
                    personaId: persona.id,
                },
            });
            const userRole = await this.prisma.role.findFirst({
                where: { nombre: 'User' },
            });
            if (!userRole) {
                throw new common_1.InternalServerErrorException('No se encontró el rol de usuario regular');
            }
            await this.prisma.usuariosRoles.create({
                data: {
                    usuarioId: usuario.id,
                    rolId: userRole.id,
                },
            });
            return usuario;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Error al registrar usuario:', error);
            throw new common_1.InternalServerErrorException('Error al registrar el usuario. Por favor, intente nuevamente.');
        }
    }
    async create(data) {
        try {
            const persona = await this.prisma.persona.findUnique({
                where: { id: data.persona_id },
            });
            if (!persona) {
                throw new common_1.NotFoundException(`Persona con ID ${data.persona_id} no encontrada`);
            }
            const existingUser = await this.prisma.usuario.findUnique({
                where: { email: data.email },
            });
            if (existingUser) {
                throw new common_1.BadRequestException(`Ya existe un usuario con el email ${data.email}`);
            }
            const hashedPassword = await (0, bcrypt_1.hash)(data.password, 10);
            return this.prisma.usuario.create({
                data: {
                    email: data.email,
                    passwordHash: hashedPassword,
                    personaId: data.persona_id,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Error al crear usuario:', error);
            throw new common_1.InternalServerErrorException('Error al crear el usuario. Por favor, intente nuevamente.');
        }
    }
    async update(id, data) {
        try {
            const user = await this.prisma.usuario.findUnique({
                where: { id },
            });
            if (!user) {
                throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
            }
            if (data.email && data.email !== user.email) {
                const existingUser = await this.prisma.usuario.findUnique({
                    where: { email: data.email },
                });
                if (existingUser) {
                    throw new common_1.BadRequestException(`Ya existe un usuario con el email ${data.email}`);
                }
            }
            const updateData = {};
            if (data.email) {
                updateData.email = data.email;
            }
            if (data.password) {
                updateData.passwordHash = await (0, bcrypt_1.hash)(data.password, 10);
            }
            if (data.esta_activo !== undefined) {
                updateData.estaActivo = data.esta_activo;
            }
            return this.prisma.usuario.update({
                where: { id },
                data: updateData,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Error al actualizar usuario:', error);
            throw new common_1.InternalServerErrorException('Error al actualizar el usuario. Por favor, intente nuevamente.');
        }
    }
    async delete(id) {
        try {
            return await this.prisma.usuario.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
    }
    async assignRole(userId, roleId) {
        try {
            const user = await this.prisma.usuario.findUnique({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.NotFoundException(`Usuario con ID ${userId} no encontrado`);
            }
            const role = await this.prisma.role.findUnique({
                where: { id: roleId },
            });
            if (!role) {
                throw new common_1.NotFoundException(`Rol con ID ${roleId} no encontrado`);
            }
            return this.prisma.usuariosRoles.create({
                data: {
                    usuarioId: userId,
                    rolId: roleId,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('El usuario ya tiene asignado este rol');
            }
            console.error('Error al asignar rol:', error);
            throw new common_1.InternalServerErrorException('Error al asignar el rol. Por favor, intente nuevamente.');
        }
    }
    async removeRole(userId, roleId) {
        try {
            return await this.prisma.usuariosRoles.deleteMany({
                where: {
                    usuarioId: userId,
                    rolId: roleId,
                },
            });
        }
        catch (error) {
            console.error('Error al eliminar rol:', error);
            throw new common_1.InternalServerErrorException('Error al eliminar el rol. Por favor, intente nuevamente.');
        }
    }
    async requestPasswordReset(data) {
        try {
            const user = await this.prisma.usuario.findUnique({
                where: { email: data.email },
            });
            if (!user) {
                return { message: 'Si el email existe, se enviará un enlace de restablecimiento' };
            }
            const resetToken = (0, crypto_1.randomBytes)(32).toString('hex');
            const resetTokenExpires = new Date();
            resetTokenExpires.setHours(resetTokenExpires.getHours() + 1);
            await this.prisma.usuario.update({
                where: { id: user.id },
                data: {
                    recoveryToken: resetToken,
                    recoveryTokenExpiresAt: resetTokenExpires,
                },
            });
            return {
                message: 'Si el email existe, se enviará un enlace de restablecimiento',
                token: resetToken,
            };
        }
        catch (error) {
            console.error('Error al solicitar restablecimiento de contraseña:', error);
            throw new common_1.InternalServerErrorException('Error al procesar la solicitud');
        }
    }
    async resetPassword(data) {
        try {
            const user = await this.prisma.usuario.findFirst({
                where: {
                    recoveryToken: data.token,
                    recoveryTokenExpiresAt: {
                        gt: new Date(),
                    },
                },
            });
            if (!user) {
                throw new common_1.BadRequestException('Token inválido o expirado');
            }
            const hashedPassword = await (0, bcrypt_1.hash)(data.newPassword, 10);
            await this.prisma.usuario.update({
                where: { id: user.id },
                data: {
                    passwordHash: hashedPassword,
                    recoveryToken: null,
                    recoveryTokenExpiresAt: null,
                },
            });
            return { message: 'Contraseña actualizada exitosamente' };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Error al restablecer contraseña:', error);
            throw new common_1.InternalServerErrorException('Error al restablecer la contraseña');
        }
    }
    async adminResetPassword(userId, newPassword) {
        try {
            const user = await this.prisma.usuario.findUnique({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.NotFoundException(`Usuario con ID ${userId} no encontrado`);
            }
            const hashedPassword = await (0, bcrypt_1.hash)(newPassword, 10);
            await this.prisma.usuario.update({
                where: { id: userId },
                data: {
                    passwordHash: hashedPassword,
                },
            });
            return { message: 'Contraseña actualizada exitosamente' };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('Error al restablecer contraseña:', error);
            throw new common_1.InternalServerErrorException('Error al restablecer la contraseña');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map