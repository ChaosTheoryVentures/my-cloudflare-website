# My Cloudflare Website 🚀

A modern, serverless website deployed on Cloudflare Workers with automatic CI/CD via GitHub Actions.

## 🌟 Features

- **Lightning-fast edge deployment** - Runs on Cloudflare's global network
- **Beautiful, responsive design** - Modern UI with smooth animations
- **Live API endpoints** - RESTful API with JSON responses
- **Automatic CI/CD** - Push to deploy with GitHub Actions
- **Global CDN distribution** - Served from 300+ cities worldwide
- **DDoS protection** - Built-in security from Cloudflare
- **Serverless scaling** - Automatically scales with traffic

## 🛠️ Tech Stack

- **Runtime**: Cloudflare Workers
- **Language**: TypeScript
- **Styling**: Vanilla CSS with modern features
- **CI/CD**: GitHub Actions
- **Deployment**: Wrangler CLI

## 📁 Project Structure

```
my-cloudflare-website/
├── src/
│   └── index.ts          # Worker code with API endpoints
├── public/
│   └── index.html        # Website frontend
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── wrangler.jsonc        # Cloudflare configuration
├── package.json          # Node.js dependencies
├── .gitignore           # Git ignore file
└── README.md            # This file
```

## 🚀 Quick Start

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

3. **Run locally**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:8787 to see your site.

### Manual Deployment

1. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🔧 Automatic Deployment Setup

### Prerequisites

1. **Cloudflare API Token**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Create a token with `Edit Workers` permissions
   - Copy the token

2. **Cloudflare Account ID**:
   - Find it in your [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Or use: `d660a8379c982078ccb63b428f3d1aa4`

### GitHub Secrets Configuration

1. Go to your repository settings: `Settings > Secrets and variables > Actions`

2. Add these secrets:
   - **Name**: `CLOUDFLARE_API_TOKEN`  
     **Value**: Your Cloudflare API token
   
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`  
     **Value**: `d660a8379c982078ccb63b428f3d1aa4`

3. Once configured, every push to `main` will automatically deploy!

## 📝 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/hello` | GET | Returns a greeting message |
| `/api/info` | GET | Returns platform information |
| `/api/echo` | POST | Echoes back the request body |

### Example API Calls

```bash
# Get hello message
curl https://my-cloudflare-website.workers.dev/api/hello

# Get platform info
curl https://my-cloudflare-website.workers.dev/api/info

# Echo message
curl -X POST https://my-cloudflare-website.workers.dev/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello World"}'
```

## 🎨 Customization

### Changing Colors

Edit the gradient in `public/index.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding API Endpoints

Add new cases in `src/index.ts`:
```typescript
case '/api/your-endpoint':
  return Response.json(
    { your: 'data' },
    { headers }
  );
```

### Modifying Content

Update the HTML in `public/index.html` to change text, add sections, or modify the layout.

## 🌐 Live Demo

Once deployed, your site will be available at:
- **Production**: `https://my-cloudflare-website.workers.dev`
- **Custom domain**: Configure in Cloudflare Dashboard

## 📈 Monitoring

- **Logs**: `npm run tail` to stream live logs
- **Analytics**: View in [Cloudflare Dashboard](https://dash.cloudflare.com)
- **Errors**: Check GitHub Actions for deployment issues

## 🔐 Security

- HTTPS enabled by default
- DDoS protection from Cloudflare
- CORS headers configured
- No exposed secrets or credentials

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Cloudflare Workers](https://workers.cloudflare.com)
- Deployed via [GitHub Actions](https://github.com/features/actions)
- Powered by [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

## 💡 Next Steps

- [ ] Add a database with Cloudflare D1
- [ ] Implement authentication with Cloudflare Access
- [ ] Add key-value storage with Workers KV
- [ ] Set up a custom domain
- [ ] Add more API endpoints
- [ ] Implement caching strategies
- [ ] Add unit tests
- [ ] Set up staging environment

---

**Need help?** Open an issue or reach out!

⭐ Star this repo if you find it helpful!