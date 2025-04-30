import { PartialType } from '@nestjs/swagger';
import { CreateItinerarioReservaDto } from './create-itinerario-reserva.dto';

export class UpdateItinerarioReservaDto extends PartialType(CreateItinerarioReservaDto) {} 