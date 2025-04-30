import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AssignPermissionDto {
  @ApiProperty({ description: 'ID del permiso a asignar' })
  @IsNumber()
  @IsNotEmpty()
  permisoId: number;
}