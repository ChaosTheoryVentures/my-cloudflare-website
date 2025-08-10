import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({
      message: 'Hello from Cloudflare Workers + Astro!',
      timestamp: new Date().toISOString(),
      platform: 'Cloudflare Pages',
      powered_by: 'Astro + Cloudflare Workers'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    }
  );
};