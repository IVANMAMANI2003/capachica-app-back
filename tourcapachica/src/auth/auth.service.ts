import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await compare(password, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const roles = user.usuariosRoles?.map(ur => ur.rol.nombre) ?? [];
    
    const payload = { 
      email: user.email, 
      sub: user.id,
      roles: roles
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        roles: roles,
        persona: user.persona
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
