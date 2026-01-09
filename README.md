# By Tessa Makeup

Landing page untuk By Tessa Makeup - Makeup Artist di Lumajang dengan konsep "The Modern Enchantment" (Medieval Floral).

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Development server
bun run dev

# Build untuk production
bun run build

# Preview production build
bun run preview
```

## 📁 Struktur Project

```
bytessamakeup/
├── src/
│   ├── components/
│   │   ├── HeroSection.astro      # Hero dengan rose frame
│   │   ├── AboutSection.astro     # Tentang Tessa
│   │   ├── ServicesSection.astro  # 4 layanan (Wedding, dll)
│   │   ├── PortfolioSection.astro # Gallery
│   │   └── FooterSection.astro    # Footer dengan CTA
│   ├── layouts/
│   │   └── Layout.astro           # Main layout + navbar
│   ├── pages/
│   │   └── index.astro            # Landing page
│   └── styles/
│       └── global.css             # Design system
├── public/
│   └── favicon.svg                # Wax seal icon
└── .github/
    └── workflows/
        └── deploy.yml             # GitHub Pages deployment
```

## 🎨 Design System

**Fonts:**

- Headings: Cormorant Garamond
- Body: Nunito Sans
- Accent: Great Vibes

**Colors:**

- Dusty Rose: `#D4A5A5`
- Antique Gold: `#C9A227`
- Deep Maroon: `#5C2E2E`
- Cream: `#FAF7F2`

## 🌐 Deploy ke GitHub Pages

1. Push ke repository GitHub
2. Buka Settings > Pages
3. Source: GitHub Actions
4. Workflow akan otomatis deploy saat push ke `main`

**Penting:** Update `astro.config.mjs` dengan username GitHub yang benar:

```js
site: 'https://USERNAME.github.io',
base: '/bytessamakeup',
```

## ✏️ Kustomisasi

### Ganti Nomor WhatsApp

Cari dan ganti `6281234567890` dengan nomor yang benar di:

- `src/layouts/Layout.astro`
- `src/components/FooterSection.astro`

### Ganti Foto

Ganti placeholder di setiap component dengan foto asli klien.
# bytessamakeup
