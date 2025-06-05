import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

export const createSupabaseClient = (configService: ConfigService) => {
  // Obtener todas las variables de entorno disponibles
  const envVars = process.env;
  console.log('=== Environment Variables Debug ===');
  console.log('All environment variables:');
  Object.keys(envVars).forEach(key => {
    console.log(`${key}: ${key.includes('KEY') ? '***' : envVars[key]}`);
  });

  const supabaseUrl = configService.get<string>('SUPABASE_URL');
  const supabaseKey = configService.get<string>('SUPABASE_ANON_KEY');

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

  return createClient(supabaseUrl, supabaseKey);
};