# Amazon Clone

A storefront UI clone of Amazon, built as a practice project to exercise a production-style Next.js codebase: product catalog, product pages, cart and checkout flow.

## Stack

- Next.js (App Router) + React + TypeScript
- Redux Toolkit + React Redux for cart state
- Swiper for product carousels, React Icons / Lucide for icons
- Tailwind-style utility CSS (PostCSS)

## What's inside

The code lives in `Amazon-Clone-main/`:

- Route groups for product and user areas: `(product)`, `(user)`, `cart`, `checkout`, `list`
- Shared components, Redux slices, typed models and utilities under `src/`
- Loading, error and not-found states per route

## Getting started

```bash
cd Amazon-Clone-main
npm install
npm run dev
```
