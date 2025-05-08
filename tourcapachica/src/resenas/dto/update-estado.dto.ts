import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEstadoDto {
  @ApiProperty({ description: 'estado', example: 'aprobado' })
  @IsString()
  @IsNotEmpty()
  estado: string;
}