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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = require("bcrypt");
const crypto_1 = require("crypto");
const supabase_service_1 = require("../supabase/supabase.service");
let UsersService = class UsersService {
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
        this.IMAGEABLE_TYPE = 'Usuario';
        this.BUCKET_NAME = 'usuarios';
    }
    async findAll() {
        const users = await this.prisma.usuario.findMany({
            include: {
                persona: true,
                usuariosRoles: {
                    include: {
                        rol: true
                    }
                }
            }
        });
        const usersWithImages = await Promise.all(users.map(async (user) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: user.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, user), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return usersWithImages;
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
    async create(createUserDto) {
        const { fotoPerfil, password } = createUserDto, userData = __rest(createUserDto, ["fotoPerfil", "password"]);
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = await this.prisma.usuario.create({
            data: Object.assign(Object.assign({}, userData), { passwordHash: hashedPassword, persona: {
                    create: {
                        nombre: userData.nombre,
                        apellidos: userData.apellidos,
                        telefono: userData.telefono,
                        direccion: userData.direccion,
                        fechaNacimiento: userData.fechaNacimiento,
                        subdivisionId: userData.subdivisionId,
                    }
                } }),
            include: {
                persona: true
            }
        });
        if (fotoPerfil) {
            const filePath = `${user.id}/${Date.now()}-${fotoPerfil.split('/').pop()}`;
            const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, fotoPerfil);
            if (error) {
                throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
            }
            const imagenDb = await this.prisma.image.create({
                data: {
                    url: data.path
                }
            });
            await this.prisma.imageable.create({
                data: {
                    image_id: imagenDb.id,
                    imageable_id: user.id,
                    imageable_type: this.IMAGEABLE_TYPE
                }
            });
            await this.prisma.persona.update({
                where: { id: user.personaId },
                data: { fotoPerfilUrl: data.path }
            });
        }
        return this.findOne(user.id);
    }
    async findOne(id) {
        const user = await this.prisma.usuario.findUnique({
            where: { id },
            include: {
                persona: true,
                usuariosRoles: {
                    include: {
                        rol: true
                    }
                }
            }
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: user.id,
            },
            include: {
                image: true
            }
        });
        return Object.assign(Object.assign({}, user), { imagenes: imageables.map(imageable => ({
                id: imageable.image.id,
                url: imageable.image.url
            })) });
    }
    async update(id, updateUserDto) {
        const { fotoPerfil } = updateUserDto, userData = __rest(updateUserDto, ["fotoPerfil"]);
        const user = await this.prisma.usuario.update({
            where: { id },
            data: Object.assign(Object.assign({}, userData), { persona: {
                    update: {
                        nombre: userData.nombre,
                        apellidos: userData.apellidos,
                        telefono: userData.telefono,
                        direccion: userData.direccion,
                        fechaNacimiento: userData.fechaNacimiento,
                        subdivisionId: userData.subdivisionId,
                    }
                } }),
            include: {
                persona: true
            }
        });
        if (fotoPerfil) {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: id,
                },
                include: {
                    image: true
                }
            });
            for (const imageable of imageables) {
                const { error } = await this.supabaseService.deleteFile(this.BUCKET_NAME, imageable.image.url);
                if (error) {
                    console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
                }
                await this.prisma.imageable.delete({
                    where: { id: imageable.id }
                });
                await this.prisma.image.delete({
                    where: { id: imageable.image.id }
                });
            }
            const filePath = `${id}/${Date.now()}-${fotoPerfil.split('/').pop()}`;
            const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, fotoPerfil);
            if (error) {
                throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
            }
            const imagenDb = await this.prisma.image.create({
                data: {
                    url: data.path
                }
            });
            await this.prisma.imageable.create({
                data: {
                    image_id: imagenDb.id,
                    imageable_id: id,
                    imageable_type: this.IMAGEABLE_TYPE
                }
            });
            await this.prisma.persona.update({
                where: { id: user.personaId },
                data: { fotoPerfilUrl: data.path }
            });
        }
        return this.findOne(id);
    }
    async delete(id) {
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: id,
            },
            include: {
                image: true
            }
        });
        for (const imageable of imageables) {
            const { error } = await this.supabaseService.deleteFile(this.BUCKET_NAME, imageable.image.url);
            if (error) {
                console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
            }
            await this.prisma.imageable.delete({
                where: { id: imageable.id }
            });
            await this.prisma.image.delete({
                where: { id: imageable.image.id }
            });
        }
        return this.prisma.usuario.delete({
            where: { id },
        });
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], UsersService);
//# sourceMappingURL=users.service.js.map