# 🛒 AktMart — MERN Stack Product Store (Under Development) 
## 🎓 Learning Credit

<p>
  <img src="https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=udemy&logoColor=white"/>
</p>

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
<p> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> </p>

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
<p> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakraui&logoColor=white"/> </p> <p align="center"> <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="500"/> </p>
<p> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/> 

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
