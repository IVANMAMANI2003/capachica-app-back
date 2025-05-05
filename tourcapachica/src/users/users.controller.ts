import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar un nuevo usuario (público)' })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos o usuario ya existe' })
  @ApiResponse({ status: 404, description: 'Subdivisión no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async register(@Body() registerUserDto: RegisterUserDto) {
    try {
      return await this.usersService.register(registerUserDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error('Error en el controlador al registrar usuario:', error);
      throw new HttpException('Error al registrar el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('request-password-reset')
  @ApiOperation({ summary: 'Solicitar restablecimiento de contraseña (público)' })
  @ApiResponse({ status: 200, description: 'Solicitud procesada exitosamente' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async requestPasswordReset(@Body() requestPasswordResetDto: RequestPasswordResetDto) {
    try {
      return await this.usersService.requestPasswordReset(requestPasswordResetDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error('Error en el controlador al solicitar restablecimiento:', error);
      throw new HttpException('Error al procesar la solicitud', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Restablecer contraseña (público)' })
  @ApiResponse({ status: 200, description: 'Contraseña restablecida exitosamente' })
  @ApiResponse({ status: 400, description: 'Token inválido o expirado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    try {
      return await this.usersService.resetPassword(resetPasswordDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error('Error en el controlador al restablecer contraseña:', error);
      throw new HttpException('Error al restablecer la contraseña', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post(':id/reset-password')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin', 'Admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Restablecer contraseña de un usuario (solo Admin)' })
  @ApiResponse({ status: 200, description: 'Contraseña restablecida exitosamente' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async adminResetPassword(
    @Param('id') id: string,
    @Body('newPassword') newPassword: string,
  ) {
    try {
      return await this.usersService.adminResetPassword(+id, newPassword);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error('Error en el controlador al restablecer contraseña:', error);
      throw new HttpException('Error al restablecer la contraseña', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('fotoPerfil'))
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos o usuario ya existe' })
  @ApiResponse({ status: 404, description: 'Persona no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    try {
      return await this.usersService.create(createUserDto, file);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error('Error en el controlador al crear usuario:', error);
      throw new HttpException('Error al crear el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('fotoPerfil'))
  @ApiOperation({ summary: 'Actualizar un usuario' })
  @ApiResponse({ status: 200, description: 'Usuario actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.usersService.update(+id, updateUserDto, file);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  @ApiResponse({ status: 200, description: 'Usuario eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  remove(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }

  @Post(':userId/roles/:roleId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin')
  @ApiBearerAuth()
  assignRole(@Param('userId') userId: string, @Param('roleId') roleId: string) {
    return this.usersService.assignRole(+userId, +roleId);
  }

  @Delete(':userId/roles/:roleId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin')
  @ApiBearerAuth()
  removeRole(@Param('userId') userId: string, @Param('roleId') roleId: string) {
    return this.usersService.removeRole(+userId, +roleId);
  }
}
