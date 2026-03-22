# Paradise Nursery - E-Plant Shopping

A boutique plant shopping experience built with React and Vite. Browse curated categories, add plants to your cart, and manage quantities with a refined, luxury-inspired UI.

## Features
- Category-based product browsing
- Add to cart, increase, decrease, and remove items
- Cart totals for item count and cost
- Responsive, luxury-themed interface with Tailwind CSS

## Tech Stack
- React 19 + Vite
- React Router for routing
- Redux Toolkit for state management
- Tailwind CSS + PostCSS for styling
- ESLint for linting

## Packages
Dependencies
- `react`: UI library
- `react-dom`: React DOM renderer
- `react-router-dom`: Client-side routing
- `@reduxjs/toolkit`: Redux state utilities
- `react-redux`: React bindings for Redux

Dev Dependencies
- `vite`: Dev server and build tool
- `@vitejs/plugin-react`: React Fast Refresh and JSX support
- `tailwindcss`: Utility-first styling
- `postcss`: CSS processing pipeline
- `autoprefixer`: Vendor prefixing for CSS
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`: Linting and rules
- `@types/react`, `@types/react-dom`: Type definitions for tooling

## Getting Started
Prerequisites
- Node.js (LTS recommended)
- npm

Install dependencies
```bash
npm install
```

Run the dev server
```bash
npm run dev
```

Build for production
```bash
npm run build
```

Preview the production build
```bash
npm run preview
```

Lint the codebase
```bash
npm run lint
```

## Project Structure
- `src/pages/AboutUs.jsx`: Landing page hero
- `src/pages/ProductList.jsx`: Product catalog by category
- `src/pages/Cart.jsx`: Cart view and order summary
- `src/components/NavBar.jsx`: Top navigation
- `src/components/CartItem.jsx`: Individual cart item card
- `src/store/Store.jsx`: Redux store configuration
- `src/store/CartSlice.jsx`: Cart state and reducers
- `src/index.css`: Global styling and luxury theme setup

## Styling Notes
- Fonts are loaded via CSS import in `src/index.css`.
- The UI uses warm neutrals and gold accents for a premium aesthetic.
- Update design tokens and base typography inside `src/index.css`.

## Production Notes
- Use `npm run build` for optimized output.
- Deploy the generated `dist` folder to any static hosting provider.
- Validate with `npm run preview` before release.