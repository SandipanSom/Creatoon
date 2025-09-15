# 🎨 Creatoon - AI-Powered Cartoon Image Generator

<div align="center">
  <img src="https://creatoon.vercel.app/opengraph-image.png" alt="Creatoon" width="600" />
  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SandipanSom/Creatoon)
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Creatoon-blue?style=flat&logo=vercel)](https://creatoon.vercel.app)
</div>

**Creatoon** is a modern, open-source platform that transforms your ideas into stunning cartoon-style illustrations using advanced AI technology. Whether you're a designer, content creator, or just someone who loves cartoons, Creatoon makes it easy to generate unique, high-quality cartoon images with just a few clicks.

## ✨ Features

- 🎨 **AI-Powered Generation**: Create unique cartoon illustrations using Hugging Face models
- 🔍 **Smart Search**: Semantic search through your generated image collection
- 📱 **Responsive Design**: Beautiful, mobile-first interface built with modern web technologies
- ⚡ **Lightning Fast**: Built on Cloudflare Workers for global edge performance
- 🎯 **User-Friendly**: Intuitive interface with example gallery and easy-to-use controls
- 🔄 **Real-time Updates**: Live image generation with progress tracking
- 📥 **Easy Downloads**: One-click image downloads in high quality
- 🌐 **Open Source**: Fully transparent and customizable

## 🚀 Live Demo

Visit **[creatoon.vercel.app](https://creatoon.vercel.app)** to try it out!

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org)** - React framework with App Router
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful, accessible UI components
- **[TypeScript](https://typescriptlang.org)** - Type-safe JavaScript
- **[React Query](https://tanstack.com/query)** - Data fetching and caching

### Backend
- **[Hono](https://hono.dev)** - Fast, lightweight web framework
- **[Cloudflare Workers](https://workers.cloudflare.com)** - Edge computing platform
- **[Drizzle ORM](https://orm.drizzle.team)** - Type-safe database toolkit
- **[LibSQL/Turso](https://turso.tech)** - Edge-optimized SQL database

### AI & Storage
- **[Hugging Face](https://huggingface.co)** - AI model inference
- **[Groq](https://groq.com)** - Fast AI inference for content moderation
- **[Cloudflare R2](https://www.cloudflare.com/products/r2/)** - Object storage

### Development
- **[Turborepo](https://turbo.build/repo)** - Monorepo build system
- **[pnpm](https://pnpm.io)** - Fast, disk space efficient package manager
- **[Biome](https://biomejs.dev)** - Fast formatter and linter

## 📦 Project Structure

```
creatoon/
├── web/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/         # App Router pages and layouts
│   │   ├── components/  # Reusable UI components
│   │   ├── lib/         # Utilities and stores
│   │   └── styles/      # Global styles
│   └── public/          # Static assets
├── workers/             # Cloudflare Workers backend
│   ├── src/
│   │   ├── routes/      # API route handlers
│   │   ├── lib/         # Utility functions
│   │   └── db/          # Database schema and migrations
│   └── wrangler.toml    # Cloudflare Workers configuration
└── package.json         # Root package configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **pnpm** (recommended) or npm
- **Cloudflare account** (for backend deployment)
- **Vercel account** (for frontend deployment)

### 1. Clone the Repository

```bash
git clone https://github.com/SandipanSom/Creatoon.git
cd Creatoon
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

#### Frontend (.env.local)
```bash
# Copy the example file
cp web/.env.example web/.env.local

# Add your environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

#### Backend (.dev.vars)
```bash
# Copy the example file
cp workers/.dev.vars.example workers/.dev.vars

# Add your API keys
DATABASE_URL=your_turso_database_url
DATABASE_AUTH_TOKEN=your_turso_auth_token
HUGGINGFACE_KEY=your_huggingface_token
GROQ_API_KEY=your_groq_api_key
R2_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
R2_BUCKET_NAME=your_r2_bucket_name
NEXT_APP_URL=http://localhost:3000
```

### 4. Database Setup

```bash
cd workers
pnpm db:push
```

### 5. Start Development Servers

```bash
# Start both frontend and backend
pnpm dev

# Or start individually
pnpm dev:web      # Frontend on http://localhost:3000
pnpm dev:workers  # Backend on http://localhost:5000
```

## 🌐 Deployment

### Frontend (Vercel)

1. **Connect Repository**: Import your GitHub repo in Vercel
2. **Configure Settings**:
   - Root Directory: `web`
   - Framework Preset: `Next.js`
   - Install Command: `pnpm install --frozen-lockfile`
   - Build Command: `pnpm --filter=web build`
   - Output Directory: `.next`
3. **Environment Variables**:
   - `NEXT_PUBLIC_APP_URL`: Your Vercel URL
   - `NEXT_PUBLIC_SERVER_URL`: Your Workers URL
4. **Deploy**: Click deploy and you're live!

### Backend (Cloudflare Workers)

1. **Install Wrangler**:
   ```bash
   npm i -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Create KV Namespace**:
   ```bash
   wrangler kv namespace create RATE_LIMITER
   ```

4. **Set Secrets**:
   ```bash
   wrangler secret put DATABASE_URL
   wrangler secret put HUGGINGFACE_KEY
   # ... add all other secrets
   ```

5. **Deploy**:
   ```bash
   cd workers
   wrangler deploy
   ```

## 🔧 Configuration

### Required Services

1. **Turso Database**: Create a free database at [turso.tech](https://turso.tech)
2. **Hugging Face**: Get an API token from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
3. **Groq**: Create an API key at [console.groq.com](https://console.groq.com)
4. **Cloudflare R2**: Set up a bucket in your Cloudflare dashboard

### Optional Customizations

- **Custom Domain**: Add your domain in Vercel settings
- **Image Storage**: Update R2 bucket settings for custom domains
- **Rate Limiting**: Adjust limits in `workers/src/middlewares.ts`
- **AI Models**: Switch models in `workers/src/routes/generate.ts`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Use conventional commit messages

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Hugging Face](https://huggingface.co)** for providing amazing AI models
- **[Cloudflare](https://cloudflare.com)** for the Workers platform
- **[Vercel](https://vercel.com)** for seamless deployment
- **[shadcn/ui](https://ui.shadcn.com)** for beautiful UI components

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/SandipanSom/Creatoon/issues)
- **Discussions**: [GitHub Discussions](https://github.com/SandipanSom/Creatoon/discussions)
- **Email**: [Contact](mailto:your-email@example.com)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/SandipanSom">Sandipan</a>
  
  <br />
  
  **⭐ Star this repo if you found it helpful!**
</div>
