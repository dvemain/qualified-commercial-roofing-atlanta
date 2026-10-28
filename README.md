# Qualified Commercial Roofing of Atlanta

Vite + React single-page site.

## Run locally
```
npm install
npm run dev          # http://localhost:5173
```
Or serve the production build in `dist/` with any static server.

## Photos
Free-license Unsplash photos are listed in `public/img/images.txt`. Run `.\get-images.ps1` once (PowerShell) to download them into `public/img/` (and `dist/img/` if present).

## Structure
```
index.html              meta, fonts, root
src/main.jsx            entry
src/App.jsx             page sections
src/content.js          all copy and image paths
src/styles.css          design tokens + styles
src/components/         Logo.jsx (brand mark), Icon.jsx
public/favicon.svg      mark
public/logo-*.svg       full lockups (dark / white)
```
