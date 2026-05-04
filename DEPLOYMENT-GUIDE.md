# 🚀 Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is now **ready for deployment**! Here's what was cleaned up:

### 🗑️ **Removed Unused Files:**
- ✅ `/image` folder (moved to `/public/projects`)
- ✅ `/design-system` folder (not needed in production)
- ✅ `/src/components/demo` folder (unused demo components)

### 📁 **Current Project Structure:**
```
MYPORT/
├── public/
│   └── projects/          # Project images
│       ├── eunoia.png
│       ├── being-suites.png
│       ├── asa-ka-go.png
│       └── nursescript.png
├── src/
│   ├── app/
│   │   ├── api/chat/      # Gemini AI API route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/            # UI components
│   │   ├── hero-section.tsx
│   │   ├── contact-section.tsx (unused but kept)
│   │   ├── footer.tsx (unused but kept)
│   │   ├── projects-section.tsx (unused but kept)
│   │   ├── skills-section.tsx (unused but kept)
│   │   └── providers.tsx
│   ├── contexts/
│   │   └── theme-context.tsx
│   └── lib/
│       └── utils.ts
├── .env.local             # Your environment variables
├── .env.example           # Example env file
├── .gitignore             # Git ignore rules
├── vercel.json            # Vercel configuration
├── package.json
└── README.md
```

---

## 🔐 **Step 1: Prepare Environment Variables**

### **Required Environment Variable:**
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### **Where to Get Your API Key:**
1. Go to: https://aistudio.google.com/apikey
2. Click "Create API Key"
3. Copy the key

---

## 🌐 **Step 2: Deploy to Vercel**

### **Option A: Deploy via Vercel Dashboard (Recommended)**

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Or upload your project folder

3. **Configure Project:**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Add Environment Variable:**
   - Go to "Environment Variables"
   - Add: `GEMINI_API_KEY` = `your_api_key`
   - Apply to: Production, Preview, Development

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### **Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? (default: MYPORT)
# - Directory? ./
# - Override settings? No

# Add environment variable
vercel env add GEMINI_API_KEY

# Deploy to production
vercel --prod
```

---

## 🎯 **Step 3: Post-Deployment Verification**

### **Test These Features:**

1. **✅ Homepage Loads**
   - Hero section displays
   - 3D Spline scene loads
   - Theme toggle works

2. **✅ AI Chatbot**
   - Opens on desktop
   - Responds to questions
   - Shows project images
   - Fallback works if Gemini quota exceeded

3. **✅ Theme Toggle**
   - Dark mode (default)
   - Light mode switch
   - Persists on reload

4. **✅ Social Links**
   - LinkedIn works
   - GitHub works
   - Facebook works
   - Email works

5. **✅ Project Images**
   - All 4 project images load
   - Clickable and redirect to URLs

---

## ⚙️ **Vercel Configuration Details**

### **vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["sin1"]
}
```

**Region:** `sin1` = Singapore (closest to Philippines for best performance)

---

## 🔧 **Troubleshooting**

### **Issue: Build Fails**
**Solution:**
```bash
# Test build locally first
npm run build

# If it works locally, check Vercel logs
# Usually it's a missing environment variable
```

### **Issue: Chatbot Not Working**
**Solution:**
1. Check if `GEMINI_API_KEY` is set in Vercel
2. Check API quota: https://ai.dev/rate-limit
3. Fallback should work even if Gemini fails

### **Issue: Images Not Loading**
**Solution:**
1. Check if images are in `/public/projects/`
2. Verify image paths in code: `/projects/image-name.png`
3. Check Vercel deployment logs

### **Issue: Theme Not Persisting**
**Solution:**
- This is normal on first visit
- Theme saves to localStorage after first toggle
- Works correctly after that

---

## 📊 **Performance Optimization**

### **Already Optimized:**
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Static generation where possible
- ✅ Minimal bundle size
- ✅ Fast API routes

### **Vercel Automatic Features:**
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Edge caching
- ✅ Compression
- ✅ Image optimization

---

## 🎨 **Custom Domain (Optional)**

### **Add Your Own Domain:**

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Domains
   - Add domain: `yourname.com`

2. **Update DNS:**
   - Add CNAME record
   - Point to: `cname.vercel-dns.com`

3. **Wait for Propagation:**
   - Usually 5-10 minutes
   - Vercel auto-configures HTTPS

---

## 📈 **Monitoring**

### **Vercel Analytics (Free):**
- Real-time visitors
- Page views
- Performance metrics
- Error tracking

### **Enable Analytics:**
```bash
# In your project
npm install @vercel/analytics

# Add to layout.tsx
import { Analytics } from '@vercel/analytics/react'

// In your layout
<Analytics />
```

---

## 🔄 **Continuous Deployment**

### **Automatic Deployments:**
Once connected to GitHub:
- ✅ Push to `main` → Auto-deploy to production
- ✅ Push to other branches → Preview deployments
- ✅ Pull requests → Preview URLs

### **Manual Deployments:**
```bash
# Deploy current state
vercel

# Deploy to production
vercel --prod
```

---

## 💰 **Cost**

### **Vercel Free Tier Includes:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Analytics

**Your portfolio will be FREE on Vercel!** 🎉

---

## 🎯 **Final Checklist Before Deploy**

- [ ] `.env.local` has `GEMINI_API_KEY`
- [ ] `npm run build` works locally
- [ ] All images in `/public/projects/`
- [ ] `.gitignore` includes `.env.local`
- [ ] Unused files removed
- [ ] Test chatbot locally
- [ ] Test theme toggle
- [ ] Social links are correct

---

## 🚀 **Ready to Deploy!**

Your portfolio is **production-ready**! 

**Next Steps:**
1. Push to GitHub (if not already)
2. Connect to Vercel
3. Add `GEMINI_API_KEY` environment variable
4. Deploy!

**Estimated Deployment Time:** 2-3 minutes

**Your live URL will be:** `https://your-project-name.vercel.app`

---

## 📞 **Need Help?**

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support

**Good luck with your deployment!** 🎉
