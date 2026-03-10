# ESCAPE LAB — Compréhension Écrite TCF Canada

## 🚀 Déployer sur Vercel

### Option 1 : Vercel CLI
```bash
npm install
npx vercel
```

### Option 2 : GitHub + Vercel
1. Push ce dossier sur un repo GitHub
2. Va sur vercel.com → New Project → Import ton repo
3. Framework : Vite
4. Build Command : `npm run build`
5. Output Directory : `dist`
6. Deploy !

### Option 3 : Netlify
```bash
npm install
npm run build
```
Puis drag & drop le dossier `dist/` sur netlify.com/drop

## 🏗️ Développement local
```bash
npm install
npm run dev
```
→ http://localhost:5173

## 📁 Structure
```
escape-lab-vercel/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── src/
    ├── main.jsx          ← Hub (page d'accueil + router)
    └── pages/
        ├── Serie1.jsx    ← 39 questions (Alpha)
        ├── Serie2.jsx    ← 39 questions (Bravo)
        ├── Serie3.jsx    ← 39 questions (Charlie)
        ├── Serie4.jsx    ← 39 questions (Delta)
        └── Serie5.jsx    ← 39 questions (Echo)
```

## 🎯 Contenu
- 195 questions au total (5 × 39)
- Format TCF authentique avec vrais pièges
- Documents visuels : SMS, panneaux, billets, menus, lettres, affiches, emails, articles, notes, cartes postales
- Difficulté progressive : A1/A2 → B1/B2 → C1/C2
- Timer 60 minutes
- Scoring NCLC (1-10)
- 100% React, zéro API, code éternel
