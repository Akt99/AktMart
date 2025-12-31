import express from 'express';
//import bodyParser from 'body-parser';
//import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
import path from 'path';    


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

/* ---------- PATH SETUP (ES MODULE FIX) ---------- */
const __dirname = path.resolve();


app.use(express.json());// allows us to parse JSON request body 

app.use("/api/products", productRoutes);//mounting routes

app.use("/api/auth", authRoutes);//mounting auth routes 
//console.log(process.env.MONGO_URI);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../Frontend/dist"))
  );
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
    connectDB();    
    console.log("Server is running at http://localhost:"+ PORT);
});
