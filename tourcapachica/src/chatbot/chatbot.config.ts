export interface ChatbotConfig {
  geminiApiKey: string;
  model: string;
  temperature: number;
  maxTokens: number;
}

export const chatbotConfig: ChatbotConfig = {
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
  temperature: parseFloat(process.env.GEMINI_TEMPERATURE || '0.7'),
  maxTokens: parseInt(process.env.GEMINI_MAX_TOKENS || '1000'),
};

export function validateChatbotConfig(): void {
  if (!chatbotConfig.geminiApiKey) {
    console.warn('⚠️  GEMINI_API_KEY no está configurada. El chatbot usará respuestas predefinidas.');
  }
} 