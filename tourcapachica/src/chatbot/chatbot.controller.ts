import { Controller, Post, Get, Delete, Body, Param, UseGuards, Request, ParseIntPipe, Query, Optional, Injectable, ExecutionContext } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ChatbotService, ChatMessage } from './chatbot.service';
import { SendMessageDto } from './dto/send-message.dto';
import { AuthGuard } from '@nestjs/passport';

// Guard opcional que permite acceso con o sin autenticación
@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    // Si hay error de autenticación, simplemente retornamos undefined (usuario no autenticado)
    if (err || !user) {
      return undefined;
    }
    return user;
  }
}

interface RequestWithUser extends Request {
  user?: {
    id: number;
  };
}

@ApiTags('chatbot')
@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('send')
  @UseGuards(OptionalJwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ 
    summary: 'Enviar mensaje al chatbot',
    description: 'Envía un mensaje al chatbot. Si el usuario está autenticado, se guarda en la base de datos. Si no, solo se procesa la respuesta.'
  })
  @ApiResponse({ status: 200, description: 'Mensaje procesado exitosamente' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async sendMessage(
    @Body() sendMessageDto: SendMessageDto,
    @Request() req: RequestWithUser,
  ): Promise<ChatMessage | { response: string }> {
    // Si el usuario está autenticado, guardar en BD
    if (req.user?.id) {
      return await this.chatbotService.processMessage(req.user.id, sendMessageDto.message);
    } else {
      // Si no está autenticado, solo procesar respuesta sin guardar
      const response = await this.chatbotService.generateResponseOnly(sendMessageDto.message);
      return { response };
    }
  }

  @Get('history')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener historial de chat del usuario (solo usuarios autenticados)' })
  @ApiResponse({ status: 200, description: 'Historial obtenido exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Número máximo de mensajes a obtener' })
  async getChatHistory(
    @Request() req: RequestWithUser,
    @Query('limit') limit?: string,
  ): Promise<ChatMessage[]> {
    const limitNumber = limit ? parseInt(limit, 10) : 50;
    return await this.chatbotService.getChatHistory(req.user.id, limitNumber);
  }

  @Get('stats')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener estadísticas del chatbot (solo SuperAdmin)' })
  @ApiResponse({ status: 200, description: 'Estadísticas obtenidas exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'No tiene permisos' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async getChatbotStats() {
    return await this.chatbotService.getChatbotStats();
  }

  @Delete('history')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar historial de chat del usuario (solo usuarios autenticados)' })
  @ApiResponse({ status: 200, description: 'Historial eliminado exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async clearChatHistory(@Request() req: RequestWithUser): Promise<{ message: string }> {
    await this.chatbotService.clearChatHistory(req.user.id);
    return { message: 'Historial de chat eliminado exitosamente' };
  }

  @Get('help')
  @ApiOperation({ summary: 'Obtener información de ayuda del chatbot' })
  @ApiResponse({ status: 200, description: 'Información de ayuda obtenida exitosamente' })
  getHelpInfo() {
    return {
      message: '¡Hola! Soy el asistente virtual de Tour Capachica.',
      capabilities: [
        'Información sobre servicios turísticos',
        'Precios y paquetes',
        'Reservas y disponibilidad',
        'Ubicación y cómo llegar',
        'Horarios de atención',
        'Información general sobre Capachica'
      ],
      examples: [
        '¿Qué servicios ofrecen?',
        '¿Cuánto cuesta un tour?',
        '¿Cómo hago una reserva?',
        '¿Dónde están ubicados?',
        '¿Cuáles son sus horarios?'
      ],
      contact: {
        whatsapp: '+51 999 888 777',
        email: 'info@tourcapachica.com',
        phone: '+51 51 123 456'
      },
      note: 'Si inicias sesión, podrás guardar tu historial de conversación y acceder a él más tarde.'
    };
  }
} 