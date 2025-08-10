// src/index.ts
interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname.startsWith("/api/")) {
      return handleApiRequest(url.pathname, request);
    }

    // Serve static assets for everything else
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

// API request handler
async function handleApiRequest(pathname: string, request: Request): Promise<Response> {
  // Set CORS headers for API responses
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // Route API endpoints
  switch (pathname) {
    case '/api/hello':
      return Response.json(
        { 
          message: 'Hello from Cloudflare Workers!',
          timestamp: new Date().toISOString()
        },
        { headers }
      );
    
    case '/api/info':
      return Response.json(
        {
          platform: 'Cloudflare Workers',
          region: request.cf?.colo || 'unknown',
          country: request.cf?.country || 'unknown',
          features: [
            'Global CDN',
            'Edge Computing',
            'Serverless',
            'Auto-scaling'
          ]
        },
        { headers }
      );
    
    case '/api/echo':
      if (request.method === 'POST') {
        try {
          const body = await request.json();
          return Response.json(
            { 
              echo: body,
              processed_at: new Date().toISOString()
            },
            { headers }
          );
        } catch (error) {
          return Response.json(
            { error: 'Invalid JSON body' },
            { status: 400, headers }
          );
        }
      }
      return Response.json(
        { error: 'Method not allowed' },
        { status: 405, headers }
      );
    
    default:
      return Response.json(
        { error: 'API endpoint not found' },
        { status: 404, headers }
      );
  }
}