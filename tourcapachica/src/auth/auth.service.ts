import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
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
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const primerEmp = usuario.emprendimientos[0]?? { id: null };
    if (!primerEmp) {
      throw new UnauthorizedException('El usuario no tiene un emprendimiento asignado');
    }
    const isPasswordValid = await bcrypt.compare(loginDto.password, usuario.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: usuario.id,
      email: usuario.email,
      roles: usuario.usuariosRoles.map(ur => ur.rol.nombre),
      emprendimientoId:  primerEmp.id
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

  async refreshToken(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id,
      roles: user.usuariosRoles?.map((ur: { rol: { nombre: string } }) => ur.rol.nombre) ?? [] 
    };
    
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
