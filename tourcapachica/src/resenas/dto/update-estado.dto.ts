import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ResenaEstado } from '../enums/resena-estado.enum';

export class UpdateEstadoDto {
  @ApiProperty({ description: 'Estado de la reseña', enum: ResenaEstado })
  @IsEnum(ResenaEstado, { message: 'El estado debe ser visible u oculto' })
  estado: ResenaEstado;
}