import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UpdatePersonaDto } from '../../personas/dto/update-persona.dto';

export class UpdateUserWithPersonaDto {
  @ApiPropertyOptional({ description: 'Email del usuario', example: 'juan.garcia@example.com' })
  email?: string;

  @ApiProperty({ type: UpdatePersonaDto })
  persona: UpdatePersonaDto;
}