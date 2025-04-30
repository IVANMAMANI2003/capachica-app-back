import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async create(createPermissionDto: CreatePermissionDto) {
    return this.prisma.permiso.create({
      data: createPermissionDto,
    });
  }

  async findAll() {
    return this.prisma.permiso.findMany({
      include: {
        rolesPermisos: {
          include: {
            rol: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const permiso = await this.prisma.permiso.findUnique({
      where: { id },
      include: {
        rolesPermisos: {
          include: {
            rol: true,
          },
        },
      },
    });

    if (!permiso) {
      throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    }

    return permiso;
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    try {
      return await this.prisma.permiso.update({
        where: { id },
        data: updatePermissionDto,
      });
    } catch (error) {
      throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.permiso.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    }
  }
}
