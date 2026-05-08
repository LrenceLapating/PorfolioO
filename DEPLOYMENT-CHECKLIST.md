# Pre-Deployment Checklist

## 🎯 Critical (Must Do Before Deploy)

### 1. Update Domain URLs
- [ ] `src/app/layout.tsx` - Update `metadataBase` URL
- [ ] `src/app/sitemap.ts` - Update `baseUrl`
- [ ] `src/app/robots.ts` - Update `baseUrl`

### 2. Create Required Assets
- [ ] `public/favicon.ico` (32x32px)
- [ ] `public/apple-touch-icon.png` (180x180px)
- [ ] `public/icon-192.png` (192x192px)
- [ ] `public/icon-512.png` (512x512px)
- [ ] `public/og-image.png` (1200x630px for social sharing)

### 3. Environment Variables
- [ ] Verify `GEMINI_API_KEY` is set in production
- [ ] Add `NEXT_PUBLIC_SITE_URL` if needed

### 4. Test Build
```bash
npm run build
npm run start
```
- [ ] Build completes without errors
- [ ] All pages load correctly
- [ ] 3D robot displays properly
- [ ] Forms work (contact form)
- [ ] Navigation works smoothly
- [ ] Theme toggle works
- [ ] Chatbot functions correctly

---

## ✅ Recommended (Should Do)

### 5. SEO Setup
- [ ] Add Google Search Console verification code
- [ ] Set up Google Analytics (optional)
- [ ] Verify Open Graph image displays correctly
- [ ] Test social media previews (Twitter, LinkedIn, Facebook)

### 6. Performance Testing
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Test on mobile devices
- [ ] Check loading speed
- [ ] Verify images load properly
- [ ] Test on slow 3G connection

### 7. Accessibility Testing
- [ ] Test keyboard navigation
- [ ] Verify screen reader compatibility
- [ ] Check color contrast ratios
- [ ] Test with reduced motion preference

### 8. Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (desktop & mobile)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment Steps

### For Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Portfolio optimizations"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `GEMINI_API_KEY`
   - Deploy

3. **Post-Deployment**
   - [ ] Verify site loads at production URL
   - [ ] Test all functionality
   - [ ] Update domain in config files if using custom domain
   - [ ] Submit sitemap to Google Search Console
   - [ ] Set up analytics

### For Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### Custom Server
```bash
npm run build
npm run start
# Use PM2 or similar for process management
```

---

## 📊 Post-Deployment Monitoring

### Week 1
- [ ] Monitor error logs
- [ ] Check Core Web Vitals
- [ ] Review analytics data
- [ ] Test on various devices
- [ ] Gather user feedback

### Monthly
- [ ] Run Lighthouse audit
- [ ] Check for broken links
- [ ] Review performance metrics
- [ ] Update dependencies if needed
- [ ] Backup data

---

## 🔧 Quick Fixes

### If Build Fails
1. Clear cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check for TypeScript errors: `npm run lint`

### If Images Don't Load
1. Verify images exist in `public/projects/`
2. Check image paths in components
3. Ensure Next.js Image component is used

### If 3D Robot Doesn't Load
1. Check Spline URL is correct
2. Verify internet connection
3. Check browser console for errors
4. Ensure dynamic import is working

### If Chatbot Fails
1. Verify `GEMINI_API_KEY` is set
2. Check API route at `/api/chat`
3. Review browser console for errors
4. Test API key validity

---

## 📱 Mobile-Specific Checks

- [ ] Touch targets are at least 44x44px
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Forms are easy to fill on mobile
- [ ] Navigation menu works on mobile
- [ ] 3D robot performs well on mobile

---

## 🎨 Design Consistency

- [ ] All colors match design system
- [ ] Typography is consistent
- [ ] Spacing follows scale
- [ ] Animations are smooth
- [ ] Dark/Light mode both work
- [ ] Brand colors are correct

---

## 🔐 Security Checks

- [ ] No sensitive data in client-side code
- [ ] API keys are in environment variables
- [ ] HTTPS is enabled
- [ ] Security headers configured
- [ ] CORS is properly set up
- [ ] Rate limiting on API routes (if needed)

---

## 📈 Analytics Setup (Optional)

### Google Analytics
```typescript
// Add to src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
import { Analytics } from '@vercel/analytics/react'
// Add <Analytics /> to layout
```

---

## 🎯 Performance Targets

- **Lighthouse Score**: 90+
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle Size**: < 200KB initial load

---

## ✨ Final Checks

- [ ] All links work
- [ ] Contact form submits
- [ ] Social media links are correct
- [ ] Email links work
- [ ] Phone number is clickable
- [ ] Project links open in new tabs
- [ ] GitHub link works
- [ ] LinkedIn link works
- [ ] Facebook link works

---

## 🎉 You're Ready to Deploy!

Once all critical items are checked, you're good to go!

**Remember**: You can always update and redeploy. Don't let perfection be the enemy of good.

---

**Quick Deploy Command (Vercel)**:
```bash
npm install -g vercel
vercel
```

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: laurencelapating@gmail.com
