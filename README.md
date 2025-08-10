# CLOUDSITE ⚡

A modern, serverless website built with Astro and deployed on Cloudflare Workers with Matrix-style falling letters background.

## 🌟 Features

- **Matrix Rain Background** - Authentic falling Japanese characters animation
- **Astro Static Site** - Optimal performance with static generation
- **Cloudflare Workers** - Edge deployment across 300+ cities worldwide
- **TypeScript** - Full type safety and modern development experience
- **Tailwind CSS** - Utility-first styling with Matrix theme
- **React Components** - Interactive islands where needed
- **API Routes** - Built-in serverless API endpoints via Workers

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) with Static Site Generation
- **Runtime**: Cloudflare Workers
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React (for interactive islands)
- **Deployment**: Cloudflare Workers with KV Asset Handler
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
cloudsite/
├── src/
│   ├── index.ts               # Cloudflare Workers entry point
│   ├── components/
│   │   └── (React components) # Interactive islands
│   ├── layouts/
│   │   └── Layout.astro       # Base layout template
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   └── api/               # API endpoints (handled by Workers)
│   └── env.d.ts              # TypeScript environment types
├── public/                    # Static assets
├── dist/                      # Build output (served by Workers)
├── astro.config.mjs          # Astro configuration
├── wrangler.toml             # Cloudflare Workers configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Cloudflare account (for deployment)
- Wrangler CLI (installed automatically)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ChaosTheoryVentures/my-cloudflare-website.git
   cd my-cloudflare-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321 to see your site.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌐 API Endpoints

All API endpoints are handled by the Cloudflare Worker:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/hello` | GET | Returns a greeting message |
| `/api/info` | GET | Returns platform and location information |
| `/api/echo` | POST | Echoes back the request body |

### Example API Calls

```bash
# Get hello message
curl https://your-worker.your-subdomain.workers.dev/api/hello

# Get platform info
curl https://your-worker.your-subdomain.workers.dev/api/info

# Echo message
curl -X POST https://your-worker.your-subdomain.workers.dev/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello CLOUDSITE!"}'
```

## ⚡ Cloudflare Workers Architecture

This project uses a hybrid approach:

- **Static Assets**: Astro builds static HTML, CSS, and JS files
- **Workers Runtime**: Serves static files via KV Asset Handler
- **API Routes**: Handled directly by the Worker (not Astro)
- **SPA Routing**: Worker handles client-side routing fallbacks

### Asset Handling

The Worker uses `@cloudflare/kv-asset-handler` to serve static assets efficiently:
- Static files are stored in Cloudflare's edge cache
- API routes are handled by Worker logic
- SPA routing fallback to `index.html`

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

1. **Set up secrets in GitHub**:
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

2. **Push to main branch**:
   ```bash
   git push origin main
   ```
   
   The GitHub Action will automatically:
   - Install dependencies
   - Build the Astro site
   - Deploy to Cloudflare Workers

### Manual Deployment

1. **Authenticate with Cloudflare**:
   ```bash
   npx wrangler login
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare Workers**:
   ```bash
   npm run deploy
   # or
   npx wrangler deploy
   ```

## 🔧 Configuration

### Wrangler Config (`wrangler.toml`)

```toml
name = "my-cloudflare-website"
main = "src/index.ts"
compatibility_date = "2025-02-11"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = "./dist"
binding = "ASSETS"

[observability]
enabled = true
head_sampling_rate = 1
```

### Astro Config (`astro.config.mjs`)

- **Output**: `static` (generates static files)
- **Integrations**: React, Tailwind CSS
- **Build**: Configured for Workers asset structure

### Custom Domain (Optional)

To use a custom domain:

1. **Update `wrangler.toml`**:
   ```toml
   [[routes]]
   pattern = "*"
   zone_name = "your-domain.com"
   custom_domain = true
   ```

2. **Deploy**:
   ```bash
   npx wrangler deploy
   ```

## 📈 Performance

- **Global Edge Network**: Deployed to 300+ Cloudflare locations
- **KV Asset Caching**: Static assets cached at the edge
- **Zero Cold Starts**: Workers start in <1ms
- **Automatic Scaling**: Handles millions of requests
- **Bundle Size**: Minimal JavaScript thanks to Astro

## 🛠️ Development

### Adding New Features

1. **Static Pages**: Add `.astro` files in `src/pages/`
2. **API Endpoints**: Add logic to `src/index.ts` API handler
3. **React Components**: Add `.tsx` files in `src/components/`
4. **Styling**: Use Tailwind classes or add to `tailwind.config.mjs`

### Environment Variables

For local development, create a `.dev.vars` file:
```
API_KEY=your-api-key
DATABASE_URL=your-database-url
```

For production, use `wrangler secret`:
```bash
npx wrangler secret put API_KEY
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Deployment Fails**:
   ```bash
   # Check Wrangler authentication
   npx wrangler whoami
   
   # Re-authenticate if needed
   npx wrangler login
   ```

3. **API Routes Not Working**:
   - Check `src/index.ts` for route definitions
   - Verify CORS headers are set
   - Test with `curl` or Postman

### Logs

View real-time logs:
```bash
npx wrangler tail
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build) - The web framework for content-driven websites
- Deployed on [Cloudflare Workers](https://workers.cloudflare.com) - Serverless execution environment
- Asset handling via [KV Asset Handler](https://github.com/cloudflare/kv-asset-handler)
- Styled with [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Matrix effect inspired by the iconic movie scene

---

**Live Demo**: [https://my-cloudflare-website.your-subdomain.workers.dev](https://my-cloudflare-website.your-subdomain.workers.dev)

⭐ Star this repo if you find it helpful!