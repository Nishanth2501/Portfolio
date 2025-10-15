# Nishanth Reddy - Portfolio

A modern, responsive portfolio website built with React and Vite.

## 🚀 Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite and deploy!
7. Your URL will be: `https://nishanthreddy.vercel.app` (or similar)

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "Add new site" → "Import an existing project"
5. Connect to GitHub and select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy!
8. Your URL will be: `https://nishanthreddy.netlify.app` (or similar)

### Option 3: GitHub Pages

1. Create a GitHub account with username `nishanthreddy`
2. Create a repository named `nishanthreddy.github.io`
3. Install gh-pages: `npm install -D gh-pages`
4. Add to package.json scripts:
```json
"homepage": "https://nishanthreddy.github.io",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
5. Run: `npm run deploy`
6. Your URL will be: `https://nishanthreddy.github.io`

## ✨ Features

- Modern, responsive design
- Smooth scrolling navigation
- Beautiful gradient hero section
- Sections for About, Projects, Skills, and Contact
- Easy to customize

## 📝 Customization

Edit the content in `src/App.jsx` to add your:
- Personal information
- Projects
- Skills
- Contact information
- Social media links

## 🎨 Styling

Modify `src/App.css` and `src/index.css` to customize colors, fonts, and layout.

---

**Note:** After deployment, any changes you push to GitHub will automatically redeploy on Vercel/Netlify!

