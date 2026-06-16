# TechStore Tanzania — E-Commerce Frontend

A modern, fully responsive e-commerce website **frontend** for a fictional electronics
store, **TechStore Tanzania**. Built with **React** and **React Router DOM** — no backend,
database, authentication, or payment integration. All product data is local and the cart
is simulated entirely with React state.

## ✨ Features

- **Home** — hero banner, featured products, customer benefits, and CTA sections.
- **Products** — searchable, category-filterable grid of 12 sample products with ratings.
- **Cart** — quantity controls, per-item totals, order summary (subtotal + delivery + total),
  and a simulated checkout. Cart persists in `localStorage`.
- **Contact** — contact info, validated contact form, business hours, FAQ accordion, and a
  map placeholder.
- Sticky responsive navbar with a live cart badge and mobile hamburger menu.
- Smooth page transitions, hover effects, and a clean, professional design.

## 🎨 Design

| Token       | Value     |
| ----------- | --------- |
| Primary     | `#2563EB` |
| Secondary   | `#1E293B` |
| Accent      | `#F59E0B` |
| Background  | `#F8FAFC` |
| Text        | `#334155` |

Fonts: **Poppins** (headings) and **Inter** (body), loaded from Google Fonts.

## 🛠 Tech Stack

- React (functional components + hooks)
- React Router DOM
- React Context API for cart state
- Plain CSS (single global stylesheet with design tokens)
- Vite (dev server + build)

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   └── CartItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   └── Contact.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── utils/
│   └── format.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # build for production
npm run preview # preview the production build
```

> **Note:** Product images are loaded from Unsplash, so an internet connection is needed for
> them to display. A built-in SVG placeholder is shown automatically if an image fails to load.
