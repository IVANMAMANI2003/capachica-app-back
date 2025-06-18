import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class SendMessageDto {
  @ApiProperty({ 
    description: 'Mensaje del usuario para el chatbot',
    example: '¿Qué servicios ofrecen?',
    maxLength: 1000
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000, { message: 'El mensaje no puede tener más de 1000 caracteres' })
  message: string;
} 