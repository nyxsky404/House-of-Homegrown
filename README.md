# <img src="public/logo.png" alt="House of Homegrown Logo" width="30" style="vertical-align: middle;"/> House of Homegrown

> **Rooted in India** — A modern D2C e-commerce platform celebrating India's artisanal heritage through sustainable, handcrafted treasures.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## 📖 About the Project

**House of Homegrown** is an Indian D2C e-commerce brand inspired by the timeless philosophy of **"Roti, Kapda aur Makan"** (Food, Clothing, and Shelter) — the three essential pillars of life. We offer sustainable, natural, and Indian-made products across textiles, home & living, wellness, and lifestyle categories.

### Brand Philosophy
- **Roti** (Food & Wellness) — Organic honey, artisanal spices, traditional wellness essentials
- **Kapda** (Textiles & Clothing) — Handwoven fabrics, khadi clothing, block-printed textiles
- **Makan** (Home & Decor) — Terracotta art, brass decor, handcrafted home essentials

---

## ✨ Features

- 🎨 **Premium Swadeshi Design** — Earthy color palette with terracotta, sage, golden accents
- 📱 **Mobile-First Responsive** — Optimized for all screen sizes
- 🛍️ **Complete E-commerce Flow** — Shop, product details, cart functionality
- ♿ **Accessible UI Components** — Built with Radix UI primitives
- 🎭 **Custom Animations** — Smooth transitions and hover effects
- 🌐 **Modern Routing** — Client-side navigation with React Router
- 🎯 **SEO Ready** — Semantic HTML and proper meta structure

---

## 🚀 Tech Stack

### Core
- **React 19.2** — Modern UI library with latest features
- **Vite 7.2** — Lightning-fast build tool and dev server
- **React Router 7** — Declarative routing for React

### Styling & UI
- **Tailwind CSS 3.4** — Utility-first CSS framework
- **shadcn/ui** — Re-usable component library
- **Radix UI** — Accessible component primitives
- **Lucide React** — Beautiful icon library
- **Class Variance Authority** — Component variant management

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/nyxsky404/House-of-Homegrown.git
cd House-of-Homegrown

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
House-of-Homegrown/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/
│   │   ├── home/       # Home page components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   ├── sections/   # Reusable sections (Header, etc.)
│   │   └── ui/         # shadcn/ui components
│   ├── lib/            # Utilities (cn helper)
│   ├── mockData/       # Mock product data
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Faq.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json       # Path aliases configuration
├── package.json
├── postcss.config.js
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

---

## 🎨 Design System

### Color Palette

```javascript
// Brand Colors
--terracotta: hsl(16, 65%, 55%)      // Primary brand color
--sage: hsl(140, 25%, 45%)           // Secondary nature-inspired green
--golden: hsl(42, 78%, 52%)          // Accent highlight color
--linen: hsl(40, 30%, 96%)           // Light background
--charcoal: hsl(30, 10%, 20%)        // Dark text color
--cream: hsl(45, 40%, 94%)           // Soft background alternative
```

### Typography

- **Headings:** Cormorant Garamond (serif) — Elegant and classic
- **Body:** DM Sans (sans-serif) — Clean and readable

### Custom Font Sizes
- `text-display-lg` — 4.5rem (72px)
- `text-display` — 3.5rem (56px)
- `text-display-sm` — 2.5rem (40px)
- `text-heading-lg` — 2rem (32px)
- `text-heading` — 1.5rem (24px)
- `text-heading-sm` — 1.25rem (20px)

### Button Variants
- `default` — Primary terracotta button
- `outline` — Border with transparent background
- `secondary` — Sage green button
- `ghost` — Minimal hover effect
- `link` — Text link style

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, categories, featured products |
| **Shop** | `/shop` | Product listing with filters |
| **Product Detail** | `/product/:id` | Individual product page |
| **About Us** | `/about` | Brand story and mission |
| **Contact** | `/contact` | Contact form and information |
| **FAQ** | `/faq` | Frequently asked questions |


---

## 🛠️ Development Guidelines

### Adding New Components

1. Use shadcn/ui for base components:
```bash
npx shadcn@latest add [component-name]
```

2. Create custom components in appropriate directories:
   - Layout components → `src/components/layout/`
   - Page-specific → `src/components/[page-name]/`
   - Reusable sections → `src/components/sections/`

### Using Path Aliases

Import using `@/` prefix:
```javascript
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout/Layout"
```

### Styling Conventions

- Use Tailwind utility classes
- Custom styles in `index.css` using `@layer components`
- Follow mobile-first responsive design: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

---

## 🎯 Key Features Implementation

### Navigation
- Fixed header with backdrop blur
- Mobile-responsive with hidden nav items on small screens
- Active route highlighting

### Product Cards
- Image zoom on hover
- Quick view functionality
- Price formatting in INR
- Category badges

### Animations
- Hero gradient overlays
- Category card transitions
- Button shimmer effects
- Smooth page transitions

---

## 🚧 Roadmap

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Product reviews
- [ ] Wishlist feature
- [ ] Order tracking
- [ ] Email notifications

---

## 📝 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Authors

**nyxsky404**
- GitHub: [@nyxsky404](https://github.com/nyxsky404)

---

## 🙏 Acknowledgments

- Design inspired by traditional Indian aesthetics
- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

<div align="center">
  <strong>Built with ❤️ for Indian artisans and sustainable living</strong>
  
  **House of Homegrown** — Rooted in India, Growing Together
</div>
