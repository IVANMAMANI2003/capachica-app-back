import { ApiProperty } from '@nestjs/swagger';
import { UpdateUserDto } from './update-user.dto';
import { UpdatePersonaDto } from '../../personas/dto/update-persona.dto';

export class UpdateUserWithPersonaDto {
  @ApiProperty({ type: UpdateUserDto })
  user: UpdateUserDto;

  @ApiProperty({ type: UpdatePersonaDto })
  persona: UpdatePersonaDto;
}