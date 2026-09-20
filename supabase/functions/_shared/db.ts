import { createClient } from 'npm:@supabase/supabase-js@2'

export const supabase = createClient(
  Deno.env.get('DB_URL')!,
  Deno.env.get('DB_ANON_KEY')!,
)
