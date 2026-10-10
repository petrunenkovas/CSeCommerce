# CS eCommerce

A Vue 2 storefront demo for browsing products, viewing details, and managing a shopping cart.

Originally built as a practice project focused on component-based interfaces, routing, and shared state. It has been lightly refreshed for portfolio presentation.

## Preview

<!-- Add a screenshot or GIF here -->

<!-- Add a live demo link if available -->

## Features

- Browse products and view product details
- Add products to a cart and choose quantities
- Review cart items and totals, and remove products
- Try clearly labeled demo sign-in and checkout flows

## Tech Stack

- Vue 2
- Vue Router 3
- Vuex 3
- JavaScript
- Axios
- Bootstrap 4 / CSS

## Technical Highlights

- Client-side routing for the catalog, product details, cart, and demo sign-in
- Shared product, cart, and demo account state with Vuex
- Product data and images loaded from the DummyJSON sample API
- Reactive cart totals and quantity handling

## Getting Started

Clone the repository and install dependencies.

```bash
npm install
npm run dev
```

Open the address printed by the development server.

## Project Status

This is an early learning project that retains its original Vue 2 and webpack 3 stack.

Sign-in and checkout are simulations. The app does not create accounts, process payments, or place real orders. The product catalog depends on the public DummyJSON API.
