import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

export const createSupabaseClient = (configService: ConfigService) => {
  const logger = new Logger('SupabaseConfig');
  
  // Obtener todas las variables de entorno disponibles
  const envVars = process.env;
  logger.debug('Available environment variables:');
  Object.keys(envVars).forEach(key => {
    if (key.includes('SUPABASE')) {
      logger.debug(`${key}: ${key === 'SUPABASE_ANON_KEY' ? '***' : envVars[key]}`);
    }
  });

  const supabaseUrl = configService.get<string>('SUPABASE_URL');
  const supabaseKey = configService.get<string>('SUPABASE_ANON_KEY');

  logger.debug(`SUPABASE_URL: ${supabaseUrl}`);
  logger.debug(`SUPABASE_ANON_KEY exists: ${!!supabaseKey}`);

  if (!supabaseUrl || !supabaseKey) {
    logger.error('Missing Supabase environment variables');
    logger.error(`SUPABASE_URL: ${supabaseUrl}`);
    logger.error(`SUPABASE_ANON_KEY exists: ${!!supabaseKey}`);
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseKey);
};