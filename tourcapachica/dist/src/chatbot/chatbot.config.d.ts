export interface ChatbotConfig {
    geminiApiKey: string;
    model: string;
    temperature: number;
    maxTokens: number;
}
export declare const chatbotConfig: ChatbotConfig;
export declare function validateChatbotConfig(): void;
