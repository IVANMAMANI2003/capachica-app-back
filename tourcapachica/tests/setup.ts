import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Cargar variables de entorno de prueba
config({ path: '.env.test' });

// Verificar que las variables de entorno necesarias estén presentes
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error('Missing Supabase environment variables');
}

if (!process.env.TEST_SUPABASE_DATABASE_URL) {
  throw new Error('¡No se encontró la variable TEST_SUPABASE_DATABASE_URL! Asegúrate de usar .env.test');
}

export function getSupabaseClient() {
  return createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
  );
}