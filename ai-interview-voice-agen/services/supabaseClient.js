import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonkey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseAnonkey ? 'Found' : 'Missing');

if (!supabaseUrl || !supabaseAnonkey) {
  throw new Error(`Missing Supabase environment variables:
    URL: ${supabaseUrl ? 'Found' : 'Missing'}
    Key: ${supabaseAnonkey ? 'Found' : 'Missing'}
  `);
}

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonkey,
)