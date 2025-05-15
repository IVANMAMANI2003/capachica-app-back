import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString } from "class-validator";

export class CancelacionReservaDto {
@ApiProperty({ example: 'Motivo de cancelación' })
@IsString()
@IsOptional()
motivoCancelacion: string | null;

@ApiProperty({ example: '2023-10-01' })
@IsDateString()
@IsOptional()
fechaCancelacion?: string | null;
}