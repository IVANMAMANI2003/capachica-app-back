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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotController = exports.OptionalJwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const chatbot_service_1 = require("./chatbot.service");
const send_message_dto_1 = require("./dto/send-message.dto");
const passport_1 = require("@nestjs/passport");
let OptionalJwtAuthGuard = class OptionalJwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    handleRequest(err, user, info, context) {
        if (err || !user) {
            return undefined;
        }
        return user;
    }
};
exports.OptionalJwtAuthGuard = OptionalJwtAuthGuard;
exports.OptionalJwtAuthGuard = OptionalJwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], OptionalJwtAuthGuard);
let ChatbotController = class ChatbotController {
    constructor(chatbotService) {
        this.chatbotService = chatbotService;
    }
    async sendMessage(sendMessageDto, req) {
        var _a;
        if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) {
            return await this.chatbotService.processMessage(req.user.id, sendMessageDto.message);
        }
        else {
            const response = await this.chatbotService.generateResponseOnly(sendMessageDto.message);
            return { response };
        }
    }
    async getChatHistory(req, limit) {
        const limitNumber = limit ? parseInt(limit, 10) : 50;
        return await this.chatbotService.getChatHistory(req.user.id, limitNumber);
    }
    async getChatbotStats() {
        return await this.chatbotService.getChatbotStats();
    }
    async clearChatHistory(req) {
        await this.chatbotService.clearChatHistory(req.user.id);
        return { message: 'Historial de chat eliminado exitosamente' };
    }
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
};
exports.ChatbotController = ChatbotController;
__decorate([
    (0, common_1.Post)('send'),
    (0, common_1.UseGuards)(OptionalJwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Enviar mensaje al chatbot',
        description: 'Envía un mensaje al chatbot. Si el usuario está autenticado, se guarda en la base de datos. Si no, solo se procesa la respuesta.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mensaje procesado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_message_dto_1.SendMessageDto, Object]),
    __metadata("design:returntype", Promise)
], ChatbotController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)('history'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener historial de chat del usuario (solo usuarios autenticados)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Historial obtenido exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Número máximo de mensajes a obtener' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChatbotController.prototype, "getChatHistory", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener estadísticas del chatbot (solo SuperAdmin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estadísticas obtenidas exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No tiene permisos' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatbotController.prototype, "getChatbotStats", null);
__decorate([
    (0, common_1.Delete)('history'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar historial de chat del usuario (solo usuarios autenticados)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Historial eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatbotController.prototype, "clearChatHistory", null);
__decorate([
    (0, common_1.Get)('help'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener información de ayuda del chatbot' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Información de ayuda obtenida exitosamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatbotController.prototype, "getHelpInfo", null);
exports.ChatbotController = ChatbotController = __decorate([
    (0, swagger_1.ApiTags)('chatbot'),
    (0, common_1.Controller)('chatbot'),
    __metadata("design:paramtypes", [chatbot_service_1.ChatbotService])
], ChatbotController);
//# sourceMappingURL=chatbot.controller.js.map