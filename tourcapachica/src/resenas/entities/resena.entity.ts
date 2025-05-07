export class Resena {
  id: number;
  servicioId: number;
  usuarioId: number;
  calificacion: number;
  comentario?: string;
  estado: string;
  createdAt: Date;
  updatedAt: Date;
}