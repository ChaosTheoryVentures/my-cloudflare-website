// src/index.ts - Cloudflare Workers entry point
import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

interface Env {
  __STATIC_CONTENT: KVNamespace;
  __STATIC_CONTENT_MANIFEST: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname.startsWith('/api/')) {
      return handleApiRequest(url.pathname, request);
    }

    // Handle static assets
    try {
      // Customize asset handling for SPA routing
      const options = {
        mapRequestToAsset: (req: Request) => {
          const url = new URL(req.url);
          // For SPA: serve index.html for all non-asset routes
          if (!url.pathname.includes('.') && url.pathname !== '/') {
            url.pathname = '/index.html';
          }
          return mapRequestToAsset(new Request(url.toString(), req));
        },
      };

      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
          ...options,
        }
      );
    } catch (e) {
      // Fallback to index.html for SPA
      try {
        const notFoundResponse = await getAssetFromKV(
          {
            request: new Request(`${url.origin}/index.html`, request),
            waitUntil: ctx.waitUntil.bind(ctx),
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
          }
        );
        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 200,
        });
      } catch (e) {
        return new Response('Not Found', { status: 404 });
      }
    }
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
    case '/api/hello.json':
    case '/api/hello':
      return Response.json(
        {
          message: 'Hello from Cloudflare Workers!',
          timestamp: new Date().toISOString(),
          platform: 'Cloudflare Workers',
          powered_by: 'Astro + Cloudflare Workers'
        },
        { headers }
      );

    case '/api/info.json':
    case '/api/info':
      return Response.json(
        {
          platform: 'Cloudflare Workers',
          region: request.cf?.colo || 'unknown',
          country: request.cf?.country || 'unknown',
          city: request.cf?.city || 'unknown',
          features: [
            'Global CDN',
            'Edge Computing',
            'Serverless',
            'Auto-scaling',
            'Static Assets'
          ],
          timestamp: new Date().toISOString()
        },
        { headers }
      );

    case '/api/echo.json':
    case '/api/echo':
      if (request.method === 'POST') {
        try {
          const body = await request.json();
          return Response.json(
            {
              echo: body,
              processed_at: new Date().toISOString(),
              powered_by: 'Cloudflare Workers'
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