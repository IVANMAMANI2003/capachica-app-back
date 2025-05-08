import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max,  IsString } from 'class-validator';

export class CreateResenaDto {
  @ApiProperty({ description: 'ID del servicio', example: 1 })
  @IsInt({ message: 'El ID del servicio debe ser un número entero' })
  servicioId: number;

  @ApiProperty({ description: 'Calificación', example: 5 })
  @IsInt({ message: 'La calificación debe ser un número entero' })
  @Min(1, { message: 'La calificación mínima es 1' })
  @Max(5, { message: 'La calificación máxima es 5' })
  calificacion: number;

  @ApiProperty({ description: 'Comentario', example: 'Excelente servicio' })
  @IsString({ message: 'El comentario debe ser un texto' })
  comentario?: string;
}