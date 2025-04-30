import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate, IsEnum, Min } from 'class-validator';
import { Type } from 'class-transformer';

export enum EstadoReserva {
  PENDIENTE = 'pendiente',
  CONFIRMADA = 'confirmada',
  CANCELADA = 'cancelada',
  COMPLETADA = 'completada'
}

export class CreateReservaDto {
  @ApiProperty({
    description: 'ID del turista que realiza la reserva',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  turistaId: number;

  @ApiProperty({
    description: 'Código único de la reserva',
    example: 'RES-202403150001',
  })
  @IsString()
  @IsNotEmpty()
  codigoReserva: string;

  @ApiProperty({
    description: 'Tipo de reserva',
    example: 'estandar',
  })
  @IsString()
  @IsNotEmpty()
  tipoReserva: string;

  @ApiProperty({
    description: 'Fecha de la reserva',
    example: '2024-05-15T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  fechaReserva: Date;

  @ApiProperty({
    description: 'Fecha de inicio de la reserva',
    example: '2024-05-15T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  fechaInicio: Date;

  @ApiProperty({
    description: 'Hora de la reserva',
    example: '09:00:00',
    required: false,
  })
  @IsString()
  @IsOptional()
  hora?: string;

  @ApiProperty({
    description: 'Fecha de fin de la reserva',
    example: '2024-05-15T00:00:00.000Z',
    required: false,
  })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  fechaFin?: Date;

  @ApiProperty({
    description: 'Cantidad de personas',
    example: 2,
    default: 1,
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  cantidadPersonas?: number;

  @ApiProperty({
    description: 'Estado de la reserva',
    example: 'pendiente',
    enum: EstadoReserva,
    default: EstadoReserva.PENDIENTE,
  })
  @IsEnum(EstadoReserva)
  @IsOptional()
  estado?: EstadoReserva;

  @ApiProperty({
    description: 'Precio total de la reserva',
    example: 150.00,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  precioTotal: number;

  @ApiProperty({
    description: 'Moneda del precio total',
    example: 'PEN',
    required: false,
  })
  @IsString()
  @IsOptional()
  moneda?: string;

  @ApiProperty({
    description: 'Método de pago',
    example: 'tarjeta',
    required: false,
  })
  @IsString()
  @IsOptional()
  metodoPago?: string;

  @ApiProperty({
    description: 'Datos del pago',
    example: { 'numeroTarjeta': '****1234' },
    required: false,
  })
  @IsOptional()
  datosPago?: any;

  @ApiProperty({
    description: 'Notas adicionales sobre la reserva',
    example: 'Cliente con necesidades especiales',
    required: false,
  })
  @IsString()
  @IsOptional()
  notas?: string;

  @ApiProperty({
    description: 'Motivo de cancelación',
    example: 'Cambio de planes',
    required: false,
  })
  @IsString()
  @IsOptional()
  motivoCancelacion?: string;

  @ApiProperty({
    description: 'Fecha de cancelación',
    example: '2024-05-15T00:00:00.000Z',
    required: false,
  })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  fechaCancelacion?: Date;
} 