import { corsHeaders } from './cors.ts'

export function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

export function text(message: string, status: number) {
  return new Response(message, { status, headers: corsHeaders })
}

// /functions/v1/<fn>/<id> -> id, or null if there is nothing after the function name
export function idFromPath(req: Request, fn: string) {
  const parts = new URL(req.url).pathname.split('/').filter(Boolean)
  const i = parts.indexOf(fn)
  return i >= 0 && parts[i + 1] ? parts[i + 1] : null
}
