import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateReservaDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsNumber()
  cantidadPersonas?: number;

  // Agrega más campos según sea necesario
}