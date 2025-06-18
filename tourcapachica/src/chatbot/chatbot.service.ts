import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { chatbotConfig, validateChatbotConfig } from './chatbot.config';

export interface ChatMessage {
  id?: number;
  userId?: number;
  message: string;
  response: string;
  timestamp: Date;
  isUserMessage: boolean;
}

export interface ChatSession {
  id: number;
  userId: number;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class ChatbotService {
  private readonly logger = new Logger(ChatbotService.name);
  private genAI: GoogleGenerativeAI | null = null;
  private model: any = null;

  constructor(private readonly prisma: PrismaService) {
    validateChatbotConfig();
    
    if (chatbotConfig.geminiApiKey) {
      this.genAI = new GoogleGenerativeAI(chatbotConfig.geminiApiKey);
      this.model = this.genAI.getGenerativeModel({ 
        model: chatbotConfig.model,
        generationConfig: {
          temperature: chatbotConfig.temperature,
          maxOutputTokens: chatbotConfig.maxTokens,
        },
      });
      this.logger.log('✅ Google Gemini configurado correctamente');
    } else {
      this.logger.warn('⚠️  Google Gemini no configurado, usando respuestas predefinidas');
    }
  }

  /**
   * Procesa un mensaje del usuario y genera una respuesta usando IA
   */
  async processMessage(userId: number, message: string): Promise<ChatMessage> {
    try {
      this.logger.log(`Procesando mensaje del usuario ${userId}: ${message}`);

      // Generar respuesta del chatbot usando IA
      const response = await this.generateAIResponse(message);

      // Guardar el mensaje en la base de datos
      const savedMessage = await this.saveMessage(userId, message, response);

      return {
        id: savedMessage.id,
        userId: savedMessage.userId,
        message: savedMessage.userMessage,
        response: savedMessage.botResponse,
        timestamp: savedMessage.createdAt,
        isUserMessage: false,
      };
    } catch (error) {
      this.logger.error(`Error procesando mensaje: ${error.message}`);
      throw error;
    }
  }

  /**
   * Genera una respuesta basada en el mensaje del usuario usando IA (sin guardar en BD)
   */
  async generateResponseOnly(message: string): Promise<string> {
    return await this.generateAIResponse(message);
  }

  /**
   * Genera una respuesta usando IA consultando la base de datos
   */
  private async generateAIResponse(message: string): Promise<string> {
    // Si Google Gemini no está configurado, usar respuestas predefinidas
    if (!this.genAI || !this.model) {
      this.logger.log('Usando respuestas predefinidas (Google Gemini no configurado)');
      return this.generateFallbackResponse(message);
    }

    try {
      this.logger.log(`Generando respuesta con Gemini para: "${message}"`);
      
      // 1. Consultar datos de la base de datos
      const contextData = await this.getContextData();
      this.logger.log(`Datos obtenidos: ${contextData.servicios.length} servicios, ${contextData.paquetes.length} paquetes, ${contextData.lugaresTuristicos.length} lugares turísticos, ${contextData.emprendimientos.length} emprendimientos, ${contextData.resenas.length} reseñas`);

      // 2. Preparar el prompt con los datos reales
      const prompt = this.buildPrompt(message, contextData);
      this.logger.log(`Prompt generado (${prompt.length} caracteres)`);

      // 3. Llamar a Google Gemini
      this.logger.log('Llamando a Google Gemini...');
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      this.logger.log(`Respuesta de Gemini recibida: ${text ? text.length : 0} caracteres`);

      if (text && text.trim()) {
        return text.trim();
      } else {
        this.logger.warn('Respuesta vacía de Gemini, usando fallback');
        return this.generateFallbackResponse(message);
      }
    } catch (error) {
      this.logger.error(`Error generando respuesta con IA: ${error.message}`);
      this.logger.error(`Stack trace: ${error.stack}`);
      // Fallback a respuestas predefinidas si Google Gemini falla
      return this.generateFallbackResponse(message);
    }
  }

  /**
   * Obtiene datos de contexto de la base de datos
   */
  private async getContextData() {
    try {
      // Obtener servicios disponibles
      const servicios = await this.prisma.servicio.findMany({
        where: { estado: 'activo' },
        include: {
          tipoServicio: true,
          disponibilidad: {
            where: {
              estado: 'activo',
              cuposDisponibles: { gt: 0 }
            }
          }
        },
        take: 20
      });

      // Obtener paquetes turísticos disponibles
      const paquetes = await this.prisma.paqueteTuristico.findMany({
        where: { estado: 'activo' },
        include: {
          emprendimiento: true,
          disponibilidad: {
            where: {
              estado: 'activo',
              cuposDisponibles: { gt: 0 }
            }
          },
          servicios: {
            include: {
              servicio: true
            }
          }
        },
        take: 10
      });

      // Obtener lugares turísticos
      const lugaresTuristicos = await this.prisma.lugarTuristico.findMany({
        where: { estado: 'activo' },
        include: {
          emprendimientos: {
            where: { estado: 'aprobado' },
            take: 5
          }
        },
        take: 15
      });

      // Obtener emprendimientos aprobados
      const emprendimientos = await this.prisma.emprendimiento.findMany({
        where: { estado: 'aprobado' },
        include: {
          usuario: {
            include: {
              persona: true
            }
          },
          lugarTuristico: true,
          paquetesTuristicos: {
            where: { estado: 'activo' },
            take: 3
          },
          servicios: {
            include: {
              servicio: true
            },
            take: 5
          }
        },
        take: 10
      });

      // Obtener reseñas recientes
      const resenas = await this.prisma.resena.findMany({
        where: { estado: 'visible' },
        include: {
          servicio: true
        },
        orderBy: { createdAt: 'desc' },
        take: 10
      });

      return { servicios, paquetes, lugaresTuristicos, emprendimientos, resenas };
    } catch (error) {
      this.logger.error(`Error obteniendo datos de contexto: ${error.message}`);
      return { servicios: [], paquetes: [], lugaresTuristicos: [], emprendimientos: [], resenas: [] };
    }
  }

  /**
   * Construye el prompt para Google Gemini con los datos de la base de datos
   */
  private buildPrompt(message: string, contextData: any): string {
    const { servicios, paquetes, lugaresTuristicos, emprendimientos, resenas } = contextData;

    let context = '';

    // Información general de Tour Capachica
    context += 'INFORMACIÓN GENERAL:\n';
    context += 'Tour Capachica es una empresa turística ubicada en Capachica, Puno, Perú.\n';
    context += 'Nos especializamos en tours por el lago Titicaca y servicios turísticos locales.\n';
    context += 'Trabajamos con emprendimientos locales y lugares turísticos de la región.\n\n';

    // Agregar información de lugares turísticos
    if (lugaresTuristicos.length > 0) {
      context += 'LUGARES TURÍSTICOS DISPONIBLES:\n';
      lugaresTuristicos.forEach(lugar => {
        context += `- ${lugar.nombre}: ${lugar.descripcion}\n`;
        if (lugar.emprendimientos && lugar.emprendimientos.length > 0) {
          context += `  Emprendimientos asociados: ${lugar.emprendimientos.map(e => e.nombre).join(', ')}\n`;
        }
        context += '\n';
      });
    }

    // Agregar información de emprendimientos
    if (emprendimientos.length > 0) {
      context += 'EMPRENDIMIENTOS LOCALES:\n';
      emprendimientos.forEach(emprendimiento => {
        context += `- ${emprendimiento.nombre} (${emprendimiento.tipo}): ${emprendimiento.descripcion}\n`;
        if (emprendimiento.usuario && emprendimiento.usuario.persona) {
          context += `  Propietario: ${emprendimiento.usuario.persona.nombre} ${emprendimiento.usuario.persona.apellidos}\n`;
        }
        if (emprendimiento.lugarTuristico) {
          context += `  Ubicación: ${emprendimiento.lugarTuristico.nombre}\n`;
        }
        if (emprendimiento.paquetesTuristicos && emprendimiento.paquetesTuristicos.length > 0) {
          context += `  Paquetes disponibles: ${emprendimiento.paquetesTuristicos.map(p => p.nombre).join(', ')}\n`;
        }
        if (emprendimiento.servicios && emprendimiento.servicios.length > 0) {
          context += `  Servicios ofrecidos: ${emprendimiento.servicios.map(s => s.servicio.nombre).join(', ')}\n`;
        }
        context += '\n';
      });
    }

    // Agregar información de servicios
    if (servicios.length > 0) {
      context += 'SERVICIOS DISPONIBLES:\n';
      servicios.forEach(servicio => {
        context += `- ${servicio.nombre} (${servicio.tipoServicio.nombre}): ${servicio.descripcion || 'Sin descripción'}\n`;
        context += `  Precio: S/ ${servicio.precioBase} ${servicio.moneda}\n`;
        if (servicio.disponibilidad && servicio.disponibilidad.length > 0) {
          context += `  Disponibilidad: ${servicio.disponibilidad.length} fechas disponibles\n`;
        }
        context += '\n';
      });
    }

    // Agregar información de paquetes
    if (paquetes.length > 0) {
      context += 'PAQUETES TURÍSTICOS:\n';
      paquetes.forEach(paquete => {
        context += `- ${paquete.nombre}: ${paquete.descripcion}\n`;
        if (paquete.emprendimiento) {
          context += `  Emprendimiento: ${paquete.emprendimiento.nombre}\n`;
        }
        if (paquete.precio) {
          context += `  Precio: S/ ${paquete.precio} PEN\n`;
        }
        if (paquete.disponibilidad && paquete.disponibilidad.length > 0) {
          context += `  Disponibilidad: ${paquete.disponibilidad.length} fechas disponibles\n`;
        }
        if (paquete.servicios && paquete.servicios.length > 0) {
          context += `  Servicios incluidos: ${paquete.servicios.map(sp => sp.servicio.nombre).join(', ')}\n`;
        }
        context += '\n';
      });
    }

    // Agregar reseñas recientes
    if (resenas.length > 0) {
      context += 'RESEÑAS RECIENTES DE CLIENTES:\n';
      resenas.slice(0, 5).forEach(resena => {
        context += `- ${resena.servicio.nombre}: ${resena.calificacion}/5 estrellas\n`;
        if (resena.comentario) {
          context += `  "${resena.comentario}"\n`;
        }
      });
      context += '\n';
    }

    // Información de contacto
    context += 'INFORMACIÓN DE CONTACTO:\n';
    context += '- WhatsApp: +51 999 888 777\n';
    context += '- Email: info@tourcapachica.com\n';
    context += '- Teléfono: +51 51 123 456\n';
    context += '- Ubicación: Capachica, Puno, Perú\n';
    context += '- Horarios: Lunes a Domingo 7:00 AM - 8:00 PM\n\n';

    // Instrucciones para Gemini
    context += 'INSTRUCCIONES:\n';
    context += 'Eres un asistente turístico experto de Tour Capachica. Responde al mensaje del usuario de manera natural, amigable y profesional en español. Usa únicamente la información proporcionada arriba sobre lugares turísticos, emprendimientos locales, servicios, paquetes y reseñas. Si el usuario pregunta sobre algo que no está en los datos, sugiere que contacte directamente con el equipo de Tour Capachica.\n\n';

    return `${context}MENSAJE DEL USUARIO: "${message}"

RESPUESTA:`;
  }

  /**
   * Respuesta de fallback si Google Gemini falla
   */
  private generateFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas')) {
      return '¡Hola! Soy el asistente virtual de Tour Capachica. ¿En qué puedo ayudarte? Puedo informarte sobre nuestros servicios turísticos, lugares turísticos, emprendimientos locales, reservas, precios y más.';
    }

