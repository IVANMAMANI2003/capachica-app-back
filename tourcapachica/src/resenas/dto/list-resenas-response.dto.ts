import { ApiProperty } from '@nestjs/swagger';
import { ResenaResponseDto } from './resena-response.dto';

export class ListResenasResponseDto {
  @ApiProperty({ type: [ResenaResponseDto] })
  resenas: ResenaResponseDto[];
}