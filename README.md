# Ziad Ayman — Portfolio

Personal portfolio website built with React + Framer Motion.

---

## 🚀 Run Locally

### 1. Install Node.js
Download from https://nodejs.org (version 18 or higher recommended)

### 2. Install dependencies
```bash
cd portfolio
npm install
```

### 3. Start development server
```bash
npm start
```
Opens at http://localhost:3000

### 4. Build for production
```bash
npm run build
```
Creates a `build/` folder ready to deploy.

---

## 🌍 Deploy to Vercel (Free & Recommended)

### Option A — Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live at a `.vercel.app` URL in seconds.

### Option B — Via GitHub + Vercel Dashboard
1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
2. Go to https://vercel.com → New Project → Import your GitHub repo
3. Vercel auto-detects React → click **Deploy**
4. Done! Your site is live. Every `git push` auto-deploys.

---

## 🌍 Deploy to Netlify (Alternative)
1. Run `npm run build`
2. Go to https://app.netlify.com → Sites → Drag & drop the `build/` folder
3. Done — live URL instantly.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── ziad.jpg          
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── Cursor.jsx / .css
│   ├── data/
│   │   └── data.js        
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── vercel.json
├── package.json
└── README.md
```

## ✏️ Update Content
All text, links, and data are in `src/data/data.js` — edit that one file to update anything.
