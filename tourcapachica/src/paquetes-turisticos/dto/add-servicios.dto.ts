import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ServicioPaqueteDto {
  @ApiProperty({ description: 'ID del servicio a agregar' })
  @IsNumber()
  servicioId: number;

  @ApiProperty({ description: 'Orden del servicio en el paquete' })
  @IsNumber()
  orden: number;
}

export class AddServiciosDto {
  @ApiProperty({ description: 'Lista de servicios a agregar', type: [ServicioPaqueteDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ServicioPaqueteDto)
  servicios: ServicioPaqueteDto[];
} 