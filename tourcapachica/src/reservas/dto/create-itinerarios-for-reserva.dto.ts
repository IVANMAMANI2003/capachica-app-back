import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateItinerarioReservaDto } from './create-itinerario-reserva.dto';

export class CreateItinerariosForReservaDto {
  @ApiProperty({ example: 1, description: 'ID de la reserva asociada a los itinerarios' })
  @IsInt()
  reservaId: number;

  @ApiProperty({
    description: 'Lista de itinerarios para esta reserva',
    type: [CreateItinerarioReservaDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateItinerarioReservaDto)
  itinerarios: CreateItinerarioReservaDto[];
}