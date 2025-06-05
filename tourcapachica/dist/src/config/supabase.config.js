"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupabaseClient = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const common_1 = require("@nestjs/common");
const createSupabaseClient = (configService) => {
    const logger = new common_1.Logger('SupabaseConfig');
    const envVars = process.env;
    logger.debug('Available environment variables:');
    Object.keys(envVars).forEach(key => {
        if (key.includes('SUPABASE')) {
            logger.debug(`${key}: ${key === 'SUPABASE_ANON_KEY' ? '***' : envVars[key]}`);
        }
    });
    const supabaseUrl = configService.get('SUPABASE_URL');
    const supabaseKey = configService.get('SUPABASE_ANON_KEY');
    logger.debug(`SUPABASE_URL: ${supabaseUrl}`);
    logger.debug(`SUPABASE_ANON_KEY exists: ${!!supabaseKey}`);
    if (!supabaseUrl || !supabaseKey) {
        logger.error('Missing Supabase environment variables');
        logger.error(`SUPABASE_URL: ${supabaseUrl}`);
        logger.error(`SUPABASE_ANON_KEY exists: ${!!supabaseKey}`);
        throw new Error('Missing Supabase environment variables');
    }
    return (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
};
exports.createSupabaseClient = createSupabaseClient;
//# sourceMappingURL=supabase.config.js.map