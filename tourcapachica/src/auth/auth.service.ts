import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { email },
      include: {
        persona: true,
        usuariosRoles: {
          include: {
            rol: true
          }
        }
      }
    });

    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(password, usuario.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: usuario.id,
      email: usuario.email,
      roles: usuario.usuariosRoles.map(ur => ur.rol.nombre)
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.persona.nombre,
        apellidos: usuario.persona.apellidos,
        roles: usuario.usuariosRoles.map(ur => ur.rol.nombre)
      }
    };
  }

  async refreshToken(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id,
      roles: user.usuariosRoles?.map(ur => ur.rol.nombre) ?? [] 
    };
    
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
