import { corsHeaders } from '../_shared/cors.ts'
import { supabase } from '../_shared/db.ts'

/**
 * Part 3 - open a research plan, see its interviews, each with the plan's research questions
 *
 * method + path:
 * request expects:
 * fetch + response shape:
 *   {
 *
 *   }
 * failures:
 *   -
 *   -
 */
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // TODO

  return new Response('Not implemented', { status: 501, headers: corsHeaders })
})
