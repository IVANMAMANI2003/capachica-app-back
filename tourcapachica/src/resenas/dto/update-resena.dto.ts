import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateResenaDto {
  @ApiProperty({ description: 'Calificación', example: 5, required: false })
  @IsOptional()
  @IsNumber()
  calificacion?: number;

  @ApiProperty({ description: 'Comentario', example: 'Muy buen servicio', required: false })
  @IsOptional()
  @IsString()
  comentario?: string;

}