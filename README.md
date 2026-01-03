# 🛒 AktMart — MERN Stack Product Store (Under Development) 
Learning credit: Udemy</br></br></br>
AktMart is a full-stack MERN application where users can create, view, update, and delete products.  
It uses **MongoDB, Express.js, React (Vite), Zustand, and Chakra UI** for a clean, modern UI and smooth state management.

---

## 🚀 Features (Current & Upcoming)

### 🗄️ **Backend**
◉ RESTful API using Express.js</br>
◉ MongoDB with Mongoose models</br>
◉ Product CRUD operations (Create, Read, Update, Delete)</br>
◉ Auth middleware to protect routes</br>
◉ Clean separation of:
 Routes,
Controllers,
 Models,
 Middleware,
 centralized error handling,
Production-ready server setup (static frontend serving)
### 🖥️ **Frontend**
◉ Modern React (Vite) setup</br>
◉ Chakra UI for clean and responsive UI</br>
◉ Zustand for global state management</br>
◉ React Router for navigation</br>
◉ Dark / Light mode toggle</br>
◉ Toast notifications for all major actions</br>
◉ Dynamic Navbar with:</br>
- Cart badge (live item count)
- Login / Logout state 

### 🛒 Cart System:

◉ Add products to cart</br>
◉ Quantity management</br>
◉ Cart badge showing number of items</br>
◉ Dedicated Cart page</br>

### 📦 Product Management

◉ View all products</br>
◉ Create products (authenticated users only)</br>
◉ Edit products (authenticated users only)</br>
◉ Delete products (authenticated users only)</br>
◉ Proper authorization error handling</br>
◉ UI feedback for unauthorized actions</br>

### 🎥 Demo Videos

Working demos of the application are available inside the repository:</br></br>
🔐 Authentication Flow </br>
📦 Product CRUD Operations </br>
🛒 Cart & Checkout Flow </br>

State managed globally via Zustand
---

## 📦 Folder Structure
```
ProductStore
│
├── Backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── product.controller.js
│   │   └── auth.controller.js
│   │
│   ├── middleware
│   │   └── auth.middleware.js
│   │
│   ├── models
│   │   ├── product.model.js
│   │   └── user.model.js
│   │
│   ├── routes
│   │   ├── product.route.js
│   │   └── auth.route.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Frontend
│   ├── public
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   └── AuthPage.jsx
│   │   │
│   │   ├── store
│   │   │   ├── product.js
│   │   │   ├── cart.js
│   │   │   └── auth.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── demos
│   ├── auth-flow.mp4
│   ├── product-crud.mp4
│   └── cart-flow.mp4
│
├── .gitignore
└── README.md
