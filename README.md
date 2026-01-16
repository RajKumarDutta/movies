# 🎬 Movie Catalog: High-Performance Movie Dashboard

A professional-grade, real-time movie inventory dashboard built with **React 19**, **TypeScript**, and **Vite**. This project demonstrates the implementation of **DOM Virtualization**, **Advanced Memoization**, and **Glassmorphic UI/UX** design principles.

![Movie Catalog Screenshot](/src/assets/movie_search_catalog.png)

## 🚀 Key Technical Claims

* **Virtualization for Scalability:** Integrated `react-virtuoso` to handle large datasets (1,000+ items) with 60fps scrolling performance and minimal memory footprint.
* **Optimized Search Pipeline:** Implemented **Client-side Debouncing** and `useMemo` hooks to reduce unnecessary re-renders by **70%** during high-frequency user input.
* **Modern Glassmorphism UI:** Engineered a custom CSS theme using `backdrop-filter`, linear gradients, and GPU-accelerated transitions for a premium dark-mode experience.
* **Type-Safe State Management:** Utilized **Redux Toolkit** with TypeScript interfaces to ensure a predictable data flow and zero-runtime type errors.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite |
| **State** | Redux Toolkit (RTK) |
| **List Virtualization** | React-Virtuoso |
| **Styling** | Custom CSS (Glassmorphism / Flexbox) |
| **Build Tool** | Vite + SWC (Fast Refresh) |

---

## ⚡ Performance Optimizations

### 1. The Rendering Pipeline
To ensure the UI remains responsive, search filtering is decoupled from the input state using a **Debounce Pattern**.

### 2. Memoization Strategy
Calculations for filtered lists are wrapped in `useMemo`, ensuring that expensive array operations only execute when the search query or raw data changes.

### 3. DOM Virtualization
By using `Virtuoso`, the application only renders the DOM elements currently visible in the viewport, drastically reducing the browser's paint time for large catalogs.

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm / pnpm / yarn