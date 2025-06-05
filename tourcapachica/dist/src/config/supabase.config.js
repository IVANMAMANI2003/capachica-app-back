"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupabaseClient = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const createSupabaseClient = (configService) => {
    const envVars = process.env;
    console.log('=== Environment Variables Debug ===');
    console.log('All environment variables:');
    Object.keys(envVars).forEach(key => {
        console.log(`${key}: ${key.includes('KEY') ? '***' : envVars[key]}`);
    });
    const supabaseUrl = configService.get('SUPABASE_URL');
    const supabaseKey = configService.get('SUPABASE_ANON_KEY');
    console.log('=== Supabase Configuration ===');
    console.log(`SUPABASE_URL: ${supabaseUrl || 'NOT FOUND'}`);
    console.log(`SUPABASE_ANON_KEY exists: ${!!supabaseKey}`);
    console.log(`SUPABASE_ANON_KEY length: ${supabaseKey ? supabaseKey.length : 0}`);
    if (!supabaseUrl || !supabaseKey) {
        console.error('=== Missing Supabase Variables ===');
        console.error(`SUPABASE_URL: ${supabaseUrl || 'NOT FOUND'}`);
        console.error(`SUPABASE_ANON_KEY exists: ${!!supabaseKey}`);
        console.error(`SUPABASE_ANON_KEY length: ${supabaseKey ? supabaseKey.length : 0}`);
        throw new Error('Missing Supabase environment variables');
    }
    return (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
};
exports.createSupabaseClient = createSupabaseClient;
//# sourceMappingURL=supabase.config.js.map