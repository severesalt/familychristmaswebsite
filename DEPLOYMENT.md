# Deployment Guide

## GitHub Pages Deployment

### Quick Start

1. **Create a GitHub repository** (or use an existing one)

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/christmas_serena.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy

4. **Wait for deployment** (usually 1-2 minutes)

5. **Your site is live at**:
   ```
   https://YOUR_USERNAME.github.io/christmas_serena/
   ```

### Customizing the Base Path

If your repository has a different name, update `vite.config.js`:

```javascript
base: process.env.GITHUB_PAGES === 'true' ? '/YOUR_REPO_NAME/' : '/',
```

### Deploying to Root Domain

To deploy to `https://YOUR_USERNAME.github.io` (without the repo name):

1. Create a repository named exactly `YOUR_USERNAME.github.io`
2. Update `vite.config.js`:
   ```javascript
   base: '/',
   ```
3. Update the build script in `package.json`:
   ```json
   "build:github": "vite build"
   ```

### Troubleshooting

**Images not loading?**
- Make sure photos are in `public/FamilyChristmas/` directory
- Check that the base path in `vite.config.js` matches your repository name

**404 errors?**
- Ensure `.nojekyll` file exists in the root
- Check that GitHub Pages is using GitHub Actions, not Jekyll

**Build fails?**
- Check GitHub Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version in workflow (currently set to 18)

