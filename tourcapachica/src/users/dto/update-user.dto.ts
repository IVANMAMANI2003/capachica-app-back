import { IsOptional, IsEmail, IsBoolean, IsObject } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { UpdatePersonaDto } from './update-persona.dto';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'Email del usuario' })
  @IsOptional()
  @IsEmail()
  email?: string;

  
}
