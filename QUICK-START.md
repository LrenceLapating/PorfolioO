# Quick Start Guide

## 🚀 Deploy in 5 Minutes

### Step 1: Update URLs (2 min)
Replace `https://your-domain.com` in these files:
- `src/app/layout.tsx` (line 28)
- `src/app/sitemap.ts` (line 4)
- `src/app/robots.ts` (line 4)

### Step 2: Test Build (1 min)
```bash
npm run build
```
✅ Should complete without errors

### Step 3: Deploy to Vercel (2 min)
```bash
# Option 1: Use Vercel CLI
npm install -g vercel
vercel

# Option 2: Use GitHub
git push origin main
# Then connect repo on vercel.com
```

### Step 4: Add Environment Variable
In Vercel dashboard, add:
- `GEMINI_API_KEY` = your_api_key

### Step 5: Done! 🎉
Your portfolio is live!

---

## 📋 Optional: Create Assets

### Favicon (5 min)
Use [favicon.io](https://favicon.io) to generate:
- `favicon.ico`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

Save to `public/` folder

### Open Graph Image (5 min)
Create 1200x630px image with:
- Your name
- Title: "Tech Support & Vibe Coder"
- Background matching your brand

Save as `public/og-image.png`

---

## 🔧 Common Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Lint code
npm run lint

# Clear cache
rm -rf .next
```

---

## ✅ Pre-Deploy Checklist

- [ ] URLs updated
- [ ] Build succeeds
- [ ] All pages load
- [ ] Forms work
- [ ] Links work
- [ ] Mobile responsive

---

## 📊 After Deploy

1. Visit your site
2. Test all features
3. Run Lighthouse audit
4. Share on social media!

---

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Images not loading?**
- Check files exist in `public/projects/`
- Verify image paths

**3D robot not showing?**
- Check internet connection
- Verify Spline URL

**Chatbot not working?**
- Verify `GEMINI_API_KEY` is set
- Check API route at `/api/chat`

---

## 📚 Full Documentation

- `OPTIMIZATION-SUMMARY.md` - What was optimized
- `OPTIMIZATION-GUIDE.md` - Technical details
- `DEPLOYMENT-CHECKLIST.md` - Complete checklist
- `DEPLOYMENT-GUIDE.md` - Deployment instructions

---

## 🎯 Performance Achieved

- ✅ 171KB initial bundle (was 183KB)
- ✅ Code splitting enabled
- ✅ Lazy loading implemented
- ✅ SEO optimized
- ✅ Accessibility compliant
- ✅ Mobile responsive

---

**You're ready to deploy! 🚀**
