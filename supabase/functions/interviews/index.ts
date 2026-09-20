import { corsHeaders } from '../_shared/cors.ts'
import { supabase } from '../_shared/db.ts'

/**
 * Part 2 - mark an interview as completed from the Interview List page
 *
 * method + path:
 * request (params / body):
 * server steps:
 *   1.
 *   2.
 *   3.
 * success:
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
