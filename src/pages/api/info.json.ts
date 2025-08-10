import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  // Get client info from Cloudflare headers
  const cf = request.cf as any;
  
  return new Response(
    JSON.stringify({
      platform: 'Cloudflare Workers + Astro',
      region: cf?.colo || 'unknown',
      country: cf?.country || 'unknown',
      city: cf?.city || 'unknown',
      features: [
        'Global CDN',
        'Edge Computing', 
        'Serverless',
        'Auto-scaling',
        'Astro Islands'
      ],
      timestamp: new Date().toISOString()
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