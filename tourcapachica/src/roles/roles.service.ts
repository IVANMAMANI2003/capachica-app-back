import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignPermissionDto } from '../permissions/dto/assing-permission.dto';
@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({
      data: createRoleDto,
    });
  }

  async findAll() {
    return this.prisma.role.findMany({
      include: {
        rolesPermisos: {
          include: {
            permiso: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: {
        rolesPermisos: {
          include: {
            permiso: true,
          },
        },
      },
    });

    if (!role) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      return await this.prisma.role.update({
        where: { id },
        data: updateRoleDto,
      });
    } catch (error) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.role.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }
  }

  async assignPermission(id: number, assignPermissionDto: AssignPermissionDto) {
    try {
      return await this.prisma.rolesPermisos.create({
        data: {
          rolId: id,
          permisoId: assignPermissionDto.permisoId,
        },
        include: {
          permiso: true,
          rol: true,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new NotFoundException('El permiso ya está asignado a este rol');
      }
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }
  }
}