    if (lowerMessage.includes('servicios') || lowerMessage.includes('qué ofrecen') || lowerMessage.includes('qué tienen')) {
      return 'Ofrecemos diversos servicios turísticos en Capachica:\n\n' +
             '🏖️ Tours por las islas del lago Titicaca\n' +
             '🏠 Hospedaje en casas rurales\n' +
             '🍽️ Gastronomía local\n' +
             '🚣 Actividades acuáticas\n' +
             '🏔️ Trekking y senderismo\n' +
             '📸 Tours fotográficos\n\n' +
             '¿Te gustaría conocer más detalles sobre alguno de estos servicios?';
    }

    if (lowerMessage.includes('lugares') || lowerMessage.includes('sitios') || lowerMessage.includes('destinos')) {
      return 'En Capachica y sus alrededores encontrarás hermosos lugares turísticos:\n\n' +
             '🏝️ Islas del lago Titicaca\n' +
             '🏔️ Miradores panorámicos\n' +
             '🏛️ Sitios arqueológicos\n' +
             '🌊 Playas del lago\n' +
             '🏘️ Pueblos tradicionales\n\n' +
             '¿Te gustaría conocer más sobre algún lugar específico?';
    }

    if (lowerMessage.includes('emprendimientos') || lowerMessage.includes('empresas') || lowerMessage.includes('negocios')) {
      return 'Trabajamos con emprendimientos locales de Capachica:\n\n' +
             '🏠 Casas rurales y hospedaje\n' +
             '🍽️ Restaurantes y gastronomía local\n' +
             '🚣 Servicios de transporte lacustre\n' +
             '🎨 Artesanías y souvenirs\n' +
             '📸 Servicios fotográficos\n\n' +
             '¿Te interesa conocer algún emprendimiento específico?';
    }

    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuánto cuesta')) {
      return 'Los precios varían según el servicio y la temporada:\n\n' +
             '• Tours de medio día: desde S/ 50\n' +
             '• Tours de día completo: desde S/ 100\n' +
             '• Hospedaje por noche: desde S/ 80\n' +
             '• Paquetes completos: desde S/ 300\n\n' +
             '¿Te gustaría que te ayude a hacer una reserva o necesitas más información específica?';
    }

    if (lowerMessage.includes('reserva') || lowerMessage.includes('reservar') || lowerMessage.includes('booking')) {
      return 'Para hacer una reserva puedes:\n\n' +
             '1️⃣ Contactarnos por WhatsApp: +51 999 888 777\n' +
             '2️⃣ Enviarnos un email: reservas@tourcapachica.com\n' +
             '3️⃣ Usar nuestro sistema online en la web\n' +
             '4️⃣ Llamarnos: +51 51 123 456\n\n' +
             '¿En qué fecha te gustaría visitarnos?';
    }

    if (lowerMessage.includes('ubicación') || lowerMessage.includes('dónde están') || lowerMessage.includes('dirección')) {
      return 'Nos ubicamos en Capachica, Puno, Perú:\n\n' +
             '📍 Distrito: Capachica\n' +
             '📍 Provincia: Puno\n' +
             '📍 Región: Puno\n\n' +
             'Estamos a orillas del lago Titicaca, a 2 horas de la ciudad de Puno. ' +
             '¿Te gustaría que te ayude con las indicaciones para llegar?';
    }

    if (lowerMessage.includes('horario') || lowerMessage.includes('cuándo abren') || lowerMessage.includes('atención')) {
      return 'Nuestros horarios de atención:\n\n' +
             '🕐 Lunes a Domingo: 7:00 AM - 8:00 PM\n' +
             '📞 Atención telefónica: 24/7\n' +
             '💬 Chat online: 6:00 AM - 10:00 PM\n\n' +
             '¿En qué horario te gustaría visitarnos?';
    }

    if (lowerMessage.includes('gracias') || lowerMessage.includes('thank you')) {
      return '¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas sobre nuestros servicios turísticos, lugares turísticos, emprendimientos locales o cualquier información sobre Capachica, no dudes en preguntarme. ¡Que tengas un excelente día! 😊';
    }

    return 'Gracias por tu mensaje. Soy el asistente virtual de Tour Capachica y puedo ayudarte con:\n\n' +
           '• Información sobre lugares turísticos\n' +
           '• Emprendimientos locales\n' +
           '• Servicios turísticos\n' +
           '• Precios y paquetes\n' +
           '• Reservas y disponibilidad\n' +
           '• Ubicación y cómo llegar\n' +
           '• Horarios de atención\n\n' +
           '¿En qué puedo ayudarte específicamente?';
  }

  /**
   * Guarda el mensaje y la respuesta en la base de datos
   */
  private async saveMessage(userId: number, userMessage: string, botResponse: string) {
    return await this.prisma.chatMessage.create({
      data: {
        userId,
        userMessage,
        botResponse,
        createdAt: new Date(),
      },
    });
  }

  /**
   * Obtiene el historial de chat de un usuario
   */
  async getChatHistory(userId: number, limit: number = 50): Promise<ChatMessage[]> {
    try {
      const messages = await this.prisma.chatMessage.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: limit,
      });

      return messages.map(msg => ({
        id: msg.id,
        userId: msg.userId,
        message: msg.userMessage,
        response: msg.botResponse,
        timestamp: msg.createdAt,
        isUserMessage: false,
      }));
    } catch (error) {
      this.logger.error(`Error obteniendo historial de chat: ${error.message}`);
      throw error;
    }
  }

  /**
   * Obtiene estadísticas del chatbot
   */
  async getChatbotStats() {
    try {
      const totalMessages = await this.prisma.chatMessage.count();
      const uniqueUsers = await this.prisma.chatMessage.groupBy({
        by: ['userId'],
        _count: { userId: true },
      });

      const todayMessages = await this.prisma.chatMessage.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      });

      return {
        totalMessages,
        uniqueUsers: uniqueUsers.length,
        todayMessages,
        averageMessagesPerUser: totalMessages / (uniqueUsers.length || 1),
      };
    } catch (error) {
      this.logger.error(`Error obteniendo estadísticas: ${error.message}`);
      throw error;
    }
  }

  /**
   * Elimina el historial de chat de un usuario
   */
  async clearChatHistory(userId: number): Promise<void> {
    try {
      await this.prisma.chatMessage.deleteMany({
        where: { userId },
      });
      this.logger.log(`Historial de chat eliminado para el usuario ${userId}`);
    } catch (error) {
      this.logger.error(`Error eliminando historial de chat: ${error.message}`);
      throw error;
    }
  }
} 