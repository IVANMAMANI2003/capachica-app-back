import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate, IsArray, IsDateString, IsEnum } from 'class-validator';
import { EstadoReserva } from '../enums/estado-reserva.enum';

export class CreateReservaDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  // Removed codigoReserva field

  @ApiProperty({ example: 'tipo_reserva' })
  @IsString()
  @IsNotEmpty()
  tipoReserva: string;

  @ApiProperty({ example: '2023-10-01' })
  @IsDateString()
  @IsNotEmpty()
  fechaReserva: string;

  @ApiProperty({ example: '2023-10-01' })
  @IsDateString()
  @IsNotEmpty()
  fechaInicio: string;

  @ApiProperty({ example: '2023-10-02' })
  @IsDateString()
  @IsNotEmpty()
  @IsOptional()
  fechaFin: string | null;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsNotEmpty()
  cantidadPersonas: number;

  @ApiProperty({ example: 100.00 })
  @IsNumber()
  @IsNotEmpty()
  precioTotal: number;

  @ApiProperty({ example: 'PEN' })
  @IsString()
  @IsNotEmpty()
  moneda: string;


  @ApiProperty({ enum: EstadoReserva, example: EstadoReserva.PENDIENTE })
  @IsEnum(EstadoReserva, { message: 'El estado debe ser uno válido del enum EstadoReserva' })
  estado: EstadoReserva;

  @ApiProperty({ example: 'Notas adicionales' })
  @IsString()
  @IsOptional()
  notas: string | null;

  }