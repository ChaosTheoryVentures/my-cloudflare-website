# CLOUDSITE ⚡

A modern, serverless website built with Astro and deployed on Cloudflare Workers with Matrix-style falling letters background.

## 🌟 Features

- **Matrix Rain Background** - Authentic falling Japanese characters animation
- **Astro Islands Architecture** - Optimal performance with selective hydration
- **Cloudflare Workers** - Edge deployment across 300+ cities worldwide
- **TypeScript** - Full type safety and modern development experience
- **Tailwind CSS** - Utility-first styling with Matrix theme
- **React Components** - Interactive islands where needed
- **API Routes** - Built-in serverless API endpoints

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) with Islands Architecture
- **Runtime**: Cloudflare Workers
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React (for interactive islands)
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
cloudsite/
├── src/
│   ├── components/
│   │   ├── MatrixRain.tsx      # Matrix falling letters (React island)
│   │   ├── ApiDemo.tsx         # Interactive API demo (React island)
│   │   ├── Header.astro        # Static header component
│   │   ├── Hero.astro          # Static hero section
│   │   ├── Features.astro      # Static features grid
│   │   └── Footer.astro        # Static footer
│   ├── layouts/
│   │   └── Layout.astro        # Base layout template
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   └── api/                # API endpoints
│   │       ├── hello.json.ts   # Hello API endpoint
│   │       ├── info.json.ts    # Platform info endpoint
│   │       └── echo.json.ts    # Echo API endpoint
│   └── env.d.ts               # TypeScript environment types
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Cloudflare account (for deployment)

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321 to see your site.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/hello.json` | GET | Returns a greeting message |
| `/api/info.json` | GET | Returns platform and location information |
| `/api/echo.json` | POST | Echoes back the request body |

### Example API Calls

```bash
# Get hello message
curl https://cloudsite.pages.dev/api/hello.json

# Get platform info
curl https://cloudsite.pages.dev/api/info.json

# Echo message
curl -X POST https://cloudsite.pages.dev/api/echo.json \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello CLOUDSITE!"}'
```

## ⚡ Astro Islands

This project leverages Astro's Islands Architecture for optimal performance:

- **Static Components** (Header, Hero, Features, Footer) - Zero JavaScript sent to browser
- **Interactive Islands** (MatrixRain, ApiDemo) - Hydrated only where needed with `client:load`

### Adding New Islands

To create a new interactive component:

1. Create a React component in `src/components/`
2. Add `client:load` (or other hydration directive) when using it:
   ```astro
   <MyComponent client:load />
   ```

## 🎨 Matrix Theme

The Matrix theme includes:

- **Colors**: Custom green palette (`matrix-green-*`)
- **Typography**: Courier New monospace font
- **Effects**: Glow effects, glassmorphism, and smooth animations
- **Background**: Authentic Matrix rain with Japanese characters

### Customizing the Theme

Edit `tailwind.config.mjs` to modify colors, animations, and other design tokens.

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages > Create a project
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set build output directory: `dist`

2. **Environment Variables** (if needed):
   - Add any required environment variables in Cloudflare Pages settings

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy with Wrangler**:
   ```bash
   npx wrangler pages deploy dist
   ```

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

- **Output**: `server` (for Cloudflare Workers)
- **Adapter**: `@astrojs/cloudflare`
- **Integrations**: React, Tailwind CSS

### Cloudflare Integration

The site is optimized for Cloudflare Workers with:
- Edge-side rendering
- Global CDN distribution
- Automatic HTTPS
- DDoS protection

## 📈 Performance

- **Lighthouse Score**: Near-perfect scores across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript thanks to Astro Islands
- **Edge Rendering**: Sub-50ms response times globally

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
- Styled with [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Matrix effect inspired by the iconic movie scene

---

**Live Demo**: [https://cloudsite.pages.dev](https://cloudsite.pages.dev)

⭐ Star this repo if you find it helpful!