import express from 'express';
//import bodyParser from 'body-parser';
//import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
    


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());// allows us to parse JSON request body 

app.use("/api/products", productRoutes);//mounting routes

app.use("/api/auth", authRoutes);//mounting auth routes 
//console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
    connectDB();    
    console.log("Server is running at http://localhost:"+ PORT);
});