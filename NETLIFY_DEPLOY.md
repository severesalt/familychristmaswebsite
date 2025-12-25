# Deploy to Netlify - Quick Guide

## Option 1: Drag & Drop (Easiest)

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Go to [netlify.com](https://netlify.com)** and sign up/login (free)

3. **Drag the `dist` folder** onto Netlify's deploy area

4. **Your site is live!** You'll get a URL like `random-name-123.netlify.app`

## Option 2: Connect GitHub (Automatic Deploys)

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/christmas_serena.git
   git push -u origin main
   ```

2. **Go to [netlify.com](https://netlify.com)** and sign up/login

3. **Click "New site from Git"**

4. **Connect GitHub** and select your repository

5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

6. **Done!** Netlify will automatically deploy on every push to your main branch.

## Custom Domain (Optional)

1. Go to your site settings in Netlify
2. Click "Domain settings"
3. Add your custom domain
4. Follow the DNS configuration instructions

## What's Configured

- ✅ `netlify.toml` - Build configuration
- ✅ Base path set to `/` for Netlify
- ✅ All routes redirect to `index.html` for client-side routing

## Troubleshooting

**Build fails?**
- Make sure `package.json` has all dependencies
- Check Netlify build logs for errors

**Images not loading?**
- Verify photos are in `public/FamilyChristmas/` directory
- Check that paths start with `/` (e.g., `/FamilyChristmas/image.jpg`)

**404 errors?**
- The `netlify.toml` file should handle this automatically
- Make sure the redirect rule is in place

