"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatbotConfig = void 0;
exports.validateChatbotConfig = validateChatbotConfig;
exports.chatbotConfig = {
    geminiApiKey: process.env.GEMINI_API_KEY || '',
    model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
    temperature: parseFloat(process.env.GEMINI_TEMPERATURE || '0.7'),
    maxTokens: parseInt(process.env.GEMINI_MAX_TOKENS || '1000'),
};
function validateChatbotConfig() {
    if (!exports.chatbotConfig.geminiApiKey) {
        console.warn('⚠️  GEMINI_API_KEY no está configurada. El chatbot usará respuestas predefinidas.');
    }
}
//# sourceMappingURL=chatbot.config.js.map