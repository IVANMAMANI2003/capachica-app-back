import { IsOptional, IsString, IsDate } from 'class-validator';

export class UpdateItinerarioReservaDto {
  @IsOptional()
  @IsString()
  lugarEncuentro?: string;

  @IsOptional()
  @IsDate()
  fechaInicioActividad?: Date;

  @IsOptional()
  @IsDate()
  fechaFinActividad?: Date;

  // Agrega más campos según sea necesario
}