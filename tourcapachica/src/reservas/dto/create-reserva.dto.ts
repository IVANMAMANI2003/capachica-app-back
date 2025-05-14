import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate, IsArray } from 'class-validator';

export class CreateReservaDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ example: 'ABC123' })
  @IsString()
  @IsNotEmpty()
  codigoReserva: string;

  @ApiProperty({ example: 'tipo_reserva' })
  @IsString()
  @IsNotEmpty()
  tipoReserva: string;

  @ApiProperty({ example: '2023-10-0' })
  @IsDate()
  @IsNotEmpty()
  fechaReserva: Date;

  @ApiProperty({ example: '2023-10-01' })
  @IsDate()
  @IsNotEmpty()
  fechaInicio: Date;

  @ApiProperty({ example: '2023-10-02' })
  @IsDate()
  @IsOptional()
  fechaFin: Date | null;

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

  @ApiProperty({ example: 'tarjeta' })
  @IsString()
  @IsOptional()
  metodoPago: string | null;

  @ApiProperty({ example: '{}' })
  @IsOptional()
  datosPago: object | null;

  @ApiProperty({ example: 'pendiente' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: 'Notas adicionales' })
  @IsString()
  @IsOptional()
  notas: string | null;

  @ApiProperty({ example: 'Motivo de cancelación' })
  @IsString()
  @IsOptional()
  motivoCancelacion: string | null;

  @ApiProperty({ example: '2023-10-01' })
  @IsDate()
  @IsOptional()
  fechaCancelacion: Date | null;
  }