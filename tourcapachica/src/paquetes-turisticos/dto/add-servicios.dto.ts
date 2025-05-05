import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class AddServiciosDto {
  @ApiProperty({
    description: 'Lista de IDs de servicios a agregar al paquete turístico',
    type: [Number],
    example: [1, 2, 3],
    isArray: true,
    required: true
  })
  @IsArray()
  @IsNumber({}, { each: true })
  servicioIds: number[];
} 