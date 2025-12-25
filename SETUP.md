# Quick Setup Guide

## First Time Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Copy your photos**:
   ```bash
   # Make sure photos are in public/FamilyChristmas/
   cp FamilyChristmas/*.JPG public/FamilyChristmas/
   # Or use the script:
   ./copy-photos.sh
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

4. **Deploy to GitHub Pages**:
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Add your GitHub repository
   git remote add origin https://github.com/YOUR_USERNAME/christmas_serena.git
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Select "GitHub Actions"
   - Your site will be live in 1-2 minutes!

## File Structure

```
christmas_serena/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── public/
│   └── FamilyChristmas/        # Put your photos here!
├── src/
│   ├── components/             # React components
│   ├── App.jsx                 # Main app
│   └── index.css               # Styles
├── .nojekyll                   # Required for GitHub Pages
├── package.json
└── vite.config.js             # Build configuration
```

## Important Notes

- **Photos must be in `public/FamilyChristmas/`** for them to be accessible
- The app is configured for a repository named `christmas_serena`
- If your repo has a different name, update `base` in `vite.config.js`
- GitHub Actions will automatically build and deploy on every push

