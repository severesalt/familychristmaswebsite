# Digital Family Scrapbook

A beautiful, skeuomorphic web application that displays family photos in a nostalgic, handmade scrapbook style. Built with React, Tailwind CSS, and Framer Motion.

## Features

- **Polaroid-style Photos**: Photos are displayed with white borders and slight random rotations
- **Interactive Timeline**: Vintage-styled slider to filter photos by year
- **Sticky Notes**: Handwritten-style captions for each photo
- **Washi Tape Decorations**: Semi-transparent tape strips holding down photo corners
- **Paper Texture Background**: Subtle kraft-paper texture for an authentic scrapbook feel
- **Smooth Animations**: Framer Motion animations for hover effects and transitions
- **Scattered Layout**: Photos are arranged in a "messy but functional" scrapbook style

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Photos

Copy your photos to the `public/FamilyChristmas/` directory. The app will automatically load all `.JPG` files from this folder.

**Option A: Copy photos manually**
```bash
# Copy all JPG files from the FamilyChristmas folder to public
cp FamilyChristmas/*.JPG public/FamilyChristmas/
```

**Option B: Use the provided script**
```bash
# Run the copy script (make sure you're in the project root)
./copy-photos.sh
```

**Option C: Manual drag and drop**
- Open the `public/FamilyChristmas/` folder
- Copy your `.JPG` files from the `FamilyChristmas` folder into it

**Note**: The app is pre-configured to load photos from `/FamilyChristmas/` path. Make sure your photos are in `public/FamilyChristmas/` directory for them to be accessible.

### 3. Update Photo List (Optional)

If you want to dynamically load photos, you can:
- Update the `photoNames` array in `src/App.jsx`
- Or create a build script to generate the list automatically

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

1. **Push to GitHub**: Push your code to a GitHub repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/christmas_serena.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main` or `master` branch

3. **Your site will be live at**:
   ```
   https://YOUR_USERNAME.github.io/christmas_serena/
   ```

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build for GitHub Pages
npm run build:github

# The dist folder contains the built files
# You can upload the contents of dist/ to your hosting service
```

### Important Notes for GitHub Pages

- The repository name determines the base path. If your repo is named `christmas_serena`, the base path is `/christmas_serena/`
- If you want to deploy to the root domain (yourusername.github.io), you'll need to:
  1. Create a repository named `YOUR_USERNAME.github.io`
  2. Update `vite.config.js` to set `base: '/'` instead of `'/christmas_serena/'`
  3. Update the workflow file if needed

## Project Structure

```
christmas_serena/
├── public/
│   └── FamilyChristmas/     # Place your photos here
├── src/
│   ├── components/
│   │   ├── PhotoGallery.jsx  # Main gallery component
│   │   ├── PolaroidPhoto.jsx # Individual photo with Polaroid styling
│   │   ├── StickyNote.jsx    # Caption sticky notes
│   │   ├── TimelineSlider.jsx # Year filter slider
│   │   └── WashiTape.jsx     # Decorative tape elements
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── package.json
└── tailwind.config.js
```

## Customization

### Change Photo Directory

Update the photo path in `src/App.jsx`:
```javascript
src: `/FamilyChristmas/${name}`
```

### Adjust Styling

- **Paper texture**: Modify `.paper-texture` class in `src/index.css`
- **Polaroid size**: Adjust width/height in `src/components/PolaroidPhoto.jsx`
- **Colors**: Update Tailwind colors in `tailwind.config.js`

### Add More Years

The timeline automatically detects years from photo metadata. To manually set years, update the `year` property in the photo objects in `src/App.jsx`.

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Google Fonts (Kalam)**: Handwritten font for captions

## Browser Support

Modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties

## Deployment

This project is ready for GitHub Pages deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

**Quick deploy:**
1. Push to GitHub
2. Enable GitHub Pages in repository settings (use GitHub Actions)
3. Your site will auto-deploy on every push!

## License

MIT

