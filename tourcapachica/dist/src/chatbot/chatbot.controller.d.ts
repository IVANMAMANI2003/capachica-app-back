import { ExecutionContext } from '@nestjs/common';
import { ChatbotService, ChatMessage } from './chatbot.service';
import { SendMessageDto } from './dto/send-message.dto';
declare const OptionalJwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class OptionalJwtAuthGuard extends OptionalJwtAuthGuard_base {
    handleRequest(err: any, user: any, info: any, context: ExecutionContext): any;
}
interface RequestWithUser extends Request {
    user?: {
        id: number;
    };
}
export declare class ChatbotController {
    private readonly chatbotService;
    constructor(chatbotService: ChatbotService);
    sendMessage(sendMessageDto: SendMessageDto, req: RequestWithUser): Promise<ChatMessage | {
        response: string;
    }>;
    getChatHistory(req: RequestWithUser, limit?: string): Promise<ChatMessage[]>;
    getChatbotStats(): Promise<{
        totalMessages: number;
        uniqueUsers: number;
        todayMessages: number;
        averageMessagesPerUser: number;
    }>;
    clearChatHistory(req: RequestWithUser): Promise<{
        message: string;
    }>;
    getHelpInfo(): {
        message: string;
        capabilities: string[];
        examples: string[];
        contact: {
            whatsapp: string;
            email: string;
            phone: string;
        };
        note: string;
    };
}
export {};
