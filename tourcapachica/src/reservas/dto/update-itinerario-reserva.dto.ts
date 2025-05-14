import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDate, IsDateString, IsNotEmpty } from 'class-validator';

export class UpdateItinerarioReservaDto {
  @ApiProperty({ example: 'Plaza Mayor' })
  @IsOptional()
  @IsString()
  lugarEncuentro?: string;

  @ApiProperty({ example: '2023-10-01' })
  @IsDateString()
  @IsNotEmpty()
  fechaInicioActividad: string;

  @ApiProperty({ example: '2023-10-02' })
  @IsDateString()
  @IsNotEmpty()
  fechaFinActividad: string;

  // Agrega más campos según sea necesario
}