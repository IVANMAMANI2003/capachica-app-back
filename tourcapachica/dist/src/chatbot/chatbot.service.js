"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ChatbotService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const generative_ai_1 = require("@google/generative-ai");
const chatbot_config_1 = require("./chatbot.config");
let ChatbotService = ChatbotService_1 = class ChatbotService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(ChatbotService_1.name);
        this.genAI = null;
        this.model = null;
        (0, chatbot_config_1.validateChatbotConfig)();
        if (chatbot_config_1.chatbotConfig.geminiApiKey) {
            this.genAI = new generative_ai_1.GoogleGenerativeAI(chatbot_config_1.chatbotConfig.geminiApiKey);
            this.model = this.genAI.getGenerativeModel({
                model: chatbot_config_1.chatbotConfig.model,
                generationConfig: {
                    temperature: chatbot_config_1.chatbotConfig.temperature,
                    maxOutputTokens: chatbot_config_1.chatbotConfig.maxTokens,
                },
            });
            this.logger.log('✅ Google Gemini configurado correctamente');
        }
        else {
            this.logger.warn('⚠️  Google Gemini no configurado, usando respuestas predefinidas');
        }
    }
    async processMessage(userId, message) {
        try {
            this.logger.log(`Procesando mensaje del usuario ${userId}: ${message}`);
            const response = await this.generateAIResponse(message);
            const savedMessage = await this.saveMessage(userId, message, response);
            return {
                id: savedMessage.id,
                userId: savedMessage.userId,
                message: savedMessage.userMessage,
                response: savedMessage.botResponse,
                timestamp: savedMessage.createdAt,
                isUserMessage: false,
            };
        }
        catch (error) {
            this.logger.error(`Error procesando mensaje: ${error.message}`);
            throw error;
        }
    }
    async generateResponseOnly(message) {
        return await this.generateAIResponse(message);
    }
    async generateAIResponse(message) {
        if (!this.genAI || !this.model) {
            this.logger.log('Usando respuestas predefinidas (Google Gemini no configurado)');
            return this.generateFallbackResponse(message);
        }
        try {
            this.logger.log(`Generando respuesta con Gemini para: "${message}"`);
            const contextData = await this.getContextData();
            this.logger.log(`Datos obtenidos: ${contextData.servicios.length} servicios, ${contextData.paquetes.length} paquetes, ${contextData.lugaresTuristicos.length} lugares turísticos, ${contextData.emprendimientos.length} emprendimientos, ${contextData.resenas.length} reseñas`);
            const prompt = this.buildPrompt(message, contextData);
            this.logger.log(`Prompt generado (${prompt.length} caracteres)`);
            this.logger.log('Llamando a Google Gemini...');
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            this.logger.log(`Respuesta de Gemini recibida: ${text ? text.length : 0} caracteres`);
            if (text && text.trim()) {
                return text.trim();
            }
            else {
                this.logger.warn('Respuesta vacía de Gemini, usando fallback');
                return this.generateFallbackResponse(message);
            }
        }
        catch (error) {
            this.logger.error(`Error generando respuesta con IA: ${error.message}`);
            this.logger.error(`Stack trace: ${error.stack}`);
            return this.generateFallbackResponse(message);
        }
    }
    async getContextData() {
        try {
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
            const resenas = await this.prisma.resena.findMany({
                where: { estado: 'visible' },
                include: {
                    servicio: true
                },
                orderBy: { createdAt: 'desc' },
                take: 10
            });
            return { servicios, paquetes, lugaresTuristicos, emprendimientos, resenas };
        }
        catch (error) {
            this.logger.error(`Error obteniendo datos de contexto: ${error.message}`);
            return { servicios: [], paquetes: [], lugaresTuristicos: [], emprendimientos: [], resenas: [] };
        }
    }
    buildPrompt(message, contextData) {
        const { servicios, paquetes, lugaresTuristicos, emprendimientos, resenas } = contextData;
        let context = '';
        context += 'INFORMACIÓN GENERAL:\n';
        context += 'Tour Capachica es una empresa turística ubicada en Capachica, Puno, Perú.\n';
        context += 'Nos especializamos en tours por el lago Titicaca y servicios turísticos locales.\n';
        context += 'Trabajamos con emprendimientos locales y lugares turísticos de la región.\n\n';
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
        context += 'INFORMACIÓN DE CONTACTO:\n';
        context += '- WhatsApp: +51 999 888 777\n';
        context += '- Email: info@tourcapachica.com\n';
        context += '- Teléfono: +51 51 123 456\n';
        context += '- Ubicación: Capachica, Puno, Perú\n';
        context += '- Horarios: Lunes a Domingo 7:00 AM - 8:00 PM\n\n';
        context += 'INSTRUCCIONES:\n';
        context += 'Eres un asistente turístico experto de Tour Capachica. Responde al mensaje del usuario de manera natural, amigable y profesional en español. Usa únicamente la información proporcionada arriba sobre lugares turísticos, emprendimientos locales, servicios, paquetes y reseñas. Si el usuario pregunta sobre algo que no está en los datos, sugiere que contacte directamente con el equipo de Tour Capachica.\n\n';
        return `${context}MENSAJE DEL USUARIO: "${message}"

RESPUESTA:`;
    }
    generateFallbackResponse(message) {
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
    async saveMessage(userId, userMessage, botResponse) {
        return await this.prisma.chatMessage.create({
            data: {
                userId,
                userMessage,
                botResponse,
                createdAt: new Date(),
            },
        });
    }
    async getChatHistory(userId, limit = 50) {
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
        }
        catch (error) {
            this.logger.error(`Error obteniendo historial de chat: ${error.message}`);
            throw error;
        }
    }
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
        }
        catch (error) {
            this.logger.error(`Error obteniendo estadísticas: ${error.message}`);
            throw error;
        }
    }
    async clearChatHistory(userId) {
        try {
            await this.prisma.chatMessage.deleteMany({
                where: { userId },
            });
            this.logger.log(`Historial de chat eliminado para el usuario ${userId}`);
        }
        catch (error) {
            this.logger.error(`Error eliminando historial de chat: ${error.message}`);
            throw error;
        }
    }
};
exports.ChatbotService = ChatbotService;
exports.ChatbotService = ChatbotService = ChatbotService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatbotService);
//# sourceMappingURL=chatbot.service.js.map