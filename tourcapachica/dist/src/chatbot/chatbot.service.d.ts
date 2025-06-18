import { PrismaService } from '../prisma/prisma.service';
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
export declare class ChatbotService {
    private readonly prisma;
    private readonly logger;
    private genAI;
    private model;
    constructor(prisma: PrismaService);
    processMessage(userId: number, message: string): Promise<ChatMessage>;
    generateResponseOnly(message: string): Promise<string>;
    private generateAIResponse;
    private getContextData;
    private buildPrompt;
    private generateFallbackResponse;
    private saveMessage;
    getChatHistory(userId: number, limit?: number): Promise<ChatMessage[]>;
    getChatbotStats(): Promise<{
        totalMessages: number;
        uniqueUsers: number;
        todayMessages: number;
        averageMessagesPerUser: number;
    }>;
    clearChatHistory(userId: number): Promise<void>;
}
