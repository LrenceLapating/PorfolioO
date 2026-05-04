# 🚀 Marc Laurence A. Lapating - Portfolio

> Tech Support Specialist & Vibe Coder

A modern, interactive portfolio showcasing my expertise in tech support, AI automation, and vibe coding approach.

## ✨ Features

- 🎨 **Dark/Light Mode** - Seamless theme switching with persistence
- 🤖 **AI Chatbot** - Powered by Google Gemini with local fallback
- 🖼️ **Project Showcase** - Interactive project cards with live links
- 🎭 **3D Scene** - Spline 3D integration for visual appeal
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js 15
- 🎯 **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D:** Spline
- **AI:** Google Gemini API
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/LrenceLapating/your-repo-name.git

# Navigate to project
cd your-repo-name

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Gemini API key to .env.local
GEMINI_API_KEY=your_api_key_here

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from: https://aistudio.google.com/apikey

## 🚀 Deployment

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed deployment instructions.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/LrenceLapating/your-repo-name)

1. Click the button above
2. Add `GEMINI_API_KEY` environment variable
3. Deploy!

## 📂 Project Structure

```
├── public/
│   └── projects/          # Project images
├── src/
│   ├── app/
│   │   ├── api/chat/      # AI chatbot API
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   ├── hero-section.tsx
│   │   └── providers.tsx
│   ├── contexts/
│   │   └── theme-context.tsx
│   └── lib/
│       └── utils.ts
├── .env.local             # Environment variables (create this)
├── .env.example           # Example env file
└── vercel.json            # Vercel configuration
```

## 🎯 Features Breakdown

### AI Chatbot
- Powered by Google Gemini 2.5 Flash
- Local fallback when API is unavailable
- Answers questions about education, experience, skills, projects
- Shows interactive project cards with images
- Supports quick action buttons

### Theme System
- Dark mode (default)
- Light mode
- Persistent across sessions
- Smooth transitions
- System-wide theme support

### Project Showcase
- 4 featured projects with live links
- Clickable project images
- Hover animations
- Responsive grid layout

## 📱 Responsive Design

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components are fully responsive and optimized for each breakpoint.

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🌐 Live Demo

Visit: [your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)

## 📞 Contact

- **Email:** laurencelapating@gmail.com
- **Phone:** 09082293023
- **LinkedIn:** [Marc Laurence Lapating](https://linkedin.com/in/marc-laurence-lapating-000265319/)
- **GitHub:** [LrenceLapating](https://github.com/LrenceLapating)
- **Facebook:** [Profile](https://facebook.com/profile.php?id=61575056012987)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- Google for Gemini API
- Spline for 3D tools
- All open-source contributors

---

**Built with ❤️ by Marc Laurence A. Lapating**

*Tech Support Specialist & Vibe Coder*
